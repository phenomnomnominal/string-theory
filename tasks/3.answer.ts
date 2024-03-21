// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┓┏┳┓┏┓┏┓
//  ┃ ┣┫┗┓┃┫    ┃ ┣┫┣┫┣ ┣ •
//  ┻ ┛┗┗┛┛┗┛   ┻ ┛┗┛┗┗┛┗┛•

const NOBEL_WINNERS = [
  "Marie Curie",
  "Maria Goeppert-Mayer",
  "Donna Strickland",
  "Andrea Ghez",
  "Anne L'Huillier",
] as const;

type NobelWinners = typeof NOBEL_WINNERS;
//   ^?

// Explanation:
// TypeScript knows how `const` variables work. While you cannot assign
// a new value to the variable, the value that is assigned to it is still
// *mutable*, so it's possible that someone could add a different string value
// into the array.

// By marking it `as const`, you are telling TypeScript to treat the value as
// *immutable*, so there will be no other string values added to the array.
// The variable is therefore `readonly`, and will only ever have the given values.

// You can think of `as const` as a way to use the exact structure of a runtime object
// from within the type system.
