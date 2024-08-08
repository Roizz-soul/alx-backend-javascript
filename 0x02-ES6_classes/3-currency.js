export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // Getter for value of name
  get name() {
    return this._name;
  }

  // Setter for value of name
  set name(ans) {
    this._name = ans;
  }

  // Getter for value of code
  get code() {
    return this._code;
  }

  // Setter for value of code
  set code(ans) {
    this._code = ans;
  }

  // Method that returns attributes in a format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
