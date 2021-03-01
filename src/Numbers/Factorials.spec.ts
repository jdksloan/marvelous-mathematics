import { Factorials } from './Factorials';

describe('Factorials tests', () => {
  test('initialisation', () => {
    const test = new Factorials(1);
    expect(test).toBeInstanceOf(Factorials);
  });

  test('initifactorialalisation', () => {
    const test = new Factorials(5);
    expect(test).toBeInstanceOf(Factorials);
    expect(test.factorial).toBe(120);
  });

  test('Large factorial', () => {
    const test = new Factorials(10);
    expect(test).toBeInstanceOf(Factorials);
    expect(test.factorial).toBe(3628800);
  });
});
