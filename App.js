import React from 'react';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {useFonts} from 'expo-font';

import Navigator from "./navigation/Navigator";
import Loading from "./components/Loading";
import reducers from './reducers';
import {init as initialDB} from "./helpers/db";
import styles from "./styles";

initialDB().then(() => {
    console.log('DB initialized.');
}).catch(err => {
    console.log('Failed initializing DB.')
});

const store = createStore(reducers, applyMiddleware(reduxThunk));

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
        <Provider store={store}>
            <View style={styles.screen}>
                <Navigator/>
            </View>
        </Provider>
    );
};

export default App;