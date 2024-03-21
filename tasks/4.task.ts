// ┏┳┓┏┓┏┓┓┏┓  ┏┓┏┓┳┳┳┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃┃┃┃┣┫•
//  ┻ ┛┗┗┛┛┗┛  ┻ ┗┛┗┛┛┗•

// When we use `as const` on an Array, we produce a "Tuple Type",
// as the inferred type is an Array with a fixed length:
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
] as const;

type Dimensions = typeof DIMENSIONS;
//   ^?

// You can use the indexed access syntax with tuple types as well!

// Can you find two different ways?
