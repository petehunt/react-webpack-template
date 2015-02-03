/** @jsx React.DOM */
var React = require('react');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

React.render(<HelloMessage />, document.body);
