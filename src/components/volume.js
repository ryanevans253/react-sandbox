import React from "react";

class Vol extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({}));
  }
}
