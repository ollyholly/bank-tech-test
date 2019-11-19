const MockDate = require('mockdate');
const Account = require('../src/account');

describe('FeatureTest', () => {
  let account;

  test('User makes 2 deposits, 1 withdrawal and prints her bank statement', () => {
    global.console.log = jest.fn();
    account = new Account();
    MockDate.set('2012-01-10');
    account.deposit(1000);
    MockDate.set('2012-01-13');
    account.deposit(2000);
    MockDate.set('2012-01-14');
    account.withdraw(500);
    account.showStatement();
    expect(console.log.mock.calls[0][0]).toBe(
      'date || credit || debit || balance',
    );
    expect(console.log.mock.calls[1][0]).toBe(
      '14/01/2012 || || 500.00 || 2500.00 ',
    );
    expect(console.log.mock.calls[2][0]).toBe(
      '13/01/2012 || 2000.00 || || 3000.00 ',
    );
    expect(console.log.mock.calls[3][0]).toBe(
      '10/01/2012 || 1000.00 || || 1000.00 ',
    );
  });
});
