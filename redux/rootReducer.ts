import { combineReducers } from "redux";
import playerReducer from "./Player/PlayerReducer";

const rootReducer = combineReducers({player: playerReducer})

export default rootReducer