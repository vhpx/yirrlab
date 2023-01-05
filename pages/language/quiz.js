import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Tabs } from "@mantine/core";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import CommentTab from "../../components/culture/CommentTab";
import AnswerTab from "../../components/language/AnswerTab";
import QuizCard from "../../components/language/QuizCard";
import Layout from "../../components/layout/Layout";
import QuizController from "./QuizController";

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

const QuizPage = () => {
  const availableTabs = ["comments"];
  const [selectedTab, setSelectedTab] = useState(availableTabs[0]);
  return (
    <Layout>
      <div className="h-full max-h-full overflow-y-auto p-4 md:px-8 lg:pt-8 lg:px-16">
        <div className="text-4xl text-[#33363f] flex gap-2 justify-center items-center font-bold mb-5">
          <span>
            <QuestionMarkCircleIcon className="w-9" />
          </span>
          <span className="tracking-wide">Quiz</span>
        </div>

        <div className="text-center border-y text-2xl font-semibold py-2 text-[#939393]">
          SCORE: <span className="text-[#d9b050]">100%</span>
        </div>

        <div className="min-h-[16rem] my-12">
          <QuizCard
            status="correct"
            question="Question 1: What is the meaning of this word?"
          >
            <AnswerTab answer="Option a" />
            <AnswerTab answer="Option b" status="incorrect" />
            <AnswerTab answer="Option c" status="selected" />
            <AnswerTab answer="Option d" status="correct" />
          </QuizCard>
          <div className="mt-4">
            <QuizController />
          </div>
        </div>

        <div className="text-zinc-600 font-semibold mb-32">
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
          </Tabs>

          {selectedTab === "comments" && <CommentTab />}
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;
