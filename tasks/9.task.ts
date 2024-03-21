// ┏┳┓┏┓┏┓┓┏┓  ┳┓┳┳┓┏┓
//  ┃ ┣┫┗┓┃┫   ┃┃┃┃┃┣ •
//  ┻ ┛┗┗┛┛┗┛  ┛┗┻┛┗┗┛•

// There are actually more particles that have super-versions:
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

// To create the "Super Partner" name for a boson, we need to remove
// the " boson" ending, and add an "ino" suffix!

// In JavaScript code we might do that with something like:
function superPartnerTransform(particles) {
  particles.map((particle) => {
    if (particle.endsWith(" boson")) {
      return `${particle.replace(" boson", "")}ino`;
    }
    return particle;
  });
}
superPartnerTransform(MORE_STANDARD_PARTICLES);

// Let's try to do this in TypeScript?
// To get you started, here's an implementation of "EndsWith" in TypeScript:
type EndsWith<
  Input extends string,
  Suffix extends string
> = Input extends `${string}${Suffix}` ? Input : never;

// It is a generic type with two type parameters `Input` and `Suffix`.
// It is important that both of them are marked with `extends string`,
// as without that, they can't play nicely with template literal types.
// It also contains a conditional type, to check if `Input` matches the
// expected format.
// If the condition matches, the type returns the `Input` type, otherwise
// `never` - which is something like an error in types.

// And here's how you would use it:
type EndsWithQuark = EndsWith<"Bottom quark", "quark">;
//   ^?
type DoesntEndWithQuark = EndsWith<"Positron", "quark">;
//   ^?

// Try to use `infer` to implement a `RemoveSuffix` type to remove a
// given suffix from a string.

// Then create a new conditional type that checks an input string type with `EndsWith`
// and if it ends with " boson", removes the suffix.

// Finally, use another template literal type to add "ino" on the end!
