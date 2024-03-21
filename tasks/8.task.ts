// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┏┓┓┏┏┳┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃┃┓┣┫ ┃ •
//  ┻ ┛┗┗┛┛┗┛  ┗┛┻┗┛┛┗ ┻ •

// This time we will start with the type directly, rather than
// using `as const`. There's no difference doing it this way:
type NobelWinners = {
  "Marie Curie": "researches on the radiation phenomena";
  "Maria Goeppert-Mayer": "discoveries concerning nuclear shell structure";
  "Donna Strickland": "a method of generating high-intensity, ultra-short optical pulses";
  "Andrea Ghez": "the discovery of a supermassive compact object at the centre of our galaxy";
  "Anne L'Huillier": "Experimental methods that generate attosecond pulses of light";
};

// Use a mapped type to map the name and discovery into a new string
// type (you'll probably need a template literal type too!).

// One you've done the mapping, can you work out how to access just the
// mapped properties of the new type?
