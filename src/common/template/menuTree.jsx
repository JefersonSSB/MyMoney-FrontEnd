import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <li className="treeview">
        <a
          href={this.props.path}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <i className={`fa fa-${this.props.icon}`}></i>{" "}
          <span>{this.props.label}</span>
          <i
            className={`fa fa-angle-${
              this.state.open ? "up" : "down"
            } pull-right`}
          ></i>
        </a>
        <ul className="treeview-menu">{this.props.children}</ul>
      </li>
    );
  }
}

export default App;
