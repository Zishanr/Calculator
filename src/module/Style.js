import React from 'react';
import { StyleSheet } from 'react-native';

const GLOBAL_COLORS = require('../constants/Colors');


export default Styles = StyleSheet.create(
    {
        containerStyle: {
            flex: 1,
        },
        resultContainerStyle: {
            flex: 3,
            backgroundColor: 'white',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 5
        },
        resultTextStyle: {
            color: 'black',
            fontSize: 50,
        },
        buttonsContainerStyle: {
            flex: 7,
            flexDirection: 'row',
            backgroundColor: GLOBAL_COLORS.BUTTON_PALLET_THEME
        },
        numericButtonStyle: {
            flex: 6
        },
        operatorButtonStyle: {
            flex: 2
        },
        buttonStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: GLOBAL_COLORS.BUTTON_BORDER
        },
        buttonTextStyle: {
            fontSize: 25,
            color: 'white'
        }
    }
);