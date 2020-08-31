import React from 'react';
import * as FileSystem from 'expo-file-system';
import {Alert} from 'react-native';

import {insertPlace, getPlaces as getPlacesFromDB} from "../helpers/db";
import {ADD_PLACE_ACTION_TYPE, GET_PLACES, SET_LOADING} from "./type";
import Place from "../models/Place";

export const addPlace = (place) => async dispatch => {
    dispatch(setLoading(true));

    const fileExt = place.image.split('/').pop().split('.');
    const path = `${FileSystem.documentDirectory}GP-${Date.now()}.${fileExt}`;

    try {
        await FileSystem.moveAsync({from: place.image, to: path});

        place.image = path;
    } catch (err) {
        Alert.alert('Something went wrong!', 'When we were trying to save the image you have taken something went wrong in saving it.', [{text: 'Okay!'}]);

        dispatch(setLoading(false));

        return;
    }

    try {
        const result = await insertPlace(place);

        place.id = result.insertId.toString();
    } catch (err) {
        Alert.alert('Something went wrong!', 'When we were trying to save the place inside of the DB something went wrong in saving it.', [{text: 'Okay!'}]);

        dispatch(setLoading(false));

        return;
    }

    dispatch(setLoading(false));

    dispatch({
        type: ADD_PLACE_ACTION_TYPE,
        payload: place
    });
};

export const getPlaces = () => async dispatch => {
    dispatch(setLoading(true));

    let places = [];

    try {
        const result = await getPlacesFromDB();

        places = result.rows._array.map(({id, title, address, image, lat, lon}) =>
            new Place(title, address, image, lat, lon, id.toString()));
    } catch (err) {
        Alert.alert('Something went wrong!', 'When we were trying to load places from the DB something went wrong in getting it.', [{text: 'Okay!'}]);

        dispatch(setLoading(false));

        return;
    }

    dispatch(setLoading(false));

    dispatch({
        type: GET_PLACES,
        payload: places
    });
};

export const setLoading = isLoading => ({
    type: SET_LOADING,
    payload: isLoading
});