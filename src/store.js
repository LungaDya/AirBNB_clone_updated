import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./Reducers/listingReducers";
import { modalReducer } from "./Reducers/modalReducer";

const reducer = combineReducers({ listingList: listingListReducer, modal: modalReducer });

const initalState = {};

const middleware = [thunk];

createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
