import React from "react";
import { compose } from 'redux';
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus }
  from "../../redux/profile-reducer";
import Profile from "./Profile";
import withAuthRedirect from "../HOC/withAuthRedirect";
import withRouter from "../HOC/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.myID;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  render() {
    return <Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myID: state.auth.id
  };
};



export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);