import { questions } from "./data/questions";

export interface Result {
  primaryType: number;
  wingKey: string; // e.g. "4w5"
  wingNumber: number;
  scores: Record<number, number>; // type -> total
  percentages: Record<number, number>; // type -> 0..100
  sorted: number[]; // types sorted high to low
}

// answers: map questionId -> value(1..5)
export function scoreTest(answers: Record<number, number>): Result {
  const scores: Record<number, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
  };
  for (const q of questions) {
    const v = answers[q.id] ?? 3; // neutral default
    scores[q.type] += v;
  }

  // 12 items per type, each 1..5 => range 12..60
  const maxPerType = 12 * 5;
  const minPerType = 12 * 1;
  const percentages: Record<number, number> = {};
  for (let t = 1; t <= 9; t++) {
    percentages[t] = Math.round(
      ((scores[t] - minPerType) / (maxPerType - minPerType)) * 100
    );
  }

  const sorted = Object.keys(scores)
    .map(Number)
    .sort((a, b) => scores[b] - scores[a]);

  const primaryType = sorted[0];

  // Wing = higher-scoring of the two adjacent types
  const left = primaryType === 1 ? 9 : primaryType - 1;
  const right = primaryType === 9 ? 1 : primaryType + 1;
  const wingNumber = scores[left] >= scores[right] ? left : right;
  const wingKey = `${primaryType}w${wingNumber}`;

  return { primaryType, wingKey, wingNumber, scores, percentages, sorted };
}
