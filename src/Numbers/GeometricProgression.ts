export class GeometricProgression {
  private _initialTerm: number;
  private _commonRatio: number;
  constructor(initialTerm: number, commonRatio: number) {
    this._initialTerm = initialTerm;
    this._commonRatio = commonRatio;
  }

  public nthTerm(termPosition: number) {
    return this._initialTerm * Math.pow(this._commonRatio, termPosition - 1);
  }

  public sumNTerms(numTerms: number) {
    return (this._initialTerm * (Math.pow(this._commonRatio, numTerms) - 1)) / (this._commonRatio - 1);
  }
}
