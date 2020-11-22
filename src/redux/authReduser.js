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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }

  return state;
};

/* ------------------- ActionCreators Start --------------------- */
export const setUserAuthData = (userId, email, login) => ({
  type: SET_USER_AUTH_DATA,
  data: { userId, email, login },
});
/* ------------------- ActionCreators End --------------------- */

/* ------------------- ThunkCreators Start --------------------- */
export const getAuth = () => {
  return (dispatch) => {
    authAPI.getAuth().then((data) => {
      //debugger;
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login));
      }
    });
  };
};

/* ------------------- ThunkCreators End --------------------- */

export default authReduser;
