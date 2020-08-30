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
    },
    button : {
        borderRadius: 3,
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    primary: {
        backgroundColor: Colors.primary
    },
    secondary: {
        backgroundColor: Colors.secondary
    },
    danger: {
        backgroundColor: Colors.danger
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        color: Colors.foreground,
        fontFamily: 'source-sans-pro',
        fontSize: 14,
        marginTop: -5
    },
    inputContainer: {
        marginVertical: 15
    }
});

export default styles;