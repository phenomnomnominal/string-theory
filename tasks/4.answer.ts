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

// 1) Extract the type from a specific position in the tuple:
type ThirdDimension = Dimensions[2];
//   ^?

// 2) Extract a union type from all positions in the tuple:
type DimensionNames = (typeof DIMENSIONS)[number];
//   ^?
