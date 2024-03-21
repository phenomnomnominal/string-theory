// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┏┓┏┓
//  ┃ ┣┫┗┓┃┫   ┗┓┃ ┃┃ •
//  ┻ ┛┗┗┛┛┗┛  ┗┛┻┗┛┗┛•

// First, we turn `STANDARD_PARTICLES` into a tuple type by using `as const`:
const STANDARD_PARTICLES = ["Neutrino", "Lepton", "Muon", "Top quark"] as const;

// Then, turn that tuple type into a string union by using `[number]`:
type StandardParticles = (typeof STANDARD_PARTICLES)[number];
//   ^?

// Finally, use a template literal type to map a new string union with added "S"s!
type SuperPartner = `S${StandardParticles}`;
//   ^?
