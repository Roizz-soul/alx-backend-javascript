/* eslint-disable no-unused-vars */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for value of amount
  get amount() {
    return this._amount;
  }

  // Setter for value of amount
  set amount(ans) {
    this._amount = ans;
  }

  // Getter for value of currency
  get currency() {
    return this._currency;
  }

  // Setter for value of currency
  set currency(ans) {
    this._currency = ans;
  }

  // Method that returns attributes in a format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static Method returns conversion
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
