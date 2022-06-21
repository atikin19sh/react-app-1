import React from "react";
import StoreContext from "../../../StoreContext";
import Friends from './Friends';

const FriendsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {store => (
        <Friends sidebar={store.getState().sidebar} />
      )}
    </StoreContext.Consumer>
  );
}

export default FriendsContainer;