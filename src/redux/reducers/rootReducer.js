import { combineReducers } from "redux";
import rLoadData from "./changeData/rChangeData";

const rootReducers = combineReducers({
  data: rLoadData
});

export default rootReducers;
