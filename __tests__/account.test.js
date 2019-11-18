const Account = require('../src/account');

describe('Account', () => {
  let account;
  let mockTransaction;
  let mockTransactionClass;
  let mockStatement;

  beforeEach(() => {
    mockStatement = jest.fn();
    mockStatement.printStatement = jest.fn();
    mockTransaction = jest.fn();
    mockTransactionClass = jest.fn(() => mockTransaction);
    account = new Account(mockStatement, mockTransactionClass);
  });

  describe('#Deposit', () => {
    test('A user can make a deposit, it returns a transaction object', () => {
      expect(account.deposit(100)).toEqual(mockTransaction);
    });

    test('A user can deposit £100, it increases the balance by 100', () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

    test('It raises en error when user types not a number', () => {
      expect(() => {
        account.deposit('cat');
      }).toThrow('Error: it must be a number.');
    });

    test('It raises en error when user types a negative number', () => {
      expect(() => {
        account.deposit(-600);
      }).toThrow('Error: it must be greater than 0.');
    });
  });

  describe('#Withdraw', () => {
    test('A user can withdraw £100. It returns a transaction object & the balance decreases by 100', () => {
      account.deposit(100);
      expect(account.withdraw(100)).toEqual(mockTransaction);
      expect(account.balance).toEqual(0);
    });

    test('It raises en error insufficient balance', () => {
      expect(() => {
        account.withdraw(600);
      }).toThrow('Error: insufficient balance.');
    });
  });

  describe('#StoreTransaction', () => {
    test('A user makes a deposit and it saves a transaction in transactionHistory', () => {
      account.storeTransaction(100, 0);
      expect(account.transactionHistory).toContain(mockTransaction);
    });
  });

  describe('#PrintStatement', () => {
    test('A user can view statement and it calls printStement', () => {
      account.showStatement();
      expect(mockStatement.printStatement).toHaveBeenCalled();
    });
  });
});
