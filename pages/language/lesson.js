import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Layout from "../../components/layout/Layout";

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
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

const LessonPage = () => {
  return (
    <Layout>
      <div className="h-full max-h-full overflow-y-auto">Lesson Page</div>
    </Layout>
  );
};

export default LessonPage;
