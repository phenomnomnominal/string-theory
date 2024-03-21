// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┏┓┓┏┏┳┓
//  ┃ ┣┫┗┓┃┫   ┣ ┃┃┓┣┫ ┃ •
//  ┻ ┛┗┗┛┛┗┛  ┗┛┻┗┛┛┗ ┻ •

type NobelWinners = {
  "Marie Curie": "researches on the radiation phenomena";
  "Maria Goeppert-Mayer": "discoveries concerning nuclear shell structure";
  "Donna Strickland": "a method of generating high-intensity, ultra-short optical pulses";
  "Andrea Ghez": "the discovery of a supermassive compact object at the centre of our galaxy";
  "Anne L'Huillier": "Experimental methods that generate attosecond pulses of light";
};

// We can use a mapped type to create a new type where each property uses
// a template literal type to combine the key, and the property.
type NobelAnnouncementsMap =
  //   ^?
  {
    [Name in keyof NobelWinners]: `${Name} for ${NobelWinners[Name]}`;
  };

// And then use the indexed access syntax with the keys of our new type:
type NobelAnnouncements = NobelAnnouncementsMap[keyof NobelAnnouncementsMap];
//   ^?

// We could also do all of this in one go! Note that we have to use `keyof NobelWinners`,
// rather than the keys of the intermediary type:
type NobelAnnouncementsInOne =
  //   ^?
  {
    [Name in keyof NobelWinners]: `${Name} for ${NobelWinners[Name]}`;
  }[keyof NobelWinners];
