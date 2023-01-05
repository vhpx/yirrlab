import { Textarea } from "@mantine/core";
import Image from "next/image";
import Layout from "../../components/layout/Layout";

export default function ContactPage() {
  return (
    <>
      <Layout>
        <div className="relative h-screen">
          <div className="p-12 md:px-36 overflow-y-auto scrollbar-none text-[#636464]">
            <div className="text-3xl font-semibold mb-5 text-black">
              Contact us
            </div>
            <div className="text-lg md:text-2xl">Contact Yirrlab team</div>
            <div className="text-[#3dba77]">
              <span>Email: noreply@yirrlab.com</span>
              <br />
              <span>Phone number: +0123 456 789</span>
            </div>
            <div className="my-2 text-lg md:text-2xl">
              Help us improve our website
            </div>
            <Textarea size="lg" autosize minRows={3} maxRows={7} />
            <div className="text-right">
              <button className="mt-3 text-sm rounded-full hover:cursor-pointer border py-1 px-2">
                Add attachment
              </button>
            </div>
            <div className="text-right text-white ">
              <button className="mt-3 rounded-full hover:cursor-pointer px-4 bg-[#0aa956] p-2">
                SEND
              </button>
            </div>
          </div>
          <div className="text-center p-4 flex flex-col gap-7 items-center absolute bg-[#f7f7f7] bottom-0 w-full h-[35%]">
            <div className="text-2xl text-[#636464]">Key stakeholders</div>
            <div className="flex justify-between items-center w-[30%]">
              <Image src="/peacock.jpeg" width={100} height={200} alt="logo" />
              <Image src="/peacock.jpeg" width={100} height={200} alt="logo" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
