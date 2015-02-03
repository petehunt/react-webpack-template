jest.dontMock('../../HelloMessage');

describe('HelloMessage', function() {
  it('greets react', function() {
    var React = require('react/addons');
    var HelloMessage = require('../../HelloMessage');
    var TestUtils = React.addons.TestUtils;

    var message = TestUtils.renderIntoDocument(
      <HelloMessage />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
      message, 'div');
    expect(div.getDOMNode().textContent).toEqual('Hello React');
  });
});
