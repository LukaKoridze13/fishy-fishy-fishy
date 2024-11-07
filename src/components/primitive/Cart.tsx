import React from "react";
import Icon from "@/assets/svg/bag.svg";
import Image from "next/image";

const Cart = () => {
  return (
    <button className="w-[40px] rounded-full bg-darkBlue aspect-square flex items-center justify-center cursor-pointer">
      <Image src={Icon} alt="bag" />
    </button>
  );
};

export default Cart;
