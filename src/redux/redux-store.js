import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import friendReducer from "./friend-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";



let reducers = combineReducers({
    friendsPage : friendReducer,
    profilePage : profileReducer,
    friendPage : friendReducer,
    dialogPage : dialogReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



window._store_ = store;


export default store;