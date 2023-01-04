import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Layout from "../../components/layout/Layout";

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
  return (
    <Layout>
      <div className="h-full max-h-full overflow-y-auto">Quiz Page</div>
    </Layout>
  );
};

export default QuizPage;