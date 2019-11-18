import Account from '../src/account';

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
    test('A user can deposit £100 and it returns a transaction', () => {
      expect(account.deposit(100)).toEqual(mockTransaction);
    });
  });
  describe('#Withdraw', () => {
    test('A user can withdraw £100 and it returns a transaction', () => {
      account.deposit(100);
      expect(account.withdraw(100)).toEqual(mockTransaction);
      expect(account.balance).toEqual(0);
    });
  });
});
