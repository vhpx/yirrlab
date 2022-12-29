import Image from "next/image";
import Layout from "../components/layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <div className="md:absolute md:right-0 md:top-16">
        <Image
          src="/featured-img.png"
          width={1102}
          height={1001}
          alt="Featured image"
          className="md:h-[calc(100vh-4rem)] md:w-[50vw]"
          style={{ objectFit: "cover", objectPosition: "0% 50%" }}
        />
      </div>

      <div className="p-4 md:p-8 lg:p-16">
        <div className="md:mt-32 font-semibold text-2xl md:text-4xl xl:text-5xl w-full md:w-1/2">
          A mission to help everyone learn about the{" "}
          <span className="text-[#0da955]">Yirrgay dialects</span> and explore{" "}
          <span className="text-[#0da955]">Yirrganydji culture</span>.
        </div>

        <div className="mt-8 md:text-xl italic text-zinc-500 w-full md:w-1/2">
          “Yirrganydji people have a strong desire to maintain their cultural
          heritage including their customs, values, knowledges and language to
          continue to pass on to current and future generations.”
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
