import {
  generateRandomHex,
  generateRandomHexPair,
  handleScore,
  shuffle,
} from "../general.helper";

describe("generateRandomHex", () => {
  test("should return a valid hex code", () => {
    const hex = generateRandomHex();
    expect(hex).toMatch(/^#[0-9A-F]{6}$/);
  });
});

describe("generateRandomHexPair", () => {
  it("should generate a random hex pair", () => {
    const activeHex = "123456";
    const randomHexPair = generateRandomHexPair(activeHex);

    expect(Array.isArray(randomHexPair)).toBeTruthy();
    expect(randomHexPair.length).toBe(2);
    expect(randomHexPair[0] !== activeHex).toBeTruthy();
    expect(randomHexPair[1] !== activeHex).toBeTruthy();
    expect(randomHexPair[0] !== randomHexPair[1]).toBeTruthy();
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
