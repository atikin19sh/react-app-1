import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile }
  from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  };

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);