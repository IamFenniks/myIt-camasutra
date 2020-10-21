import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sidebarReduser,
    usersPage: usersReduser
});

let store = createStore(reducers);

window.store = store;

export default store;
