import {createStore} from "redux";
import drumReducer from "../src/reducers";

function configureStore(state = { display: "none" }) {
  return createStore(drumReducer,state);
}
export default configureStore;