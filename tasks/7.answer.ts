// ┏┳┓┏┓┏┓┓┏┓  ┏┓┏┓┓┏┏┓┳┓
//  ┃ ┣┫┗┓┃┫   ┗┓┣ ┃┃┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛  ┗┛┗┛┗┛┗┛┛┗•

const STANDARD_PARTICLES = ["Neutrino", "Lepton", "Muon", "Top quark"] as const;
type StandardParticles = (typeof STANDARD_PARTICLES)[number];

// By using the `Lowercase` intrinsic type, we can convert our input string
// before adding the "S" at the start:
type BetterSuperPartner = `S${Lowercase<StandardParticles>}`;
//   ^?

// Intrinsic string type Pull Request:
// (https://github.com/microsoft/TypeScript/pull/40580)

// Here's my pure TypeScript implementation of `Lowercase`.
// It is a generic type, with multiple levels of conditional types,
// as well as inference from template literal types, and recursion.
//
// If you did something like this, then you should probably be teaching
// this workshop!
type LowercaseStr<Input extends string> = Input extends string
  ? Input extends `${infer First}${infer Rest}`
    ? First extends keyof LettersMap
      ? `${LettersMap[First]}${LowercaseStr<Rest>}`
      : `${First}${LowercaseStr<Rest>}`
    : Input
  : never;

type LettersMap = {
  A: "a";
  B: "b";
  C: "c";
  D: "d";
  E: "e";
  F: "f";
  G: "g";
  H: "h";
  I: "i";
  J: "j";
  K: "k";
  L: "l";
  M: "m";
  N: "n";
  O: "o";
  P: "p";
  Q: "q";
  R: "r";
  S: "s";
  T: "t";
  U: "u";
  V: "v";
  W: "w";
  X: "x";
  Y: "y";
  Z: "z";
};
