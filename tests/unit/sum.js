var sumPath = '../../src/sum';
jest.dontMock(sumPath);

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    var sum = require(sumPath);
    expect(sum(1, 2)).toBe(3);
  });
});
