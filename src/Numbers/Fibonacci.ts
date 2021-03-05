export class Fibonacci {
  private _limit: number;
  constructor(limit: number) {
    this._limit = limit;
  }

  public get evenSum(): number {
    if (this._limit < 2) {
      return 0;
    }

    let fib1 = 0;
    let fib2 = 2;
    let sum = fib1 + fib2;

    while (fib2 <= this._limit) {
      const fib3 = fib1 + 4 * fib2;

      if (fib3 > this._limit) {
        break;
      }

      fib1 = fib2;
      fib2 = fib3;
      sum += fib2;
    }

    return sum;
  }

  public get oddSum(): number {
    let sum = 0;
    for (const i of this.oddFibG()) {
      if (i > this._limit) {
        break;
      }
      sum = sum + i;
    }

    return sum;
  }

  private *oddFibG() {
    let l = 0;
    let m = 1;
    while (true) {
      [l, m] = [m, l + m];
      if (l % 2 === 1) {
        yield l;
      }
    }
  }
}
