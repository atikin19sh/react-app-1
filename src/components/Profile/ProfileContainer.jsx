import React from "react";
import { connect } from "react-redux";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile }
  from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.userId);
  };

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
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

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));