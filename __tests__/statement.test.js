/* eslint-disable no-console */
const Statement = require('../src/statement');

describe('Statement', () => {
  let statement;
  let mockTransactionHistory;

  beforeEach(() => {
    mockTransactionHistory = [
      {
        date: '18/11/2019',
        credit: 100,
        debit: 0,
        balance: 800,
      },
    ];
    statement = new Statement();
    global.console.log = jest.fn();
  });

  describe('#PrintStatement', () => {
    test('A user can print a statement with transaction history', () => {
      const header = 'date || credit || debit || balance';
      const transaction = '18/11/2019 || 100.00 || || 800.00 ';

      statement.printStatement(mockTransactionHistory);
      expect(console.log.mock.calls[0][0]).toBe(`${header}`);
      expect(console.log.mock.calls[1][0]).toBe(`${transaction}`);
    });
  });
});
