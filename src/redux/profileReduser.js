import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE  = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 0, title: 'Post 1', message: 'Message 1', like: 23 },
        { id: 1, title: 'Post 2', message: 'Message 2', like: 432 },
        { id: 2, title: 'Post 3', message: 'Message 3', like: 54 },
        { id: 3, title: 'Post 4', message: 'Message 4', like: 0 },
        { id: 4, title: 'Post 5', message: 'Message 5', like: 34567 },
    ],
    newPostText: 'IT-Kamasutra.com',

    profile: null
};

const profileReduser = (state = initialState, action) => {
    
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: 'Title 6',
                message: state.newPostText,
                like: 0
            }
            stateCopy = { ...state,
                posts: [ ...state.posts, newPost],
                newPostText: ''
            };
            return stateCopy;
            
        case UPDATE_NEW_POST_TEXT:
            stateCopy = { ...state,
                newPostText: action.newText
            };
            return stateCopy;

        case SET_USER_PROFILE:
            return{ 
                ...state, profile: action.profile
             }
            
        default: return state;
    }

    return state;
}

/* ---------------------------- ActionCreators Start ---------------------------- */

export const addPost = () => {
    return { type: ADD_POST };
}
export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

/* ---------------------------- ActionCreators End   ---------------------------- */

/* ---------------------------- ThunkCreators Start  ---------------------------- */
export const getUser = (userId) => {
    return (dispatch) => {
        
        usersAPI.getUser(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            }
        );
    }
}
/* ---------------------------- ThunkCreators End   ---------------------------- */

export default profileReduser;
