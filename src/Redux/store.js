import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducers";

const rootReducer = combineReducers({
  reducer: reducer
});

export const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
);
