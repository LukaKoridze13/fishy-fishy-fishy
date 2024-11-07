import { Link } from "@/i18n/routing";
import React from "react";
import Icon from "@/assets/svg/facebook.svg";
import Image from "next/image";

const Facebook = () => {
  return (
    <Link href="" className="w-[40px] rounded-full bg-darkBlue aspect-square flex items-center justify-center cursor-pointer">
      <Image src={Icon} alt="facebook" />
    </Link>
  );
};

export default Facebook;
