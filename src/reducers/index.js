// here all our reducers we have created we will add them here in our main reducer and then pass this this main reducer our store..

import changeTheNumber from "./upDown";
import todoReducer from "./todoReducer";

// for multiple reducer we need to combined them and for that we use combineReducer

import {combineReducers} from 'redux';
import changeMode from "./toogleMode";

const mainReducer = combineReducers({
    changeTheNumber,  // this is a key value pair here both same so write like this
    todoReducer,
    changeMode
})

export default mainReducer;