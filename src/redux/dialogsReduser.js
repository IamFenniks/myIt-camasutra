const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDANE_NEW_MESSAGE_BODY = 'UPDANE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
   
    switch (action.type) {
        case UPDANE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state };
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
            
        case SEND_MESSAGE: {
            let stateCopy = { ...state };
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';

            stateCopy.messages = [ ...state.messages];
            stateCopy.messages.push({ id: 5, dialogs_id: 0, title: 'Nick`s message 3', mess: body });
            return stateCopy;
        }
            
        default: return state;
    }

    return state;
}


export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
}
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDANE_NEW_MESSAGE_BODY, body: body }
}


export default dialogsReduser;
