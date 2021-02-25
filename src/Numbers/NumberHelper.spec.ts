import { NumberHelper } from './NumberHelper';
describe('NumberHelper tests', () => {
  test('initialisation', () => {
    const test = new NumberHelper(1);
    expect(test).toBeInstanceOf(NumberHelper);
  });

  test('Number of digits', () => {
    const test = new NumberHelper(100000);
    expect(test.numDigits).toBe(6);
  });
});
