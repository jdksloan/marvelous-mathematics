import { Factors } from './Factors';

describe('Factors tests', () => {
  test('initialisation', () => {
    const test = new Factors(1, 2);
    expect(test).toBeInstanceOf(Factors);
  });

  test('LCM', () => {
    const test = new Factors(15, 20);
    expect(test).toBeInstanceOf(Factors);
    expect(test.lcm).toBe(60);
  });

  test('LCM reversed', () => {
    const test = new Factors(20, 15);
    expect(test).toBeInstanceOf(Factors);
    expect(test.lcm).toBe(60);
  });

  test('LCM 0', () => {
    const test = new Factors(0, 15);
    expect(test).toBeInstanceOf(Factors);
    expect(test.lcm).toBe(0);
  });

  test('hcf', () => {
    const test = new Factors(15, 20);
    expect(test).toBeInstanceOf(Factors);
    expect(test.hcf).toBe(5);
  });

  test('hcf reversed', () => {
    const test = new Factors(20, 15);
    expect(test).toBeInstanceOf(Factors);
    expect(test.hcf).toBe(5);
  });

  test('hcf 0', () => {
    const test = new Factors(0, 15);
    expect(test).toBeInstanceOf(Factors);
    expect(test.hcf).toBe(0);
  });
});
