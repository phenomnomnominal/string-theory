// We can declare a list of strings, so we can do something useful with them:
const NOBEL_WINNERS = [
  "Marie Curie",
  "Maria Goeppert-Mayer",
  "Donna Strickland",
  "Andrea Ghez",
  "Anne L'Huillier",
];

// Again, TypeScript's type inference does something reasonable for us
// and marks the type of this variable as `Array<string>` or `string[]`:
type NobelWinnersList = typeof NOBEL_WINNERS;
//   ^?

// And we will not be allowed to add non-strings to the array:
NOBEL_WINNERS.push(1.616255e-35);

// But we can still add other strings to the array:
NOBEL_WINNERS.push("Eva Silverstein");

// We can still assign the string array to other variables with type
// `Array<string>`:
const WINNERS: Array<string> = NOBEL_WINNERS;
//    ^?

// We can declare a "String Union" type with the five valid string values,
// using the `|` syntax:
type NobelWinnerNames =
  | "Marie Curie"
  | "Maria Goeppert-Mayer"
  | "Donna Strickland"
  | "Andrea Ghez"
  | "Anne L'Huillier";

// And tell TypeScript that our array can only contain those values
const ONLY_NOBEL_WINNERS: Array<NobelWinnerNames> = [
  "Marie Curie",
  "Maria Goeppert-Mayer",
  "Donna Strickland",
  "Andrea Ghez",
  "Anne L'Huillier",
];

// And now we cannot add other strings to the array:
ONLY_NOBEL_WINNERS.push("Eva Silverstein");

// But we can still assign the string array to another variable with type
// `Array<string>`. `MORE_WINNERS` is no longer constrained to the 5
// string types from the `NobelWinnerNames` union!
const MORE_WINNERS: Array<string> = ONLY_NOBEL_WINNERS;
//    ^?
