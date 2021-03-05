import { Fibonacci } from './Fibonacci';
describe('Fibonacci tests', () => {
  test('initialisation', () => {
    const test = new Fibonacci(1);
    expect(test).toBeInstanceOf(Fibonacci);
  });

  test('Even Sum', () => {
    const test = new Fibonacci(8);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.evenSum).toBe(10);
  });

  test('Even Sum 1', () => {
    const test = new Fibonacci(1);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.evenSum).toBe(0);
  });

  test('Even Sum large number', () => {
    const test = new Fibonacci(400);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.evenSum).toBe(188);
  });

  test('Even Sum large number', () => {
    const test = new Fibonacci(34);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.evenSum).toBe(44);
  });

  test('Even Sum 4 million', () => {
    const test = new Fibonacci(4000000);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.evenSum).toBe(4613732);
  });

  test('Odd Sum', () => {
    const test = new Fibonacci(13);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.oddSum).toBe(23);
  });

  test('Odd Sum 2 million', () => {
    const test = new Fibonacci(2000000);
    expect(test).toBeInstanceOf(Fibonacci);
    expect(test.oddSum).toBe(2435423);
  });
});
