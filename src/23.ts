import { sqrt, abs } from 'mathjs';

const isSquare = (x: number): boolean => {
  const root = Math.floor(sqrt(x));
  return root * root === x;
};

// Function to check if a number is positive or negative
function compareNumbers(a: number, b: number): boolean {
  return (a > 0) !== (b < 0);
}

// Main function that calculates square roots and absolute values
function main() {
  console.log(isSquare(25)); // true
  console.log(abs(-3.14)); // true

  const a = 8;
  const b = -7;

  console.log(compareNumbers(a, b)); // false
}
