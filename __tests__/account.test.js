// import Account from '../src/account';
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
    test('A user can deposit £100. It returns a transaction object & the balance increases by 100', () => {
      expect(account.deposit(100)).toEqual(mockTransaction);
      expect(account.balance).toEqual(100);
    });
  });

  describe('#Withdraw', () => {
    test('A user can withdraw £100. It returns a transaction object & the balance decreases by 100', () => {
      account.deposit(100);
      expect(account.withdraw(100)).toEqual(mockTransaction);
      expect(account.balance).toEqual(0);
    });
  });

  describe('#StoreTransaction', () => {
    test('A user makes a deposit and it saves a transaction in transactionHistory', () => {
      account.storeTransaction(100, 0);
      expect(account._transactionHistory).toContain(mockTransaction);
    });
  });

  describe('#PrintStatement', () => {
    test('A user can view statement and it calls printStement', () => {
      account.showStatement();
      expect(mockStatement.printStatement).toHaveBeenCalled();
    });
  });
});
