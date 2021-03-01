export class Factors {
  private _a: number;
  private _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  public get lcm(): number {
    return !this._a || !this._b ? 0 : Math.abs((this._a * this._b) / this.gcd(this._a, this._b));
  }

  public get hcf(): number {
    return !this._a || !this._b ? 0 : this.gcd(this._a, this._b);
  }

  private gcd(a: number, b: number): number {
    if (a === 0) {
      return b;
    }
    return this.gcd(b % a, a);
  }
}
