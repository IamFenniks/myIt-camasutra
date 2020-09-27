const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, title: 'Post 1', message: 'Message 1', like: 23 },
        { id: 1, title: 'Post 2', message: 'Message 2', like: 432 },
        { id: 2, title: 'Post 3', message: 'Message 3', like: 54 },
        { id: 3, title: 'Post 4', message: 'Message 4', like: 0 },
        { id: 4, title: 'Post 5', message: 'Message 5', like: 34567 },
    ],
    newPostText: 'IT-Kamasutra.com'
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: 'Title 6',
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

    return state;
}


export const addPostActionCreator = () => {
    return { type: ADD_POST };
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReduser;
