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
}
