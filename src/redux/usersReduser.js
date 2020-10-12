const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { 
            id: 0, 
            fullName: 'Alex', 
            img: 'https://lh3.googleusercontent.com/proxy/j7rFxSVt28RBisyXQc6H9Mtf4yvvj2t_pldL2r-wOvw6OVwhkNkpz34PfMl59K0zM1jQNp_VEMZmscQyadcdioTAUpR9VIEdnQrFRRxcOvVDkOaY_C_k5y2TsTdavlyZhbMVG-Mdoc1kBNniUI4WflGHiGrmJri-4iyFWyMjeVBtBKpXhy7wtv7xLCZFI7NL_-2QTA',
            status: 'UI-dizigner', 
            location: { country: 'Ukraine', city: 'Kiev' }, 
            followed: false 
        },
        { 
            id: 1, 
            fullName: 'Nick', 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgYRMVOE5fjXCzGe6z3pj0EZmDegpQlTUZMg&usqp=CAU',
            status: 'Diveloper', 
            location: { country: 'Ukraine', city: 'Mariupol' }, 
            followed: true 
        },
        { 
            id: 2, 
            fullName: 'Alice', 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEnrk178MmCXyt0_HvDfNpJoivMi02DJa3mg&usqp=CAU',
            status: 'First manager', 
            location: { country: 'Russia', city: 'Rostov' }, 
            followed: false 
        },
        { 
            id: 3, 
            fullName: 'Andre', 
            img: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
            status: 'Boss', 
            location: { country: 'Ukraine', city: 'Mariupol' }, 
            followed: true 
        }
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
