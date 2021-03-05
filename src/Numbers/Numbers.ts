export class Numbers {
  private _numbs: number[];
  constructor(...numbs: number[]) {
    this._numbs = numbs;
  }

  public get mean(): number {
    return this._numbs.reduce((acc: number, curr: number) => acc + curr) / this._numbs.length;
  }

  public get median(): number {
    const sorted = this._numbs.sort((a: number, b: number) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[middle] + sorted[middle - 1]) / 2 : sorted[middle];
  }

  public get high(): number {
    const sorted = this._numbs.sort((a: number, b: number) => b - a);
    return sorted[0];
  }

  public get low(): number {
    const sorted = this._numbs.sort((a: number, b: number) => a - b);
    return sorted[0];
  }

  public static multiplesOf3and5(max: number): number {
    let sum = 0;

    while (max > 2) {
      max--;
      if (max % 3 === 0 || max % 5 === 0) {
        sum += max;
      }
    }
    return sum;
  }

  public static multiplesOf3and5Second(max: number): number {
    return this.sumOfSeries(max, 3) + this.sumOfSeries(max, 5) - this.sumOfSeries(max, 3 * 5);
  }

  private static sumOfSeries(max: number, num: number) {
    const multiplesCount = Math.floor((max - 1) / num); // (lastOfRange-1) to exlude the last number 1000 here
    const result = Math.floor((multiplesCount * (num + multiplesCount * num)) / 2); // Num = a1, (multiplesCount * Num) = an.
    return result;
  }
}
