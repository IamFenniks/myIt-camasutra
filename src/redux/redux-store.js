import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sidebarReduser
});

let store = createStore(reducers);

export default store;
