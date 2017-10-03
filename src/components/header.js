import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
export class Header extends React.Component {
  logout = () => {
    this.props.startLogout();
  };
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link  className="header__title" to="/dashboard">
              <h1>Expensify</h1>
            </Link>
            <button className="button button--link" onClick={this.logout}>Logout</button>
          </div>

        </div>

      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};
export default connect(undefined, mapDispatchToProps)(Header);
