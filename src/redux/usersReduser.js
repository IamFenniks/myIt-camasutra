const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetched: false
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: true }
                    }
                    return u;
                } )
            };
            
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: false }
                    }
                    return u;
                } )
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
            return { ...state, isFetched: action.isFetched }

        default: return state;
    }

    return state;
}


export const follow = (userId) => {
    return { type: FOLLOW, userId };
}
export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setTotalUsersCount = (totalCount) => ({  type: SET_TOTAL_USERS_COUNT, count: totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetched = (isFetched) => ({ type: TOGGLE_IS_FETCHED, isFetched });

export default usersReduser;
