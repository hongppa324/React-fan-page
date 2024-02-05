import { createStore } from "redux";
import { combineReducers } from "redux";
import members from "../modules/members";

const rootReducer = combineReducers({ members });
const store = createStore(rootReducer);

export default store;
