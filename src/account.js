import Statement from './statement';
import Transaction from './transaction';

export default class Account {
  constructor(statement = new Statement(), TransactionClass = Transaction) {
    this._TransactionClass = TransactionClass;
    this._statement = statement;
    this._balance = 0;
    this._transactionHistory = [];
  }
}
