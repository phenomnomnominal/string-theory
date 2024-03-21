// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┏┓┳┓
//  ┃ ┣┫┗┓┃┫    ┃ ┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛   ┻ ┗┛┛┗•

// There's still two particle mappings that we need to handle correctly.
// 1) "Gluon" -> "Gluino"
// 2) "Top Quark" -> "Stop Squark"

// "Gluon" -> "Gluino"

// This is just a weird one, and it doesn't match our other rules, so
// we can handle it separately. Here's the JavaScript versions:
function transformGluon(particle) {
  if (particle === "Gluon") {
    return "Gluino";
  }
  return particle;
}
transformGluon("Gluon");

// Have a go at implementing this with a conditional type (A extends B ? C : D).

// "Top quark" -> "Stop squark"

// So far we have only transformed "Top quark" into "Stop quark" - we're
// missing another "s". This is much harder to fix!

// Here's the JavaScript version:
function transformQuark(particle) {
  return particle
    .toLowerCase()
    .split(" ")
    .map((a) => `S${a}`)
    .join(" ");
}

// Or, in a slightly more "functional" style:
function lowercase(str) {
  return str.toLowerCase();
}
function split(str, separator) {
  return str.split(separator);
}
function prefix(strs, prefix) {
  return strs.map((str) => `${prefix}${str}`);
}
function join(strs, joiner) {
  return strs.join(joiner);
}
function transformQuarkFunc(particle) {
  return join(prefix(split(lowercase(particle), " "), "S"), " ");
}
transformQuarkFunc("Top Quark");

// Thinking about this in a "functional" way makes it a bit easier to
// think about how it would work as types.

// We want to end up with something like:
type TransformQuark<ParticleName extends string> = Join<
  Prefix<Split<Lowercase<ParticleName>, " ">, "S">,
  " "
>;

// `Lowercase` is done for us, so that's great! But what about Split...?

// Again let's think about it in JavaScript, still thinking functionally.
// We can use `recursion`:
function splitRecursive(input, separator) {
  if (input.includes(separator)) {
    const splitIndex = input.indexOf(separator);
    const start = input.slice(0, splitIndex);
    const rest = input.slice(splitIndex + separator.length);
    return [start, ...splitRecursive(rest, separator)];
  }
  return [input];
}

// If the string contains the `separator`, then return an array containing
// the part of the string before the separator, and then recursively split
// the remainder of the string.
//
// If the string doesn't contain the `separator`, the recursion terminates,
// and we return an array containing the input string.

// This is an equivalent implementation using types:
type Split<
  Input extends string,
  Separator extends string
> = Input extends `${infer Start}${Separator}${infer Rest}`
  ? [Start, ...Split<Rest, Separator>]
  : [Input];

// It's another generic type with two type parameters which must both extend string.
// It uses a conditional type with a template literal type and *two* infer blocks.
// These `infer` blocks do all the hard work of getting the `Start` and `Rest` of the input.

// If the string type contains the `Separator`, then returns a new tuple type containing the
// part of the string before the separator, and then recursively split the remainder
// of the string type.
//
// If the string type doesn't contain the `Separator`, the recursion terminates,
// and we return the a tuple type containing the input string type.

type SplitQuark = Split<"Top Quark", " ">;
//   ^?
type NotSplitLepton = Split<"Lepton", " ">;
//   ^?

// So we've lowercased and split, now we need to add the prefixes...
// This gets harder again!

// This time let's look at the type-level version first:
type Prefix<Input extends Array<string>, Pre extends string> = Input extends [
  infer First,
  ...infer Rest
]
  ? First extends string
    ? Rest extends Array<string>
      ? [`${Pre}${First}`, ...Prefix<Rest, Pre>]
      : never
    : never
  : [];

// The functional JavaScript is something like:
function prefixRecursive(input, pre) {
  if (input.length) {
    const [first, rest] = input;
    return [`${pre}${first}`, ...prefixRecursive(rest, pre)];
  }
  return [];
}

// The type version has to do some extra work to make sure that `First` and `Rest`
// are the correct types for the template literal type. This *seems* like it shouldn't
// be necessary (since `Input extends Array<string>`) but there are limitations to the power
// of the type checker!

type PrefixedTopQuark = Prefix<Split<Lowercase<"Top Quark">, " ">, "S">;
//   ^?
type PrefixedLepton = Prefix<Split<Lowercase<"Lepton">, " ">, "S">;
//   ^?
type PrefixedUnion = Prefix<Split<Lowercase<"Top Quark" | "Lepton">, " ">, "S">;
//   ^?

// Your job is now to implement the `Join` type. `Join` will convert a string tuple type
// back into a single string, and put a `Separator` in between each part!
// You'll need to use conditional types with inference, recursion, and template literal types.

// HINT: It might be easier to have an extra `Separator` at the end of your result,
// and then remove that with `RemoveSuffix` from earlier!
