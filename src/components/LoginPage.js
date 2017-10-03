import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends Component {
  login = () => {
    this.props.startLogin();
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boiler Plate</h1>
          <p>It's time to get your expenses under control.</p>
          <button className="button" onClick={this.login}>Login with Google </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { startLogin })(LoginPage);
