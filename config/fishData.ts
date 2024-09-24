type BreedingMethod = "ცოცხლადმშობიარე" | "ქვირითი";
type Characteristics = "მშვიდობიანი" | "მტაცებელი" | "აგრესიული";
type SwimmingLevel = "ფსკერი" | "შუა" | "ზედაპირი";
type CareLevel = "მარტივი" | "საშუალო" | "რთული";
type Diet = "ნაირმჭამელი" | "ხორცისმჭამელი" | "ბალახისმჭამელი";
type Tags = "ტროპიკული" | "ციხლიდი" | "ცოცხლადმშობიარე" | "მტკნარი წყლის" | "თბილი წყლის" | "მარილიანი წყლის" | "ცივი წყლის" | "მოქვირითე" | Characteristics;
interface Fish {
  name: {
    english: string;
    latin: string;
    local: string;
  };
  breeding: {
    method: BreedingMethod;
    maturityAge: string;
    offspringPerPregnancy: {
      min: number;
      max: number;
    };
    pregnancyDuration: {
      minDays: number;
      maxDays: number;
    };
    incubationPeriod: number | null;
  };
  waterRequirements: {
    pH: {
      min: number;
      max: number;
    };
    temperature: {
      minCelsius: number;
      maxCelsius: number;
    };
  };
  lifeExpectancy: {
    minYears: number;
    maxYears: number;
  };
  characteristics: Characteristics[];
  swimmingLevel: SwimmingLevel[];
  diet: Diet[];
  careLevel: CareLevel;
  tags: Tags[];
  origin: string[];
  size: {
    male: {
      minCm: number;
      maxCm: number;
    };
    female: {
      minCm: number;
      maxCm: number;
    };
  };
  urlSlug: string;
  images: {
    main: string;
    gallery: string[];
  };
}

const fishData: Fish[] = [
  {
    name: {
      english: "Guppy",
      latin: "Poecilia reticulata",
      local: "გუპი",
    },
    breeding: {
      method: "ცოცხლადმშობიარე",
      maturityAge: "10-20 კვირა",
      offspringPerPregnancy: {
        min: 10,
        max: 50,
      },
      pregnancyDuration: {
        minDays: 20,
        maxDays: 32,
      },
      incubationPeriod: null,
    },
    waterRequirements: {
      pH: { min: 6.5, max: 8.5 },
      temperature: { minCelsius: 20, maxCelsius: 28 },
    },
    lifeExpectancy: { minYears: 2, maxYears: 3 },
    characteristics: ["მშვიდობიანი"],
    swimmingLevel: ["ზედაპირი", "შუა"],
    diet: ["ნაირმჭამელი"],
    careLevel: "მარტივი",
    tags: ["ტროპიკული", "თბილი წყლის", "მტკნარი წყლის", "ცოცხლადმშობიარე", "მშვიდობიანი"],
    origin: ["სამხრეთ ამერიკა"],
    size: {
      male: { minCm: 1.5, maxCm: 4 },
      female: { minCm: 3, maxCm: 7 },
    },
    urlSlug: "guppy",
    images: {
      main: "https://cdn.britannica.com/02/117202-004-526214C9/Guppy.jpg",
      gallery: ["https://cdn.britannica.com/02/117202-004-526214C9/Guppy.jpg"],
    },
  },
];

export default fishData;
