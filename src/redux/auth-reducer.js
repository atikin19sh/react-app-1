import { authAPI } from "../components/api/api";

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
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email } });

export const authMe = () => {
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

export default authReducer;