import React from "react";
import Icon from "@/assets/svg/menu.svg";
import Image from "next/image";

const Menu = () => {
  return (
    <button className="w-[40px] rounded-full bg-darkBlue aspect-square flex items-center justify-center cursor-pointer">
      <Image src={Icon} alt="Menu" />
    </button>
  );
};

export default Menu;
