import { BreedingMethod, Characteristics, SwimmingLevel, Diet, CareLevel, Tags } from "./types";

// export Interfaces
export interface Name {
  english: string;
  latin: string;
  local: string;
}

export interface Breeding {
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
}

export interface WaterRequirements {
  pH: {
    min: number;
    max: number;
  };
  temperature: {
    minCelsius: number;
    maxCelsius: number;
  };
}

export interface LifeExpectancy {
  minYears: number;
  maxYears: number;
}

export interface Size {
  male: {
    minCm: number;
    maxCm: number;
  };
  female: {
    minCm: number;
    maxCm: number;
  };
}

export interface Images {
  main: string;
  gallery: string[];
}

export interface FishArticle {
  title: string;
  text: string;
  image?: string;
}

export interface Fish {
  name: Name;
  breeding: Breeding;
  waterRequirements: WaterRequirements;
  lifeExpectancy: LifeExpectancy;
  characteristics: Characteristics[];
  swimmingLevel: SwimmingLevel[];
  diet: Diet[];
  careLevel: CareLevel;
  tags: Tags[];
  origin: string[];
  size: Size;
  urlSlug: string;
  images: Images;
  article: FishArticle[];
}
