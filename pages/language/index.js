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
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

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
      user: session.user,
    },
  };
};

export default function LanguagePage() {
  return (
    <Layout>
      <div className="flex h-full max-h-full">
        <Sidebar page="language" />
        <div className="p-8 flex w-full flex-col gap-5 overflow-y-auto pb-32">
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
    </Layout>
  );
}
