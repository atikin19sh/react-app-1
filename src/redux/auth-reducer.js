import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, login, email, isAuth } });


export const getAuthUserData = () => {
  return dispatch => {
    authAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email, true));
        }
      });
  }
}

export const loginWithData = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          let message = data.messages.length > 0 ? data.messages[0] : 'Unknown error';
          dispatch(stopSubmit('login', {_error: message}))
        }
      })
  }
}

export const logout = () => {
  return dispatch => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
          alert('You was logged out.')
        }
      })
  }
}

export default authReducer;
