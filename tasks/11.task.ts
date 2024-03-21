// ┏┳┓┏┓┏┓┓┏┓  ┏┓┓ ┏┓┓┏┏┓┳┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃ ┣ ┃┃┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛  ┗┛┗┛┗┛┗┛┗┛┛┗•

// We have the three bits of mapping code that we need:

// 1) We can handle "Gluon" -> "Gluino".
// 2) We can handle `${string} boson` -> `${string}ino`
// 3) And we can handle `${string} -> `S${string}`

// Our final task is to use one big multiple-conditional type
// to create one type to transform all the kinds of particles:

type MoreStandardParticles =
  | "Higgs boson"
  | "Neutrino"
  | "Lepton"
  | "Z boson"
  | "W boson"
  | "Gluon"
  | "Muon"
  | "Top quark";

// Handle "Gluon":
type TransformGluon<Input extends string> = Input extends "Gluon"
  ? "Gluino"
  : Input;

// Handle Bosons:
type TransformBoson<Input extends string> = 
  Input extends EndsWith<Input, " boson">
    ? `${RemoveSuffix<Input, " boson">}ino`
    : Input;

type EndsWith<Input extends string, Suffix extends string> = 
  Input extends `${string}${Suffix}` 
    ? Input
    : never;

type RemoveSuffix<Input extends string, Suffix extends string> = 
  Input extends `${infer Start}${Suffix}`
    ? Start
    : Input;

// Handle the other cases:
type TransformQuark<ParticleName extends string> = RemoveSuffix<
  Join<Prefix<Split<Lowercase<ParticleName>, " ">, "S">, " ">,
  ""
>;

type Split<Input extends string, Separator extends string> = 
  Input extends `${infer Start}${Separator}${infer Rest}`
    ? [Start, ...Split<Rest, Separator>]
    : [Input];

type Prefix<Input extends Array<string>, Pre extends string> = 
  Input extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends Array<string>
        ? [`${Pre}${First}`, ...Prefix<Rest, Pre>]
        : never
      : never
    : [];

type Join<Input extends Array<string>, Separator extends string> = 
  Input extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends Array<string>
        ? `${First}${Separator}${Join<Rest, Separator>}`
        : never
      : never
    : "";

// Let's finally implement `SuperPartner` by combining all three bits!

// We have three conditions that we care about:
// 1) If our string type is "Gluon"
// 2) If our string type ends with " boson"
// 3) The rest

// Write a conditional type that handles each case, and
// delegates to the appropriate type.