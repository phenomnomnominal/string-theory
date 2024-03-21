// ┏┳┓┏┓┏┓┓┏┓  ┳┓┳┳┓┏┓
//  ┃ ┣┫┗┓┃┫   ┃┃┃┃┃┣ •
//  ┻ ┛┗┗┛┛┗┛  ┛┗┻┛┗┗┛•

const MORE_STANDARD_PARTICLES = [
  "Higgs boson",
  "Neutrino",
  "Lepton",
  "Z boson",
  "W boson",
  "Gluon",
  "Muon",
  "Top quark",
] as const;
type MoreStandardParticles = (typeof MORE_STANDARD_PARTICLES)[number];

type EndsWith<
  Input extends string,
  Suffix extends string
> = Input extends `${string}${Suffix}` ? Input : never;

// A `RemoveSuffix` type looks something like this:
type RemoveSuffix<
  Input extends string,
  Suffix extends string
> = Input extends `${infer Start}${Suffix}` ? Start : Input;

// It is *very* similar to `EndsWith` but with one key difference:
// In the conditional type, we use the `infer keyword`!
// If the condition matches, we can create a new type "Start",
// kind of like a local variable, which will be a string type of
// everything before the `Suffix`.
// Rather than returning the full `Input`, just the `Start` of the string
// is returned.

// And here's how you would use it:
type NoEnding = RemoveSuffix<"Bottom quark", "quark">;
//   ^?
type DoesntHaveSuffix = RemoveSuffix<"Positron", "quark">;
//   ^?

// To put them together, the JavaScript version would be something like this:
function removeBoson(particle) {
  if (particle.endsWith(" boson")) {
    return particle.replace(" boson", "");
  }
  return particle;
}

// And in TypeScript we would have this:
type RemoveBoson<Input extends string> = Input extends EndsWith<Input, " boson">
  ? RemoveSuffix<Input, " boson">
  : Input;

// And it's used something like this:
type Removed = RemoveBoson<"Higgs boson">;
//   ^?
type Unchanged = RemoveBoson<"Lepton">;
//   ^?

// Also cool to note that these types work on string union types:
type Modified = RemoveBoson<"Higgs boson" | "Lepton">;
//   ^?

// We can then add another template literal type to add the new "ino" ending:
type TransformBoson<Input extends string> = Input extends EndsWith<
  Input,
  " boson"
>
  ? `${RemoveSuffix<Input, " boson">}ino`
  : Input;

// And it's used something like this:
type Transformed = TransformBoson<"Higgs boson">;
//   ^?
