const Transaction = require('../src/transaction');
const Statement = require('../src/statement');

class Account {
  constructor(statement = new Statement(), TransactionClass = Transaction) {
    this.TransactionClass = TransactionClass;
    this.statement = statement;
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit(credit) {
    this.verifyNumber(credit);
    this.balance += credit;

    return this.storeTransaction(0, credit);
  }

  withdraw(debit) {
    this.verifyNumber(debit);
    if (this.isInsufficientBalance(debit)) {
      throw new Error('Error: insufficient balance.');
    }

    this.balance -= debit;
    return this.storeTransaction(debit, 0);
  }

  showStatement() {
    return this.statement.printStatement();
  }

  storeTransaction(credit, debit) {
    const transaction = new this.TransactionClass(credit, debit, this.balance);
    this.transactionHistory.unshift(transaction);
    return transaction;
  }

  isNotPositive(number) {
    return number <= 0;
  }

  isInsufficientBalance(number) {
    return this.balance - number < 0;
  }

  verifyNumber(number) {
    if (Number.isInteger(number) === false) {
      throw new Error('Error: it must be a number.');
    }
    if (this.isNotPositive(number)) {
      throw new Error('Error: it must be greater than 0.');
    }
  }
}

module.exports = Account;
