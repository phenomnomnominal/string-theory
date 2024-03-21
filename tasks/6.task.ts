// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┏┓┏┓
//  ┃ ┣┫┗┓┃┫   ┗┓┃ ┃┃ •
//  ┻ ┛┗┗┛┛┗┛  ┗┛┻┗┛┗┛•

// Let's start with just the particles for now.
// To create each "Super Partner" name, add an "S" at
// the start of each string:
const STANDARD_PARTICLES = ["Neutrino", "Lepton", "Muon", "Top quark"];

// In JavaScript, it might look something like:
const SUPER_PARTICLES = STANDARD_PARTICLES.map((p) => `S${p}`);

// First, turn `STANDARD_PARTICLES` into a tuple type (HINT: `as const`)
// Then, turn that tuple type into a string union (HINT: indexed access)
// Finally, use a template literal type to map a new string union
// with added "S"s!
