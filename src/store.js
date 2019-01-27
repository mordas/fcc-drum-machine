import {createStore} from "redux";
import drumReducer from "../src/reducers";

function configureStore(state = { displayMessage: "nope" }) {
  return createStore(drumReducer,state);
}
export default configureStore;