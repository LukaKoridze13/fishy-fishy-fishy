import Source from "@/assets/svg/logo.svg";
import Image from "next/image";
import { Itim } from "next/font/google";
const font = Itim({ subsets: ["latin"], weight: "400" });
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={Source} alt="3 white air bubbles" />
      <h1 className={`text-2xl font-normal text-white ${font.className}`}>Bubble</h1>
    </div>
  );
};

export default Logo;
