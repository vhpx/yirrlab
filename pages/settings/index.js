import { Avatar, Textarea, TextInput } from "@mantine/core";
import Layout from "../../components/layout/Layout";
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
      user: session?.user || null,
    },
  };
};

export default function SettingsPage() {
  return (
    <>
      <Layout>
        <div className=" bg-[#f6f6f6] h-screen flex justify-center items-center">
          <div className="h-full w-full md:w-[60%] lg:w-[40%] flex flex-col gap-8 items-center bg-white p-8">
            <div className="text-3xl font-semibold">Account settings</div>
            <Avatar src="peacock.jpeg" className="w-44 h-44 rounded-full" />
            <div className="w-full flex flex-col gap-4">
              <TextInput size="lg" label="Name" />
              <TextInput size="lg" label="Email" />
              <Textarea
                size="lg"
                label="About"
                autosize
                minRows={3}
                maxRows={7}
              />
              <div className="text-right ">
                <button className="text-white mt-2 rounded-full hover:cursor-pointer px-4 bg-[#0aa956] p-2">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
