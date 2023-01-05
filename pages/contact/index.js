import { Textarea } from "@mantine/core";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import GreenButton from "../../components/buttons/GreenButton";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";

export default function ContactPage() {
  const [feedback, setFeedback] = useState("");

  const handleSend = () => {
    showNotification({
      title: "Feedback sent",
      message: "Thank you for your feedback",
      color: "green",
    });

    setFeedback("");
  };

  const handleAddAttachment = () => {
    showNotification({
      title: "Feature in development",
      message: "This feature is not available yet",
      color: "red",
    });
  };

  return (
    <Layout>
      <div className="flex h-full max-h-full">
        <div className="p-4 md:p-8 lg:px-64 md:px-32 xl:px-96 overflow-y-auto scrollbar-none w-full text-[#636464]">
          <div className="text-3xl font-bold mb-5 text-black">Contact us</div>
          <div className="text-lg md:text-2xl font-semibold">Yirrlab team</div>
          <div className="text-[#3dba77] font-semibold">
            <div>✉️: contact@yirrlab.com</div>
            <div>☎️: +84 123 456 789</div>
          </div>

          <div className="mt-8 mb-2 text-lg md:text-2xl font-semibold">
            Help us improve our website
          </div>

          <Textarea
            size="lg"
            placeholder="Write your feedback here"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            minRows={3}
            maxRows={7}
            autosize
          />

          <div className="mt-4 flex flex-col md:flex-row justify-end items-center gap-2">
            <button
              className="text-sm rounded-full w-full md:w-fit hover:cursor-pointer border-2 border-[#3dba77] text-[#3dba77] font-semibold py-0.5 px-4"
              onClick={handleAddAttachment}
            >
              Add attachment
            </button>
            <GreenButton
              label="Send"
              onClick={handleSend}
              className="w-full md:w-fit"
            />
          </div>

          <div className="text-center p-4 flex flex-col gap-7 items-center w-full mb-32">
            <div className="text-lg md:text-2xl text-[#0da955] font-bold">
              Key stakeholders
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <Image src="/dawulwuru.png" width={400} height={115} alt="logo" />
              <Image src="/ewba.png" width={300} height={161} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
