import { Avatar, Textarea, TextInput } from "@mantine/core";
import Layout from "../../components/layout/Layout";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import GreenButton from "../../components/buttons/GreenButton";
import { useUserData } from "../../hooks/useUserData";
import { useEffect, useState } from "react";

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
  const { data: user, updateData } = useUserData();

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");

  useEffect(() => {
    if (!user) return;
    setEmail(user?.email);
    setName(user?.name);
    setBio(user?.bio);
  }, [user]);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await updateData({ name, bio });
    setIsSaving(false);
  };

  return (
    <Layout>
      <div className="bg-[#f6f6f6] h-screen flex justify-center items-center">
        <div className="h-full md:-translate-y-16 md:h-fit rounded-lg w-full border-2 border-[#0da955] shadow-xl md:max-w-2xl flex flex-col gap-4 items-center bg-white p-4 md:p-8">
          <div className="text-3xl font-bold">Settings</div>
          <Avatar src="peacock.jpeg" className="w-40 h-40 rounded-full" />
          <div className="w-full flex flex-col gap-4">
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              label={<div className="font-bold">Name</div>}
              disabled={isSaving}
            />
            <TextInput
              value={email}
              label={<div className="font-bold">Email</div>}
              disabled
            />
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              label={<div className="font-bold">Biography</div>}
              disabled={isSaving}
              minRows={3}
              maxRows={5}
              autosize
            />

            <GreenButton className="self-end" onClick={handleSave}>
              Save
            </GreenButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
