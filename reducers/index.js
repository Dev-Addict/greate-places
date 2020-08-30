import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import placesReducer from './placesReducer';

export default combineReducers({
    form: formReducer,
    places: placesReducer
});