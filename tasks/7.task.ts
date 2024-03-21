// ┏┳┓┏┓┏┓┓┏┓  ┏┓┏┓┓┏┏┓┳┓
//  ┃ ┣┫┗┓┃┫   ┗┓┣ ┃┃┣ ┃┃•
//  ┻ ┛┗┗┛┛┗┛  ┗┛┗┛┗┛┗┛┛┗•

// Our first attempt at the `SuperParticle` type wasn't quite right.
const STANDARD_PARTICLES = ["Neutrino", "Lepton", "Muon", "Top quark"] as const;
type StandardParticles = (typeof STANDARD_PARTICLES)[number];
type SuperPartner = `S${StandardParticles}`;
//   ^?

// We've got some extra capital letters there that it'd be nice to remove!
// Use an intrinsic string type to make it a bit better.

// Once you've done that, go for a little hunt in the TypeScript repository,
// (https://github.com/microsoft/TypeScript) and see what you can
// find out about how intrinsic string types are implemented!

// BONUS IF YOU'RE BORED ALREADY:
// If you already know about conditional types, you could try to implement
// Lowercase in pure TypeScript (rather than the intrinsic magic!)
