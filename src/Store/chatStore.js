import { createStore, combineReducers } from "redux";
import {chatReducer} from "../Reducers/chatReducer";


/*
    remove enhancer in createStore on prod. It is just to debug
 */
export default () => {
    const store = createStore(
        combineReducers({chatReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}