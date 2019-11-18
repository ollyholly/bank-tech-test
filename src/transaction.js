/* eslint-disable no-underscore-dangle */
const FormatDate = require('./formatdate');

class Transaction {
  constructor(date = new FormatDate(), credit, debit, balance) {
    this._date = date.getDate();
    this._credit = credit;
    this._debit = debit;
    this._balance = balance;
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
