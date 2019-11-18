const Transaction = require('../src/transaction');

describe('Transaction', () => {
  let transaction;
  let mockDate;

  beforeEach(() => {
    mockDate = jest.fn();
    mockDate.getDate = jest.fn();
    transaction = new Transaction(mockDate, 100, 0, 300);
  });

  describe('#Date', () => {
    test('A transaction has a date, getDate is called on Date object.', () => {
      expect(mockDate.getDate).toHaveBeenCalled();
      expect(transaction.date).toEqual(mockDate.getDate());
    });
  });

  describe('#Credit', () => {
    test('A transaction has a credit value.', () => {
      expect(transaction.credit).toEqual(100);
    });
  });

  describe('#Debit', () => {
    test('A transaction has a debit value.', () => {
      expect(transaction.debit).toEqual(0);
    });
  });

  describe('#Balance', () => {
    test('A transaction has a balance value.', () => {
      expect(transaction.balance).toEqual(300);
    });
  });
});
