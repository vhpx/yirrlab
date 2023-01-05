import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed font-semibold bottom-0 bg-zinc-700 flex justify-between inset-x-0 text-white px-4 py-0.5">
      <Link href="/contact">Contact us</Link>
      <div>© 2022 YirrLab</div>
    </div>
  );
};

export default Footer;
