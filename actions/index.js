import {ADD_PLACE_ACTION_TYPE} from "./type";

export const addPlace = (place) => ({
    type: ADD_PLACE_ACTION_TYPE,
    payload: place
});