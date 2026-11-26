export type InterestVisualType = 'anime' | 'gaming' | 'music' | 'curiosity';

export interface InterestEntry {
  id: InterestVisualType;
  number: string;
  title: string;
  description: string;
  metadata: string;
  visualType: InterestVisualType;
  ambientGradient: string;
}

export const beyondInterfaceContent = {
  chapterNumber: '04',
  chapterLabel: 'BEYOND THE INTERFACE',
  headingLead: 'BEYOND THE',
  headingAccent: 'INTERFACE.',
  openingStatement: 'Not everything needs to be productive.',
  supportingCopy: 'Some things are simply worth experiencing.',
  editorialCaption: 'A LITTLE ABOUT WHAT EXISTS BEYOND THE CODE.',
} as const;

export const interestEntries: InterestEntry[] = [
  {
    id: 'anime',
    number: '01',
    title: 'Anime & Stories',
    description:
      "I've always been drawn to stories that stay long after they end. Worlds, characters and little moments that make you pause and think.",
    metadata: 'STORYTELLING / WORLDS / EMOTIONS',
    visualType: 'anime',
    ambientGradient:
      'radial-gradient(circle at 28% 45%, rgba(181, 166, 255, 0.1) 0%, rgba(21, 22, 27, 0.25) 45%, transparent 72%)',
  },
  {
    id: 'gaming',
    number: '02',
    title: 'Gaming',
    description:
      "Sometimes it's about exploring another world, sometimes about figuring out the next move. I enjoy the strategy, the challenge and getting lost in immersive worlds.",
    metadata: 'EXPLORATION / STRATEGY / IMMERSION',
    visualType: 'gaming',
    ambientGradient:
      'radial-gradient(circle at 32% 52%, rgba(255, 59, 70, 0.08) 0%, rgba(181, 166, 255, 0.05) 42%, transparent 72%)',
  },
  {
    id: 'music',
    number: '03',
    title: 'Music & Solitude',
    description:
      'Some moments are better with headphones on and everything else turned down. Music has a way of making even the quietest moments feel complete.',
    metadata: 'SOUNDTRACKS / LATE NIGHTS / STILLNESS',
    visualType: 'music',
    ambientGradient:
      'radial-gradient(circle at 25% 50%, rgba(181, 166, 255, 0.09) 0%, rgba(8, 9, 11, 0.4) 48%, transparent 75%)',
  },
  {
    id: 'curiosity',
    number: '04',
    title: 'Curiosity',
    description:
      "There's always something new worth exploring. New ideas, unfamiliar subjects, random experiments and questions that lead somewhere unexpected.",
    metadata: 'EXPERIMENTATION / DISCOVERY / IDEAS',
    visualType: 'curiosity',
    ambientGradient:
      'radial-gradient(circle at 35% 42%, rgba(241, 240, 235, 0.06) 0%, rgba(181, 166, 255, 0.08) 38%, transparent 72%)',
  },
];
