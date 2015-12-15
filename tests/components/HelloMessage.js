var componentPath = '../../src/HelloMessage';
jest.dontMock(componentPath);

describe('HelloMessage', function() {
  it('greets react', function() {
    var React = require('react/addons');
    var HelloMessage = require(componentPath);
    var TestUtils = React.addons.TestUtils;

    var message = TestUtils.renderIntoDocument(
      <HelloMessage />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
      message, 'div');
    expect(div.getDOMNode().textContent).toEqual('Hello React');
  });
});
