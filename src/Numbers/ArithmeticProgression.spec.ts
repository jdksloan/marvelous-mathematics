import { ArithmeticProgression } from './ArithmeticProgression';
describe('ArithmeticProgression tests', () => {
  test('initialisation', () => {
    const test = new ArithmeticProgression(1, 1);
    expect(test).toBeInstanceOf(ArithmeticProgression);
  });

  test('nth Term', () => {
    const test = new ArithmeticProgression(2, 2);
    const nthTerm = test.nthTerm(6);
    expect(nthTerm).toBe(12);
  });

  test('Sum Nth Terms', () => {
    const test = new ArithmeticProgression(2, 2);
    const nthTerm = test.sumNTerms(6);
    expect(nthTerm).toBe(42);
  });
});
