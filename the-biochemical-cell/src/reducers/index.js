import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import aminoReducer from "./aminoReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  amino: aminoReducer,
  news: newsReducer,
});
