import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./rootRed";
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware) => {
    return applyMiddleware(middleware);
  };

export const store = createStore(rootReducer, bindMiddleware(thunkMiddleware));

