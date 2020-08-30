import React from 'react';
import {useSelector} from "react-redux";
import {View, FlatList} from 'react-native';

import PlaceCard from "../components/PlaceCard";
import Text from '../components/Text';
import styles from "../styles";

const PlacesScreen = ({navigation}) => {
    const places = useSelector(({places}) => places);

    return (
        <View style={styles.screen}>
            <FlatList data={places} keyExtractor={({id}) => id} renderItem={props => <PlaceCard navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default PlacesScreen;