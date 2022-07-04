import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`auth/me`, {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);