
import ChangeTheNumber from "./upDown";
import getTheNews from "./teslaNews";

import { combineReducers } from "redux";


// Combine multiple reducer to make root reducer which will go next
const rootReducer=combineReducers({
    ChangeTheNumber,
    getTheNews


});

export default rootReducer;