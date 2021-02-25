import { NumberHelper } from './NumberHelper';
describe('NumberHelper tests', () => {
  test('initialisation', () => {
    const test = new NumberHelper(1);
    expect(test).toBeInstanceOf(NumberHelper);
  });

  test('Number of digits', () => {
    const test = new NumberHelper(758694);
    expect(test.numDigits).toBe(6);
  });

  test('Number is not prime', () => {
    const test = new NumberHelper(1235);
    expect(test.isPrime).toBeFalsy();
  });

  test('Number is prime', () => {
    const test = new NumberHelper(7919);
    expect(test.isPrime).toBeTruthy();
  });
});
