import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: 'Yo'
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
  }

  render() {
    return <div style={{ fontStyle: 'italic' }}>
      {(this.state.editMode)
        ? <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
        : <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>}
    </div>
  }
}

export default ProfileStatus;