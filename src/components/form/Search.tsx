"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Icon from "@/assets/svg/search.svg";
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchValue(target.value);
  };

  return (
    <div className="relative">
      <input onChange={handleChange} className="w-[360px] focus:outline-none p-4 bg-blue text-white bg-opacity-60 rounded-[80px] placeholder:pl-6" type="search" placeholder="ძიება" />
      {searchValue.length === 0 && <Image className="w-4 absolute left-4 top-1/2 -translate-y-1/2" src={Icon} alt="search icon" />}
    </div>
  );
};

export default Search;
