// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┓┏┏┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃┃┃┣ •
//  ┻ ┛┗┗┛┛┗┛  ┻ ┻┗┛┗┛•

const NOBEL_PRIZES = {
  "Marie Curie": "researches on the radiation phenomena",
  "Maria Goeppert-Mayer": "discoveries concerning nuclear shell structure",
  "Donna Strickland": "a method of generating high-intensity, ultra-short optical pulses",
  "Andrea Ghez": "the discovery of a supermassive compact object at the centre of our galaxy",
  "Anne L'Huillier": "Experimental methods that generate attosecond pulses of light",
} as const;

type NobelPrizes = typeof NOBEL_PRIZES;
//   ^?

// We can use `keyof` to extract the property names from a type:
type NobelWinnerNames = keyof NobelPrizes;
//   ^?

// Find a way to produce a string union type of the Nobel discoveries:
// HINT: How could you combine `keyof` and the indexed access syntax?
