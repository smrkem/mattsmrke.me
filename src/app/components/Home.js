import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

  constructor(props) {
      super();
      this.state = {
        age: props.initialAge
      };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 2
    })
  }

  render() {
    return (
      <div>
        <p>My home page text here</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} >Make me Older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number
}
