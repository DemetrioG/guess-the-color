import { renderHook } from "@testing-library/react";
import {
  generateRandomHex,
  generateRandomHexPair,
  handleHighScore,
  handleScore,
  shuffle,
  useDisclosure,
} from "../general.helper";
import { act } from "react-dom/test-utils";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

describe("generateRandomHex", () => {
  test("should return a valid hex code", () => {
    const hex = generateRandomHex();
    expect(hex).toMatch(/^#[0-9A-F]{6}$/);
  });
});

describe("generateRandomHexPair", () => {
  it("should generate a random hex pair", () => {
    const activeHex = "123456";
    const randomHexPair = generateRandomHexPair(activeHex, 2);

    expect(Array.isArray(randomHexPair)).toBeTruthy();
    expect(randomHexPair.length).toBe(2);
    expect(randomHexPair[0] !== activeHex).toBeTruthy();
    expect(randomHexPair[1] !== activeHex).toBeTruthy();
    expect(randomHexPair[0] !== randomHexPair[1]).toBeTruthy();
  });

  it("should generate a random hex array with length 3", () => {
    const activeHex = "123456";
    const randomHexPair = generateRandomHexPair(activeHex, 3);

    expect(Array.isArray(randomHexPair)).toBeTruthy();
    expect(randomHexPair.length).toBe(3);
  });
});

describe("shuffle", () => {
  it("should shuffle the array", () => {
    const array = ["a", "b", "c", "d", "e"];

    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
    expect(shuffledArray).toContain("a");
    expect(shuffledArray).toContain("b");
    expect(shuffledArray).toContain("c");
    expect(shuffledArray).toContain("d");
    expect(shuffledArray).toContain("e");
  });

  it("should not modify the original array", () => {
    const array = ["a", "b", "c", "d", "e"];
    const originalArray = [...array];

    shuffle(array);
    expect(array).toEqual(originalArray);
  });

  it("should return an empty array if the input array is empty", () => {
    const array: string[] = [];

    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual([]);
  });

  it("should return the same array if the input array has only one element", () => {
    const array = ["a"];

    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual(array);
  });
});

describe("handleScore", () => {
  it("should return the correct score when adding positive points", () => {
    const prevScore = 10;
    const points = 5;
    const result = handleScore(prevScore, points);
    expect(result).toBe(prevScore + points);
  });

  it("should return the correct score when adding positive points", () => {
    const prevScore = 10;
    const points = 5;
    const result = handleScore(prevScore, points);
    expect(result).toBe(prevScore + points);
  });

  it("should return 0 when adding negative points that result in a negative score", () => {
    const prevScore = 10;
    const points = -15;
    const result = handleScore(prevScore, points);
    expect(result).toBe(0);
  });
});

describe("handleHighScore", () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  it("should update the high score if the input score is greater than the current high score", () => {
    localStorageMock.getItem.mockReturnValue("10");
    act(() => handleHighScore(20));

    expect(localStorageMock.getItem).toHaveBeenCalledWith("highScore");
    expect(localStorageMock.setItem).toHaveBeenCalledWith("highScore", "20");
  });

  it("should not update the high score if the input score is less than or equal to the current high score", () => {
    localStorageMock.getItem.mockReturnValueOnce("30");
    act(() => handleHighScore(20));

    expect(localStorageMock.getItem).toHaveBeenCalledWith("highScore");
    expect(localStorageMock.setItem).not.toHaveBeenCalled();
  });
});

describe("useDisclosure", () => {
  it("should return the initial state as closed", () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it("should open and close correctly", () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });
});
