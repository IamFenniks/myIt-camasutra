import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};
//debugger;
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      //debugger;
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

  return state;
};

/* ------------------- ActionCreators Start --------------------- */
export const setUserAuthData = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: { userId, email, login, isAuth },
});
/* ------------------- ActionCreators End --------------------- */

/* ------------------- ThunkCreators Start --------------------- */
export const getAuth = () => {
  return (dispatch) => {
    authAPI.getAuth().then((data) => {
      //debugger;
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
 
  authAPI.login(email, password, rememberMe).then(response => {
    //debugger;
    if (response.data.resultCode === 0) {
      dispatch(getAuth());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "common error";
      dispatch(stopSubmit("login", { _error: message}));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    //debugger;
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    }
  });
};

/* ------------------- ThunkCreators End --------------------- */

export default authReduser;
