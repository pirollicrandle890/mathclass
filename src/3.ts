import { randomInt } from 'mathclass';

function getRandomNumber(min: number, max: number): number {
  return randomInt(min, max);
}

getRandomNumber(1, 10); // returns a random integer between 1 and 10
