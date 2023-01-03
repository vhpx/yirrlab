import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { Accordion, Checkbox } from "@mantine/core";
import SearchBar from "../common/SearchBar";

export default function Sidebar({ page }) {
  const cultureAccordion = (
    <Accordion.Item value="topic">
      <Accordion.Control>
        <span className="font-semibold">Topic</span>
      </Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group orientation="vertical">
          <Checkbox value="history" label="History" color="green" />
          <Checkbox value="religion" label="Religion" color="green" />
          <Checkbox value="art" label="Art" color="green" />
          <Checkbox value="cuisine" label="Cuisine" color="green" />
          <Checkbox value="dress" label="Dress" color="green" />
          <Checkbox value="others" label="Others" color="green" />
        </Checkbox.Group>
      </Accordion.Panel>
    </Accordion.Item>
  );

  const languageAccordion = (
    <div>
      <Accordion.Item value="skill">
        <Accordion.Control>
          <span className="font-semibold">Skill</span>
        </Accordion.Control>
        <Accordion.Panel>
          <Checkbox.Group orientation="vertical">
            <Checkbox value="grammar" label="Grammar" color="green" />
            <Checkbox value="reading" label="Reading" color="green" />
            <Checkbox value="listening" label="Listening" color="green" />
            <Checkbox value="speaking" label="Speaking" color="green" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="progress">
        <Accordion.Control>
          <span className="font-semibold">Progress</span>
        </Accordion.Control>
        <Accordion.Panel>
          <Checkbox.Group orientation="vertical">
            <Checkbox value="notStarted" label="Not started" color="green" />
            <Checkbox value="inProgress" label="In progress" color="green" />
            <Checkbox value="complete" label="Complete" color="green" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="level">
        <Accordion.Control>
          <span className="font-semibold">Level</span>
        </Accordion.Control>
        <Accordion.Panel>
          <Checkbox.Group orientation="vertical">
            <Checkbox value="beginner" label="Beginner" color="green" />
            <Checkbox value="intermediate" label="Intermediate" color="green" />
            <Checkbox value="difficult" label="Difficult" color="green" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>
    </div>
  );

  return (
    <div className="hidden md:flex h-full w-72 flex-col gap-5 p-5 text-zinc-500">
      <SearchBar />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span>Filter</span>
          <span>
            <AdjustmentsHorizontalIcon className="w-5" />
          </span>
        </div>
        <button className="bg-[#0da955] hover:bg-[#0da955]/90 transition duration-300 py-0.5 px-4 rounded font-semibold text-sm text-white">
          Apply
        </button>
      </div>

      <div className="flex flex-col h-full">
        <Accordion multiple>
          {page === "culture" ? cultureAccordion : languageAccordion}
        </Accordion>
      </div>
    </div>
  );
}
