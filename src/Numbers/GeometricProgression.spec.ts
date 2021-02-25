import { GeometricProgression } from './GeometricProgression';
describe('GeometricProgression tests', () => {
  test('initialisation', () => {
    const test = new GeometricProgression(1, 1);
    expect(test).toBeInstanceOf(GeometricProgression);
  });

  test('nth Term', () => {
    const test = new GeometricProgression(2, 2);
    const nthTerm = test.nthTerm(6);
    expect(nthTerm).toBe(64);
  });

  test('nth Term', () => {
    const test = new GeometricProgression(3, 3);
    const nthTerm = test.sumNTerms(6);
    expect(nthTerm).toBe(1092);
  });
});
