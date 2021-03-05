export class Prime {
  private _nthTerm: number;
  constructor(nthTerm: number) {
    this._nthTerm = nthTerm;
  }

  public get primes(): number[] {
    const primes: number[] = [];
    const nonPrimes: { [id: string]: number } = {};

    for (let i = 2; i <= this._nthTerm; i++) {
      if (nonPrimes[i.toString()]) {
        continue;
      } else {
        primes.push(i);
      }

      let max = i ** 2;
      while (max <= this._nthTerm) {
        nonPrimes[max.toString()] = max;
        max += i;
      }
    }

    return primes;
  }

  public static largestPrime(num: number) {
    let divisor = 2;

    while (num > 1) {
      if (num % divisor === 0) {
        num /= divisor;
      } else {
        divisor++;
      }
    }
    return divisor;
  }
}
