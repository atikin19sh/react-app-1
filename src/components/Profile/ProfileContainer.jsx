import React from "react";
import { compose } from 'redux';
import { connect } from "react-redux";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, getStatus, updateStatus }
  from "../../redux/profile-reducer";
import Profile from "./Profile";
import withAuthRedirect from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.myID;
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

function withRouter(Component) {
  return (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);