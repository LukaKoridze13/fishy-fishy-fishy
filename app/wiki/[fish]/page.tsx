"use client";
import fishData from "@/config/Fish";
import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { IoThermometer, IoFemale, IoMale, IoEarth, IoFastFood } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { GiFishEggs, GiAquarium, GiNewBorn, GiCirclingFish } from "react-icons/gi";
import { PiEggCrackFill } from "react-icons/pi";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import Info from "./Info";

const FishWiki = ({ params }: { params: { fish: string } }) => {
  const fish_url = params.fish;
  const fish = fishData.find((fish) => fish.urlSlug === fish_url);
  if (!fish) {
    return <p>Not Found</p>;
  }

  return (
    <div className="flex flex-col items-center gap-8 p-12">
      <div className="flex items-center justify-evenly w-full">
        <div className="flex items-center gap-6">
          <div style={{ backgroundImage: `url(${fish.images.main})` }} className="w-64 h-44 bg-cover bg-center rounded-md bg-no-repeat"></div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{fish.name.local}</h1>
            <div className="text-gray-300">
              <p className="text-lg  italic">English: {fish.name.english}</p>
              <p className="text-lg  italic">Latin: {fish.name.latin}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-8 flex-wrap h-[120px]">
          <Info icon={IoThermometer} text={`${fish.waterRequirements.temperature.minCelsius} - ${fish.waterRequirements.temperature.maxCelsius} °C`} tooltip="სასურველი ტემპერატურა" />
          <Info icon={() => <span>pH</span>} text={`${fish.waterRequirements.pH.min} - ${fish.waterRequirements.pH.max}`} tooltip="მჟავიანობა" />
          <Info icon={IoMale} text={`${fish.size.male.minCm} - ${fish.size.male.maxCm} სმ`} tooltip="მამრის ზომა" />
          <Info icon={IoFemale} text={`${fish.size.female.minCm} - ${fish.size.female.maxCm} სმ`} tooltip="მდედრის ზომა" />
          <Info icon={IoEarth} text={fish.origin.join(", ")} tooltip="წარმოშობის არეალი" />
          <Info icon={IoFastFood} text={fish.diet.join(", ")} tooltip="დიეტა" />
          <Info icon={FaPersonBreastfeeding} text={fish.careLevel} tooltip="მოვლის სირთულე" />
          <Info icon={GiAquarium} text={fish.swimmingLevel.join(", ")} tooltip="ცურვის არეალი" />
          <Info icon={FaHeartbeat} text={`${fish.lifeExpectancy.minYears} - ${fish.lifeExpectancy.maxYears} წელი`} tooltip="სიცოცხლის ხანგრძლივობა" />
          <Info icon={GiNewBorn} text={fish.breeding.method} tooltip="გამრავლების მეთოდი" />
          <Info icon={GiCirclingFish} text={fish.breeding.maturityAge} tooltip="მომწიფების ასაკი" />
          <Info
            icon={GiFishEggs}
            text={`${fish.breeding.offspringPerPregnancy.min} - ${fish.breeding.offspringPerPregnancy.max} ${fish.breeding.method === "ცოცხლადმშობიარე" ? "ლიფსიტა" : "კვერცხი"}`}
            tooltip="შთამომავლობა ერთ ორსულობაზე"
          />
          <Info icon={MdOutlinePregnantWoman} text={`${fish.breeding.pregnancyDuration.minDays} - ${fish.breeding.pregnancyDuration.maxDays} დღე`} tooltip="ორსულობის ხანგრძლივობა" />
          {fish.breeding.incubationPeriod && <Info icon={PiEggCrackFill} text={`${fish.breeding.incubationPeriod} დღე`} tooltip="ქვირითის ინკუბაციის ხანგრძლივობა" />}
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex gap-2">
        {fish.tags.map((item, index) => (
          <div className="bg-white text-black p-2 rounded-md shadow-md" key={item + index}>
            {item}
          </div>
        ))}
      </div>

      {/* Key Details Section */}
      <div className="flex flex-col gap-5"></div>

      <Accordion selectionMode="multiple">
        {fish.article.map((section, index) => (
          <AccordionItem key={fish.urlSlug + section.title} aria-label={section.title} title={section.title}>
            <p className="text-lg mb-4">{section.text}</p>
            {section.image && (
              <div className="flex justify-center mb-4">
                <Image width={400} height={300} src={section.image} alt={section.title} className="rounded-lg shadow-lg" />
              </div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FishWiki;
