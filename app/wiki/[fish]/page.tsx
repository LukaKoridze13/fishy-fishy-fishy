import fishData from "@/config/fishData";
import Image from "next/image";
import React from "react";

const FishWiki = ({ params }: { params: { fish: string } }) => {
  const fish_url = params.fish;
  const fish = fishData.find((fish) => fish.urlSlug === fish_url);
  if (!fish) {
    return <p>Not Found</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 p-12">
      <div className="flex items-center gap-6">
        <Image width={200} height={200} src={fish?.images.main} alt={fish.name.english} />
        <div>
          <h1>{fish.name.local}</h1>
          <p>eng: {fish.name.english}</p>
          <p>lat: {fish.name.latin}</p>
        </div>
      </div>
      <div className="grid grid grid-cols-3 gap-4">
        {fish.tags.map((item, index) => (
          <div className="bg-white text-black p-2 rounded-md" key={item + index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <p>
          ტემპერატურა: {fish.waterRequirements.temperature.minCelsius} - {fish.waterRequirements.temperature.maxCelsius} &deg;C
        </p>
        <p>
          pH: {fish.waterRequirements.pH.min} - {fish.waterRequirements.pH.max}
        </p>
        <div>
          ზომები
          <p>
            მამრი: {fish.size.male.minCm} - {fish.size.male.maxCm} სმ
          </p>
          <p>
            მდედრი: {fish.size.female.minCm} - {fish.size.female.maxCm} სმ
          </p>
        </div>
        <p>წარმომავლობა: {fish.origin}</p>
        <p>მოვლის სირთულე: {fish.careLevel}</p>
        <p>დიეტა: {fish.diet}</p>
        <p>
          ცურვის არეალი: <span>{fish.swimmingLevel.join(", ")}</span>
        </p>
        <p>
          სიცოცხლის ხანგრძლივობა: {fish.lifeExpectancy.minYears} - {fish.lifeExpectancy.maxYears} წელი
        </p>
        <p>გამრავლების მეთოდი: {fish.breeding.method}</p>
        <p>მომწიფების ასაკი: {fish.breeding.maturityAge}</p>
        <p>
          შთამომავლობა ერთ ორსულობაზე:{fish.breeding.offspringPerPregnancy.min}-{fish.breeding.offspringPerPregnancy.max}
        </p>
        <p>
          ორსულობის პერიოდი: {fish.breeding.pregnancyDuration.minDays}-{fish.breeding.pregnancyDuration.maxDays} დღე
        </p>
        {fish.breeding.incubationPeriod && <p>ქვირითის ინკუბაციის პერიოდი: {fish.breeding.incubationPeriod}</p>}
      </div>

      <div className="p-8">
        <h1 className="text-2xl mb-8 font-bold">სათაური</h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum, facere a cupiditate, adipisci quis
          obcaecati atque consequatur nulla eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum,
          facere a cupiditate, adipisci quis obcaecati atque consequatur nulla eius!
        </p>
        <div className="flex gap-9">
          <Image width={200} height={200} src={fish?.images.main} alt={fish.name.english} />
          <Image width={200} height={200} src={fish?.images.main} alt={fish.name.english} />
        </div>

        <h1 className="text-2xl mb-8 font-bold">სათაური</h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum, facere a cupiditate, adipisci quis
          obcaecati atque consequatur nulla eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum,
          facere a cupiditate, adipisci quis obcaecati atque consequatur nulla eius!
        </p>
        <Image width={200} height={200} src={fish?.images.main} alt={fish.name.english} />
        <h1 className="text-2xl mb-8 font-bold">სათაური</h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum, facere a cupiditate, adipisci quis
          obcaecati atque consequatur nulla eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo necessitatibus ex ipsa porro quae sint corporis vero molestias illum,
          facere a cupiditate, adipisci quis obcaecati atque consequatur nulla eius!
        </p>
      </div>
    </div>
  );
};

export default FishWiki;
