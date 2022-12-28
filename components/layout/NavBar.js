"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between px-16 py-4">
      <div className="flex items-center gap-16">
        <div className="font-bold text-[#0da955] tracking-wider text-4xl">
          YirrLab
        </div>
        <div className="flex gap-8 text font-semibold">
          <div>About</div>
          <div>Learn</div>
        </div>
      </div>
      <div className="flex items-center gap-8 border-2 rounded-full border-[#0da955]">
        <UserCircleIcon className="h-10 w-10 text-[#5ec992]" />
      </div>
    </nav>
  );
};

export default NavBar;
