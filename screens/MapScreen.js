import React, {useState, useEffect, useCallback} from 'react';
import MapView, {Marker} from 'react-native-maps';

import styles from "../styles";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const MapScreen = ({navigation: {setOptions, navigate, setParams}}) => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="save" iconName="md-save" color={Colors.primary} size={25}
                          onPress={() => {
                              if (selectedLocation)
                                  navigate('CreatePlaceScreen', {
                                      selectedLocation
                                  });
                          }}/>
                </HeaderButtons>
            )
        })
    }, [selectedLocation]);

    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = ({nativeEvent: {coordinate}}) => {
        setSelectedLocation(coordinate)
    };

    return (
        <MapView region={mapRegion} style={styles.map} onPress={selectLocationHandler}>
            {selectedLocation &&
            <Marker title="Selected Location" coordinate={selectedLocation}/>
            }
        </MapView>
    );
};

export default MapScreen;