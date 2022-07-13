import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange(e) {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
    this.setState({
      status: this.props.status
    })
  }

  render() {
    return <div style={{ fontStyle: 'italic' }}>
      {(this.state.editMode)
        ? <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
        : <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status || "No status"}</span>}
    </div>
  }
}

export default ProfileStatus;