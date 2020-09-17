import dialogsReduser from "./dialogsReduser copy";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser copy 2";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, title: 'Post 1', message: 'Message 1', like: 23 },
                { id: 1, title: 'Post 2', message: 'Message 2', like: 432 },
                { id: 2, title: 'Post 3', message: 'Message 3', like: 54 },
                { id: 3, title: 'Post 4', message: 'Message 4', like: 0 },
                { id: 4, title: 'Post 5', message: 'Message 5', like: 34567 },
            ],
            newPostText: 'IT-Kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 0, name: 'Nick' },
                { id: 1, name: 'Mishele' },
                { id: 2, name: 'Victor' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'John' },
                { id: 5, name: 'Tom' },
                { id: 6, name: 'Anna' }
            ],
            messages: [
                { id: 0, dialogs_id: 0, title: 'Nick`s message 1', mess: 'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
                { id: 1, dialogs_id: 6, title: 'Anna message 1', mess: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
                { id: 2, dialogs_id: 6, title: 'Anna message 2', mess: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
                { id: 3, dialogs_id: 4, title: 'John message 1', mess: 'Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
                { id: 4, dialogs_id: 0, title: 'Nick`s message 2', mess: 'Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' }
            ],
            newMessageBody: ''
        },
        sideBar: {
            nav: [
                { id: 0 }
            ],
            friends: [
                { id: 0, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'Andrew' },
                { id: 1, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'John' },
                { id: 2, img: 'https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg', fName: 'Viktor' }
            ]
        }
    },
    _callSubscriber() {
        return this._state;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sideBar     = sidebarReduser(this._state.sideBar, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;