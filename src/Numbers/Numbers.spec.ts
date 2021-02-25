import { Numbers } from './Numbers';
describe('Numbers tests', () => {
  test('initialisation', () => {
    const test = new Numbers(1);
    expect(test).toBeInstanceOf(Numbers);
  });

  test('Mean Number', () => {
    const test = new Numbers(2, 2, 4, 4);
    expect(test.mean).toBe(3);
  });

  test('Mean Number odd', () => {
    const test = new Numbers(2, 3, 5, 6, 8, 10, 11);
    expect(test.median).toBe(6);
  });

  test('Median Number even', () => {
    const test = new Numbers(2, 3, 5, 6, 8, 10);
    expect(test.median).toBe(5.5);
  });

  test('Low Number', () => {
    const test = new Numbers(2, 3, 5, 6, 8, 10);
    expect(test.low).toBe(2);
  });

  test('High Number', () => {
    const test = new Numbers(2, 3, 5, 6, 8, 10);
    expect(test.high).toBe(10);
  });
});
