import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from "react-redux";
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';

import Text from "./Text";
import Button from "./Button";
import styles from "../styles";
import {setLoading} from "../actions";
import Colors from "../constants/Colors";

const LocationPicker = ({onLocationSelect}) => {
    const dispatch = useDispatch();

    const [location, setLocation] = useState(null);

    const grantPermission = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);

        if (result.status !== 'granted') {
            Alert.alert('Insufficient Permissions!', 'You need to grant location permissions to use this app.', [{text: 'Okay!'}]);
            return false;
        }

        return true;
    };

    const getLocationHandler = async () => {
        const result = await grantPermission();
        if (!result)
            return;

        dispatch(setLoading(true));

        try {
            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            onLocationSelect(location);
        } catch (err) {
            Alert.alert('Something went wrong!', 'Something went wrong while getting your location.', [{text: 'Okay'}]);
        }

        dispatch(setLoading(false));
    };

    return (
        <View style={styles.picker}>
            <View style={styles.preview}>
                {location ?
                    <Image source={{
                        uri: `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-o+f00(${location.coords.longitude},${location.coords.latitude})/${location.coords.longitude},${location.coords.latitude},15,0,60/200x150?access_token=pk.eyJ1IjoiYXJpYW1hbiIsImEiOiJja2VpczA2dHYwbmYzMnpvNnFldng1a20zIn0.MthUVi2rI2gQpVKvKW3fSA`
                    }} style={styles.takenImage}/> :
                    <Text>You haven't selected any location yet.</Text>
                }
            </View>
            <Button color={1} title="Select Location" onPress={getLocationHandler}/>
        </View>
    );
};

export default LocationPicker;