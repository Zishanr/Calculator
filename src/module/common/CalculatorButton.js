import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Style from '../Style';

const CalculatorButton = ({ value, onPress }) => {
    return (
        <TouchableOpacity style={Style.buttonStyle}
            onPress={onPress}>

            <Text style={Style.buttonTextStyle}>{value}</Text>
        </TouchableOpacity>
    );
}

export default CalculatorButton;