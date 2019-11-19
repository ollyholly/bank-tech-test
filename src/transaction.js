/* eslint-disable no-underscore-dangle */
const FormatDate = require('./formatdate');

class Transaction {
  constructor(credit, debit, balance, date = new FormatDate()) {
    this._credit = credit;
    this._debit = debit;
    this._balance = balance;
    this._date = date.getDate();
  }

  get date() {
    return this._date;
  }

  get credit() {
    return this._credit;
  }

  get debit() {
    return this._debit;
  }

  get balance() {
    return this._balance;
  }
}
module.exports = Transaction;
