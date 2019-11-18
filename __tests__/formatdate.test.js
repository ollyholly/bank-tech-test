const MockDate = require('mockdate');
const FormatDate = require('../src/formatdate');

describe('Date', () => {
  let date;

  beforeEach(() => {
    MockDate.set('2019-11-18');
    date = new FormatDate();
  });

  describe('#getDate', () => {
    test('Current date is output in correct format', () => {
      expect(date.getDate()).toEqual('18/11/2019');
    });
  });
});
