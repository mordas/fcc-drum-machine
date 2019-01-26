import {createStore} from "redux";
import drumReducer from "../src/reducers";

function configureStore(state = { displayMessage: "none" }) {
  return createStore(drumReducer,state);
}
export default configureStore;