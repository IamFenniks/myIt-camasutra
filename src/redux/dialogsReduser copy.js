const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDANE_NEW_MESSAGE_BODY = 'UPDANE-NEW-MESSAGE-BODY';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case UPDANE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 5, dialogs_id: 0, title: 'Nick`s message 3', mess: body });
            return state;
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
