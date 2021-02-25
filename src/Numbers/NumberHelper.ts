export class NumberHelper {
  private _num: number;

  constructor(num: number) {
    this._num = num;
  }

  public get numDigits(): number {
    return Math.floor(Math.log10(this._num) + 1);
  }
}
