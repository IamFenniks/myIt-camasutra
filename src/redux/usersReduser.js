const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 0, fullName: 'Alex', status: 'UI-dizigner', location: { country: 'Ukraine', city: 'Kiev' }, followed: 'false' },
        { id: 1, fullName: 'Nick', status: 'Diveloper', location: { country: 'Ukraine', city: 'Mariupol' }, followed: 'false' },
        { id: 2, fullName: 'Alice', status: 'First manager', location: { country: 'Russia', city: 'Rostov' }, followed: 'false' },
        { id: 3, fullName: 'Andre', status: 'Boss', location: { country: 'Ukraine', city: 'Mariupol' }, followed: 'false' }
    ]
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
            return ;
           
        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }

        default: return state;
    }

    return state;
}


export const followAC = (userId) => {
    return { type: FOLLOW, userId };
}
export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export default usersReduser;
