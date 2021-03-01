export class Factorials {
  private _n: number;
  constructor(n: number) {
    this._n = n;
  }

  public get factorial(): number {
    let num = 1;
    for (let i = 1; i <= this._n; i++) {
      num *= i;
    }
    return num;
  }
}
