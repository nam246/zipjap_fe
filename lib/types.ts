export type Lesson = {
  id: string;
  lessonNumber: number;

  grammar: Grammar[] | [];
  level: Level;
  source: string;
};

export type Vocabulary = {
  id: string;
  word: string;
  kanji: string;
  romaji: string;
  meaning: string;
  wordType: WordType;
  level: Level;
  examples: Example[];
  media?: [];
};

export type Grammar = {
  id: string;
  pattern: string;
  structure: string;
  meaning?: string;
  explaination?: string;
  notes: string;
  examples: Example[];
  level: Level;
};

export type Example = {
  japanese: string;
  romaji: string;
  vietnamese: string;
  explanation: string;
};

export enum Level {
  N5,
  N4,
  N3,
  N2,
  N1,
}

export enum WordType {
  NOUN,
  VERB,
  ADJECTIVE,
}
