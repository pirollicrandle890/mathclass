function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(0, 5)); // Output: a random number between 0 and 5
