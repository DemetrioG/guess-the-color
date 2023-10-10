import { useState } from "react";

export const GLOBAL_TIME = 30;
export const SESSION_TIME = 10;
export const CORRECT_ANSWER = 5;
export const WRONG_ANSWER = -1;
export const TIMEOUT_ANSWER = -2;

export function generateRandomHex() {
  const characters = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hex += characters[randomIndex];
  }

  return hex;
}

export function generateRandomHexPair(activeHex: string) {
  const randomHexPair: string[] = [];
  while (randomHexPair.length < 2) {
    const randomHex = generateRandomHex();
    if (randomHex !== activeHex && !randomHexPair.includes(randomHex)) {
      randomHexPair.push(randomHex);
    }
  }

  return randomHexPair;
}

export function shuffle(array: string[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function handleScore(prevScore: number, points: number) {
  const calcScore = prevScore + points;
  const score = calcScore > 0 ? calcScore : 0;
  const highScore = Number(localStorage.getItem("highScore") ?? 0);
  if (score > highScore) {
    localStorage.setItem("highScore", score.toString());
  }
  return score;
}

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}
