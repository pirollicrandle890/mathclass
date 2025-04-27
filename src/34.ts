import { strict as assert } from 'assert';

// Example TypeScript function that converts a string to uppercase and returns it.
function convertToUpper(input: string): string {
  return input.toUpperCase();
}

// Test the function with some data points.
const testData = [
  "hello",
  "world",
];

testCases: for (const testCase of testData) {
  const output = convertToUpper(testCase);
  assert.equal(output, testCase.toUpperCase(), `Test failed for input: ${testCase}`);
}
