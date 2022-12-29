"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Modal, Popover, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "../auth-modal/AuthModal";
import { useUserData } from "../../hooks/useUserData";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { mutate } from "swr";

const NavBar = () => {
  const theme = useMantineTheme();
  const { supabaseClient } = useSessionContext();
  const { data: user } = useUserData();

  const [opened, setOpened] = useState(false);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    mutate("/api/user", null, false);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={theme.colorScheme === theme.colors.dark[9]}
        overlayOpacity={0.7}
        overlayBlur={4}
        centered
        size="lg"
        radius="lg"
      >
        <AuthModal closeModal={() => setOpened(false)} />
      </Modal>
      <nav className="w-full flex justify-between px-4 md:px-16 py-2 md:py-4">
        <div className="flex items-center gap-16">
          <Link
            href="/"
            className="font-bold text-[#0da955] tracking-wider text-4xl"
          >
            YirrLab
          </Link>
          <div className="hidden md:flex gap-8 text font-semibold">
            <button
              onClick={() => setOpened(true)}
              className="hover:text-[#0da955] transition"
            >
              Learn
            </button>
          </div>
        </div>

        {user?.id ? (
          <Popover withArrow shadow="md">
            <Popover.Target>
              <UserCircleIcon className="h-8 cursor-pointer md:h-10 text-[#5ec992]" />
            </Popover.Target>

            <Popover.Dropdown>
              {user?.id && (
                <div className="flex flex-col">
                  <div className="text-lg font-semibold text-[#838383]">
                    {user?.name || "No Name"}
                  </div>
                  <div className="text-sm text-[#b2b2b2]">{user?.email}</div>
                  <div className="flex justify-center border-t pt-2 mt-2">
                    <button
                      onClick={handleLogout}
                      className="px-4 py-1 w-full rounded font-semibold hover:bg-[#d9b050] hover:text-white text-[#d9b050] transition"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </Popover.Dropdown>
          </Popover>
        ) : (
          <button
            onClick={() => setOpened(true)}
            className={`flex items-center gap-8 font-semibold h-fit border-2 border-[#0da955] ${
              user?.id
                ? "rounded-full"
                : "px-4 py-1 rounded-lg bg-[#0da955] hover:bg-[#0da955]/20 text-white hover:text-[#0da955] transition"
            }`}
          >
            Login
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;