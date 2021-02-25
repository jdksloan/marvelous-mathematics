export class ArithmeticProgression {
  private _initialTerm: number;
  constructor(initialTerm: number) {
    this._initialTerm = initialTerm;
  }

  nthTerm(termPosition: number, commonDiff: number) {
    return this._initialTerm + (termPosition - 1) * commonDiff;
  }
}
