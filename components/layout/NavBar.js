"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between px-4 md:px-16 py-2 md:py-4">
      <div className="flex items-center gap-16">
        <Link
          href="/"
          className="font-bold text-[#0da955] tracking-wider text-4xl"
        >
          YirrLab
        </Link>
        <div className="hidden md:flex gap-8 text font-semibold">
          <button className="hover:text-[#0da955] transition">About</button>
          <button className="hover:text-[#0da955] transition">Learn</button>
        </div>
      </div>
      <div className="flex items-center gap-8 h-fit border-2 rounded-full border-[#0da955]">
        <UserCircleIcon className="h-8 md:h-10 text-[#5ec992]" />
      </div>
    </nav>
  );
};

export default NavBar;
