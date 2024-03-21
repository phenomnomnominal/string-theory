// We can define a dictionary with Nobel Winners, and what they won
// their prize for:
const NOBEL_PRIZES = {
  "Marie Curie": "researches on the radiation phenomena",
  "Maria Goeppert-Mayer": "discoveries concerning nuclear shell structure",
  "Donna Strickland":
    "a method of generating high-intensity, ultra-short optical pulses",
  "Andrea Ghez":
    "the discovery of a supermassive compact object at the centre of our galaxy",
  "Anne L'Huillier":
    "Experimental methods that generate attosecond pulses of light",
} as const;

// Again, by using `as const`, we can get TypeScript to infer
// this exact structure in our types!

type NobelPrizes = typeof NOBEL_PRIZES;
//   ^?

// We can use the "Indexed Access" syntax to select a specific
// property on a type:
type MarieCurieTopic = NobelPrizes["Marie Curie"];
//   ^?

// We could also use a union type to create a new union of multiple
// properties:
type ATopics = NobelPrizes["Andrea Ghez" | "Anne L'Huillier"];

// Indexed access also works for Array types:
const DIMENSIONS = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
  "Eleventh",
];

type ThirdDimension = (typeof DIMENSIONS)[2];
//   ^?
