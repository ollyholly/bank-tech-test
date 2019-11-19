/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
class Statement {
  printStatement(transactionHistory) {
    this.printHeader();
    this.printTransactions(transactionHistory);
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printTransactions(transactionHistory) {
    transactionHistory.forEach((transaction) => {
      const { date } = transaction;
      const credit = this.formatNumber(transaction.credit);
      const debit = this.formatNumber(transaction.debit);
      const balance = this.formatNumber(transaction.balance);

      console.log(`${date} || ${credit} || ${debit} || ${balance}`);
    });
  }

  formatNumber(number) {
    if (number === 0) {
      return '';
    }
    return number.toFixed(2);
  }
}
module.exports = Statement;
