export class ArithmeticProgression {
  private _initialTerm: number;
  private _commonDiff: number;
  constructor(initialTerm: number, commonDiff: number) {
    this._initialTerm = initialTerm;
    this._commonDiff = commonDiff;
  }

  public nthTerm(termPosition: number) {
    return this._initialTerm + (termPosition - 1) * this._commonDiff;
  }

  public sumNTerms(numTerms: number) {
    return (numTerms / 2) * (2 * this._initialTerm + (numTerms - 1) * this._commonDiff);
  }
}
