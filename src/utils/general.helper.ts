import { Difficulty } from "@/context/data/dataContext";
import { useState } from "react";
import { getItem, setItem } from "./storage.helper";

export const GLOBAL_TIME = 30;
export const SESSION_TIME = 10;
export const CORRECT_ANSWER = 5;
export const WRONG_ANSWER = -1;
export const TIMEOUT_ANSWER = -2;
export const RESET_DATA = {
  difficulty: null,
  started: false,
  score: 0,
  globalTimer: GLOBAL_TIME,
  sessionTimer: SESSION_TIME,
};

export function generateRandomHex() {
  const characters = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hex += characters[randomIndex];
  }

  return hex;
}

export function generateRandomHexPair(
  activeHex: string,
  length: Difficulty | null
) {
  const randomHexPair: string[] = [];
  while (randomHexPair.length < (length ?? 2)) {
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
  return score;
}

export function handleHighScore(score: number) {
  const highScore = Number(getItem("highScore") ?? 0);
  if (score > highScore) {
    return setItem("highScore", score.toString());
  }
}

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}
