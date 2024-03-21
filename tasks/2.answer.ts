// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┓ ┏┏┓
//  ┃ ┣┫┗┓┃┫    ┃ ┃┃┃┃┃•
//  ┻ ┛┗┗┛┛┗┛   ┻ ┗┻┛┗┛•

// Fill in your name here, and find a way to restrict the
// `physicist` variable to accept your name and *only* your name:
let physicist: "Craig" = "Craig";
type Physicist = typeof physicist;
//   ^?

const physicist2 = "Craig";
type Physicist2 = typeof physicist2;
//   ^?

// Explanation:
// 1) You can restrict any variable to only one specific value by
// annotating it with a "Literal type".

// 2) Or you can use `const`! TypeScript knows that a `const` variable
// cannot be reassigned, so the initial value is the only possible value
// that it will hold. With `const` the literal type can be *inferred*.
