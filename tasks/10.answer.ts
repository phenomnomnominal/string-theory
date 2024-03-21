// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┏┓┳┓
//  ┃ ┣┫┗┓┃┫    ┃ ┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛   ┻ ┗┛┛┗•

// "Gluon" -> "Gluino"

// Because "Gluon" doesn't match any other rule, we can implement this
// in types by using a condition with a very specific condition:
type TransformGluon<Input extends string> = Input extends "Gluon"
  ? "Gluino"
  : Input;

// "Top quark" -> "Stop squark"

// This one has quite a few more steps involved! As a reminder, here's the
// JavaScript version:
function transformQuarkFunc(particle) {
  return join(prefix(split(lowercase(particle), " "), "S"), " ");
}

// We already have `Lowercase` from TypeScript.

// Here's our `Split` implementation from before:
type Split<Input extends string, Separator extends string> = 
  Input extends `${infer Start}${Separator}${infer Rest}`
    ? [Start, ...Split<Rest, Separator>]
    : [Input];

// And out `Prefix` implementation:
type Prefix<Input extends Array<string>, Pre extends string> = 
  Input extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends Array<string>
        ? [`${Pre}${First}`, ...Prefix<Rest, Pre>]
        : never
      : never
    : [];

// To implement `join`, we do the opposite of `split`.
// Instead of recursively splitting into an array, we recursively build up
// a template string:
function joinRecursive(input, separator) {
  const [first, ...rest] = input;
  return `${first}${separator}${joinRecursive(rest, separator)}`;
}

// This maps to TypeScript quite nicely, with the same extra work to validate the
// type of `First` and `Rest`:
type Join<Input extends Array<string>, Separator extends string> = 
  Input extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends Array<string>
        ? `${First}${Separator}${Join<Rest, Separator>}`
        : never
      : never
    : "";

// And we can use `Join` like this:
type JoinedTopQuark = Join<Prefix<Split<Lowercase<"Top Quark">, " ">, "S">, " ">;
//   ^?
type JoinedUnion = Join<Prefix<Split<Lowercase<"Top Quark" | "Lepton">, " ">, "S">, " ">;
//   ^?

// We can see we have an extra `Separator` at the end of our result,
// but we can fix that with `RemoveSuffix` from earlier, and give it all
// a nice name:
type TransformQuark<ParticleName extends string> = RemoveSuffix<
  Join<Prefix<Split<Lowercase<ParticleName>, " ">, "S">, " ">,
  ""
>;

// Which can then be used like this:
type StandardParticles = ["Neutrino", "Lepton", "Muon", "Top quark"];
type SuperParticles = TransformQuark<StandardParticles>;
//   ^?
