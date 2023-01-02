import {
  DocumentTextIcon,
  MicrophoneIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import LessonTab from "../../components/language/LessonTab";
import TopicCard from "../../components/language/TopicCard";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/layout/Sidebar";

export default function LanguagePage() {
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex h-full">
          <Sidebar page="language" />
          <div className="grow py-8 px-10">
            <div className="flex overflow-y-scroll flex-col gap-5">
              <TopicCard status="complete" topicName="Family 1">
                <LessonTab
                  icon={<MicrophoneIcon />}
                  lessonName="Lesson 1"
                  status="complete"
                />
                <LessonTab
                  icon={<DocumentTextIcon />}
                  lessonName="Lesson 2"
                  status="complete"
                />
                <LessonTab
                  icon={<PencilIcon />}
                  lessonName="Lesson 3"
                  status="complete"
                />

                <LessonTab
                  icon={<QuestionMarkCircleIcon />}
                  lessonName="Quiz: N/A"
                  status="complete"
                />
              </TopicCard>

              <TopicCard status="inProgress" topicName="Family 2">
                <LessonTab
                  icon={<MicrophoneIcon />}
                  lessonName="Lesson 1"
                  status="inProgress"
                />
                <LessonTab
                  icon={<DocumentTextIcon />}
                  lessonName="Lesson 2"
                  status="inProgress"
                />
                <LessonTab
                  icon={<PencilIcon />}
                  lessonName="Lesson 3"
                  status="inProgress"
                />

                <LessonTab
                  icon={<QuestionMarkCircleIcon />}
                  lessonName="Quiz: N/A"
                  status="inProgress"
                />
              </TopicCard>

              <TopicCard status="notStarted" topicName="Family 3">
                <LessonTab
                  icon={<MicrophoneIcon />}
                  lessonName="Lesson 1"
                  status="notStarted"
                />
                <LessonTab
                  icon={<DocumentTextIcon />}
                  lessonName="Lesson 2"
                  status="notStarted"
                />
                <LessonTab
                  icon={<PencilIcon />}
                  lessonName="Lesson 3"
                  status="notStarted"
                />

                <LessonTab
                  icon={<QuestionMarkCircleIcon />}
                  lessonName="Quiz: N/A"
                  status="notStarted"
                />
              </TopicCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
