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
    this.balance += credit;
    return this.storeTransaction(0, credit);
  }

  withdraw(debit) {
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
}

module.exports = Account;
