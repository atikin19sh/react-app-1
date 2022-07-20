import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div style={{ fontStyle: 'italic' }}>
      {(editMode)
        ? <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
        />
        : <span onDoubleClick={activateEditMode} >
          {props.status || "No status"}
        </span>
      }
    </div>
  );
}

export default ProfileStatusWithHooks;