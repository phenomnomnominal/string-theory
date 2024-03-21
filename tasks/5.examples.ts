// Let's look at our object type again:
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

// Since we used an index access type with `[number]` on a tuple
// to get all a union type of all the values, you'd think
// you might be able to do something like this:
type NobelWinnerNames = (typeof NOBEL_PRIZES)[string];
//   ^?

// But that doesn't work!

// So, how do we get a union of all the properties names of a type...?

const NOBEL_PRIZES = {
  "Marie Curie": "researches on the radiation phenomena",
  "Maria Goeppert-Mayer": "discoveries concerning nuclear shell structure",
  "Donna Strickland": "a method of generating high-intensity, ultra-short optical pulses",
  "Andrea Ghez": "the discovery of a supermassive compact object at the centre of our galaxy",
  "Anne L'Huillier": "Experimental methods that generate attosecond pulses of light",
} as const;

type NobelPrizes = typeof NOBEL_PRIZES;

// We can use `keyof` to extract the property names from a type:
type NobelWinnerNames = keyof NobelPrizes;
