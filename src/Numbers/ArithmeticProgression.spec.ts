import { ArithmeticProgression } from './ArithmeticProgression';
describe('ArithmeticProgression tests', () => {
  test('initialisation', () => {
    const test = new ArithmeticProgression(1);
    expect(test).toBeInstanceOf(ArithmeticProgression);
  });

  test('nth Term', () => {
    const test = new ArithmeticProgression(2);
    const nthTerm = test.nthTerm(6, 2);
    expect(nthTerm).toBe(12);
  });
});
