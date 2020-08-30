import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';

import Navigator from "./navigation/Navigator";
import Loading from "./components/Loading";
import Colors from "./constants/Colors";

const App = () => {
    let [isFontLoaded] = useFonts({
        'source-sans-pro-italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
        'source-sans-pro': require('./assets/fonts/SourceSansPro-Regular.ttf'),
        'source-sans-pro-semi-bold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
        'source-sans-pro-semi-bold-italic': require('./assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
    });

    if (!isFontLoaded)
        return <Loading/>;

    return (
        <View style={styles.container}>
            <Navigator/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default App;