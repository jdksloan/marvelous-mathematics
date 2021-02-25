export class NumberHelper {
  private _num: number;

  constructor(num: number) {
    this._num = num;
  }

  public get numDigits(): number {
    return Math.floor(Math.log10(this._num) + 1);
  }

  //   public get isPrime(): boolean {
  //     for (let i = 2; i < this._num - 1; i++) {
  //       if (this._num % i === 0) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }

  public get isPrime() {
    const sqrtnum = Math.floor(Math.sqrt(this._num));
    let prime = this._num !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (this._num % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
}
