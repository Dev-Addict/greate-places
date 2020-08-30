import {ADD_PLACE_ACTION_TYPE} from "../actions/type";

const placesReducer = (state = [], action) => {
    if (action.type === ADD_PLACE_ACTION_TYPE)
        return [...state, action.payload];
    return state;
};

export default placesReducer;