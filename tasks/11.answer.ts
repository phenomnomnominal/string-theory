// ┏┳┓┏┓┏┓┓┏┓  ┏┓┓ ┏┓┓┏┏┓┳┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃ ┣ ┃┃┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛  ┗┛┗┛┗┛┗┛┗┛┛┗•

// We have our full list of particles:
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
type TransformBoson<Input extends string> = Input extends EndsWith<
  Input,
  " boson"
>
  ? `${RemoveSuffix<Input, " boson">}ino`
  : Input;

type EndsWith<Input extends string, Suffix extends string> = 
  Input extends `${string}${Suffix}` ? Input : never;

type RemoveSuffix<Input extends string, Suffix extends string> = 
  Input extends `${infer Start}${Suffix}` ? Start : Input;

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
type SuperPartnerTransform<ParticleName extends string> =
  ParticleName extends "Gluon"
    ? TransformGluon<ParticleName>
    : ParticleName extends EndsWith<ParticleName, " boson">
    ? TransformBoson<ParticleName>
    : TransformQuark<ParticleName>;

type SuperPartner = SuperPartnerTransform<MoreStandardParticles>;
// ^?
