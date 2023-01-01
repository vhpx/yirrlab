import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  return (
    <div className="flex rounded-3xl border border-zinc-500 p-2">
      <MagnifyingGlassIcon className="mr-1 w-5" />
      <input placeholder="Search" className="focus:outline-none" />
    </div>
  );
}
