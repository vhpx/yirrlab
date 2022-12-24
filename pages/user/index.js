import { Avatar } from "@mantine/core";

export default function UserProfilePage() {
  return (
    <div className="h-screen bg-zinc-900">
      <div className="h-[30%] flex items-center justify-center relative w-full bg-zinc-700">
        <div className="absolute top-[60%] flex flex-col items-center justify-center gap-1 lg:top-[53%]">
          <Avatar
            color="indigo"
            radius="xl"
            className="mb-2 h-36 w-36 lg:h-40 lg:w-40"
          />
          <div className="text-3xl font-bold text-zinc-400">Display name</div>
          <div className="text-lg text-zinc-400">email@example.com</div>
        </div>
      </div>
    </div>
  );
}
