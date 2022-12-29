"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Modal, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "../auth-modal/AuthModal";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

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
        radius="xl"
      >
        <AuthModal />
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
        <div className="flex items-center gap-8 h-fit border-2 rounded-full border-[#0da955]">
          <UserCircleIcon
            onClick={() => setOpened(true)}
            className="h-8 hover:cursor-pointer md:h-10 text-[#5ec992]"
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
