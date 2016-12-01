var React = require('react');

var CurrentTime = React.createClass({
  getInitialState: function(){
    return {date:  (new Date()).toLocaleTimeString()};
  },
  componentDidMount: function() {
    this.timerId = setInterval(this.update_time, 1000);
  },
  update_time: function() {
    this.setState({date: (new Date()).toLocaleTimeString()});
  },
  render: function() {
    return (<div>{this.state.date}</div>);
  },

});

module.exports = CurrentTime;