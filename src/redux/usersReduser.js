import { usersAPI, followAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetched: false,
    followInProgress: []
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users // Перезатирка users-ов
                //users: [ ...state.users, ...action.users ] Добавление user-ов в конец сейта
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHED:
            return {
                ...state, isFetched: action.isFetched
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetched
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default: return state;
    }
    return state;
}

              /* --------------------- ACTIONs` Creators start --------------------- */

export const followSuccess = (userId) => {
    return { type: FOLLOW, userId };
}
export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetched = (isFetched) => ({ type: TOGGLE_IS_FETCHED, isFetched });
export const toggleFollowInProgress = (isFetched, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetched,
    userId
});
              /* --------------------- ACTIONs` Creators end --------------------- */

              /* --------------------- THUNKs` Creators start --------------------- */
              /* gerUserThunkCreator */
export const getUsers = (currentPage, pageSize) => {
            // Thunk
    return (dispatch) => {
        dispatch(toggleIsFetched(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetched(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        }
        );
    }
}

                /* followThunkCreator */
export const follow = (userId) => {
            // Thunk
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));

        followAPI.follow(userId).then(data => {
                    if(data.resultCode == 0){
                        dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowInProgress(false, userId));
            }
        );
    }
}

                /* unFollowThunkCreator */
export const unfollow = (userId) => {
            // Thunk
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));

        followAPI.unFollow(userId).then(data => {
                    if(data.resultCode == 0){
                        dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowInProgress(false, userId));
            }
        );
    }
}
              /* --------------------- THUNKs` Creators end --------------------- */


export default usersReduser;
