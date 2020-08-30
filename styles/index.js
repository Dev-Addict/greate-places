import {StyleSheet, Dimensions} from 'react-native';

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        height: Dimensions.get('window').height
    },
    text: {
        color: Colors.foreground,
        fontSize: 12,
        fontFamily: 'source-sans-pro'
    },
    text1: {
        fontSize: 20
    },
    text2: {
        fontSize: 18
    },
    text3: {
        fontSize: 16
    },
    text4: {
        fontSize: 14
    },
    text5: {
        fontSize: 12
    },
    text6: {
        fontSize: 10
    }
});

export default styles;