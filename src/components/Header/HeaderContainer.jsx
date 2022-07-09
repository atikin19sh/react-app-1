import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authMe } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { authMe })(HeaderContainer);