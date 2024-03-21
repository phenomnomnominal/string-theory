// ┏┳┓┏┓┏┓┓┏┓  ┏┳┓┓ ┏┏┓
//  ┃ ┣┫┗┓┃┫    ┃ ┃┃┃┃┃•
//  ┻ ┛┗┗┛┛┗┛   ┻ ┗┻┛┗┛•

let subatomic: "Positron" = "Positron";
type Subatomic = typeof subatomic;
//   ^?

const subatomic2 = "Positron";
type Subatomic2 = typeof subatomic2;
//   ^?

// Explanation:
// 1) You can restrict any variable to only one specific value by
// annotating it with a "Literal type".

// 2) Or you can use `const`! TypeScript knows that a `const` variable
// cannot be reassigned, so the initial value is the only possible value
// that it will hold. With `const` the literal type can be *inferred*.
