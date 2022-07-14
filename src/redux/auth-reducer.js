import { authAPI } from "../components/api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  password: null,
  rememberMe: null,
  captcha: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case SET_LOGIN_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}

const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } });
const setLoginData = (email, password, rememberMe, captcha) => (
  {
    type: SET_LOGIN_DATA,
    data: { email, password, rememberMe, captcha }
  }
);

export const getAuthUserData = () => {
  return dispatch => {
    authAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email));
        }
      });
  }
}

export const loginWithData = (email, password, rememberMe, captcha) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe, captcha)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setLoginData(email, password, rememberMe, captcha));
          alert('You are logged in!')
        } else alert('Login Error!')
      })
  }
}

export const logout = () => {
  return dispatch => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          alert('You was logged out.')
        }
      })
  }
}

export default authReducer;