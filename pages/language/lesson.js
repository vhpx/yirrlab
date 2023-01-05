import {
  MicrophoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { Tabs } from "@mantine/core";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useState } from "react";
import CommentTab from "../../components/culture/CommentTab";
import AnswerTab from "../../components/language/AnswerTab";
import QuizCard from "../../components/language/QuizCard";
import Layout from "../../components/layout/Layout";
import mockQuestions from "../../components/data/questions";
import QuizController from "./QuizController";
import questions from "../../components/data/questions";

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isDev = process.env.NODE_ENV === "development";

  if (!session && !isDev)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session?.user || null,
    },
  };
};

const LessonPage = () => {
  const availableTabs = ["excercises", "comments"];
  const [selectedTab, setSelectedTab] = useState(availableTabs[0]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const [answers, setAnswers] = useState(questions.map((_) => null));

  const handleCheck = () => {
    setIsChecked(true);

    if (answer === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsIncorrect(true);
    }

    setAnswers((prev) =>
      prev.map((s, i) => (i === currentQuestion ? answer : s))
    );
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setIsChecked(false);
    setIsCorrect(false);
    setIsIncorrect(false);
    setAnswer(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <Layout>
      <div className="h-full max-h-full overflow-y-auto p-4 md:px-8 lg:pt-8 lg:px-16">
        <div className="text-4xl text-[#33363f] flex gap-2 items-center font-bold mb-5">
          <span>
            <MicrophoneIcon className="w-9" />
          </span>
          <span className="tracking-wide">Lesson 2:</span>
        </div>

        <Image
          src="/peacock.jpeg"
          alt="Picture of the author"
          width={1152}
          height={746}
          className="object-cover h-[50vh] w-full"
        />

        <div className="min-h-[16rem] my-12">Content</div>

        <div className="text-zinc-600 font-semibold mb-16">
          <Tabs
            value={selectedTab}
            onChange={setSelectedTab}
            color="green"
            className="mb-4"
          >
            <Tabs.List>
              {availableTabs.map((str) => (
                <Tabs.Tab
                  key={str}
                  value={str}
                  onClick={() => setSelectedTab(str)}
                >
                  <div
                    className={`capitalize font-bold ${
                      selectedTab === str ? "text-[#0da955]" : "text-zinc-500"
                    }`}
                  >
                    {str}
                  </div>
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Tabs.Panel className="pt-8" value="excercises">
              {isFinished ? (
                <div>
                  <div className="text-4xl text-[#33363f] flex gap-2 justify-center items-center font-bold mb-5">
                    <span>
                      <QuestionMarkCircleIcon className="w-9" />
                    </span>
                    <span className="tracking-wide">Exercise</span>
                  </div>

                  <div className="text-center border-y text-2xl font-semibold py-2 text-zinc-700">
                    SCORE:{" "}
                    <span className={"text-purple-500 font-bold"}>
                      {((score / questions.length) * 100).toFixed(0)}%
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    {questions.map((q, idx) => (
                      <QuizCard
                        key={q.question}
                        index={idx}
                        question={q.question}
                        status={
                          answers[idx] === q.answer ? "correct" : "incorrect"
                        }
                      >
                        {q.options.map((option, index) => (
                          <AnswerTab
                            key={option}
                            answer={option}
                            status={
                              answers[idx] === option
                                ? answers[idx] === q.answer
                                  ? "correct"
                                  : "incorrect"
                                : q.answer === option
                                ? "correct"
                                : "default"
                            }
                            disabled
                            isLast={index === q.options.length - 1}
                          />
                        ))}
                      </QuizCard>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <QuizCard
                    index={currentQuestion}
                    question={questions[currentQuestion].question}
                    status={
                      isCorrect ? "correct" : isIncorrect ? "incorrect" : ""
                    }
                  >
                    {questions &&
                      questions[currentQuestion].options.map(
                        (option, index) => (
                          <AnswerTab
                            key={option}
                            answer={option}
                            onClick={() => setAnswer(option)}
                            status={
                              answer === option
                                ? isCorrect
                                  ? "correct"
                                  : isIncorrect
                                  ? "incorrect"
                                  : "selected"
                                : "default"
                            }
                            disabled={isChecked}
                            isLast={
                              index ===
                              questions[currentQuestion].options.length - 1
                            }
                          />
                        )
                      )}
                  </QuizCard>

                  <QuizController
                    checked={isChecked}
                    finished={currentQuestion === questions.length - 1}
                    statuses={answers.map((a, i) =>
                      !a
                        ? "default"
                        : a === questions[i].answer
                        ? "correct"
                        : "incorrect"
                    )}
                    onCheck={handleCheck}
                    onNext={handleNext}
                    disabled={answer === null}
                  />
                </div>
              )}
            </Tabs.Panel>
          </Tabs>

          {selectedTab === "comments" && <CommentTab />}
        </div>
        <div className="flex justify-between mb-32">
          <div className="px-4 py-2 font-semibold hover:cursor-pointer bg-[#0da955] rounded-full text-white">
            Lesson 1: Family 1
          </div>
          <div className="px-4 py-2 font-semibold hover:cursor-pointer bg-[#0da955] rounded-full text-white">
            Lesson 3: Family 3
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LessonPage;
