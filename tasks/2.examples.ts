// We can declare a variable with let (or var):
let microscopicWigglingRubberBand = "...";

// And assign the current `typeof` the `microscopicWigglingRubberBand`
// variable to a new `type` called `SomeString`:
type Wiggling = typeof microscopicWigglingRubberBand;
//  ^?

// NOTE: The type-level `typeof` operator works differently than the
// runtime `typeof` operator:
const runtime = typeof microscopicWigglingRubberBand;
//    ^?

// We can restrict a variable to only accept one specific string value,
// by annotating the variable declaration with a "String Literal Type":
let theory: "Supersymmetry" = "Supersymmetry";

// And assign the current `typeof` the `theory` variable to a new `type`
// called `TheoryUpper`:
type Theory = typeof theory;
//  ^?

// The type-checker won't allow this assignment!
// 'supersymmetry' isn't in the set of values allowed by
// the 'Supersymmetry' literal type:
theory = "supersymmetry";
