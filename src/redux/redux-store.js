import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';
import sidebarReducer from "./sidebar-reducer";
import authReducer from './auth-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
});

let store = createStore(reducers);

export default store;