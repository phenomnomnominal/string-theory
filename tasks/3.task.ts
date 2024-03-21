// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┓┏┳┓┏┓┏┓
//  ┃ ┣┫┗┓┃┫    ┃ ┣┫┣┫┣ ┣ •
//  ┻ ┛┗┗┛┛┗┛   ┻ ┛┗┛┗┗┛┗┛•

// It is quite cumbersome (and not very DRY!) to have to declare both the
// string union type AND the array of strings...
type NobelWinnerNames = "Marie Curie" | "Maria Goeppert-Mayer" | "Donna Strickland" | "Andrea Ghez" | "Anne L'Huillier";

const NOBEL_WINNERS: Array<NobelWinnerNames> = [
  "Marie Curie",
  "Maria Goeppert-Mayer",
  "Donna Strickland",
  "Andrea Ghez",
  "Anne L'Huillier",
];

// But it does give us a nice string union type of only the
// valid values:
type NobelWinners = typeof NOBEL_WINNERS;
//   ^?

// Modify these declarations and find a better way to restrict `NOBEL_WINNERS`
// to only include the 5 valid string values!
