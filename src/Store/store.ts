import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./storeIndex";


export const store = createStore(rootReducer,applyMiddleware(thunk))