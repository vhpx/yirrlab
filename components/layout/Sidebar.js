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
          <Checkbox value="history" label="History" />
          <Checkbox value="religion" label="Religion" />
          <Checkbox value="art" label="Art" />
          <Checkbox value="cuisine" label="Cuisine" />
          <Checkbox value="dress" label="Dress" />
          <Checkbox value="others" label="Others" />
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
            <Checkbox value="grammar" label="Grammar" />
            <Checkbox value="reading" label="Reading" />
            <Checkbox value="listening" label="Listening" />
            <Checkbox value="speaking" label="Speaking" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="progress">
        <Accordion.Control>
          <span className="font-semibold">Progress</span>
        </Accordion.Control>
        <Accordion.Panel>
          <Checkbox.Group orientation="vertical">
            <Checkbox value="notStarted" label="Not started" />
            <Checkbox value="inProgress" label="In progress" />
            <Checkbox value="complete" label="Complete" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="level">
        <Accordion.Control>
          <span className="font-semibold">Level</span>
        </Accordion.Control>
        <Accordion.Panel>
          <Checkbox.Group orientation="vertical">
            <Checkbox value="beginner" label="Beginner" />
            <Checkbox value="intermediate" label="Intermediate" />
            <Checkbox value="difficult" label="Difficult" />
          </Checkbox.Group>
        </Accordion.Panel>
      </Accordion.Item>
    </div>
  );

  return (
    <>
      <div className="flex h-full w-72 flex-col gap-5 border-r border-zinc-400 p-5 text-zinc-500">
        <SearchBar />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span>Filter</span>
              <span>
                <AdjustmentsHorizontalIcon className="w-5" />
              </span>
            </div>
            <button className="bg-[#0da955] py-2 px-3 text-white">Apply</button>
          </div>

          <div className="flex flex-col overflow-y-scroll">
            <Accordion multiple>
              {page === "culture" ? cultureAccordion : languageAccordion}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
