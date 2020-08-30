import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from "@expo/vector-icons";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import PlacesScreen from "../screens/PlacesScreen";
import PlaceScreen from "../screens/PlaceScreen";
import CreatePlaceScreen from "../screens/CreatePlaceScreen";
import MapScreen from "../screens/MapScreen";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={() => ({
                headerStyle: {
                    backgroundColor: Colors.background,
                },
                headerTintColor: Colors.primary,
                headerTitleStyle: {
                    fontFamily: 'source-sans-pro-semi-bold-italic'
                },
                headerBackTitle: '',
                headerBackImage: () => <Ionicons name="md-arrow-back" size={25} color={Colors.primary}
                                                 style={{marginLeft: 10}}/>
            })}>
                <Stack.Screen name="PlacesScreen" component={PlacesScreen} options={({navigation: {navigate}}) => ({
                    title: 'Places',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title="Bars" iconName="md-add" onPress={() => navigate('CreatePlaceScreen')}/>
                        </HeaderButtons>
                    )
                })}/>
                <Stack.Screen name="PlaceScreen" component={PlaceScreen}/>
                <Stack.Screen name="CreatePlaceScreen" component={CreatePlaceScreen} options={{title: 'Add Place'}}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{title: 'Map'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;