import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import CalculatorButton from './common/CalculatorButton';
import { userInputNumberActionCreator, operatorActionCreator, clearCalculationActionCreator } from '../module/CalculatorAction';
import Style from './Style';

const GLOBAL_STRING = require('../constants/String');

class Calculator extends Component {
    render() {
        return (
            <View style={Style.containerStyle}>

                <View style={Style.resultContainerStyle}>
                    <Text style={Style.resultTextStyle}>
                        {this.props.displayValue}
                    </Text>
                </View>

                <View style={Style.buttonsContainerStyle}>

                    <View style={Style.numericButtonStyle}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CalculatorButton value={7} onPress={() => this._onButtonPressed(7, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={8} onPress={() => this._onButtonPressed(8, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={9} onPress={() => this._onButtonPressed(9, GLOBAL_STRING.NUMBER)} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CalculatorButton value={4} onPress={() => this._onButtonPressed(4, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={5} onPress={() => this._onButtonPressed(5, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={6} onPress={() => this._onButtonPressed(6, GLOBAL_STRING.NUMBER)} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CalculatorButton value={1} onPress={() => this._onButtonPressed(1, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={2} onPress={() => this._onButtonPressed(2, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={3} onPress={() => this._onButtonPressed(3, GLOBAL_STRING.NUMBER)} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <CalculatorButton value='.' onPress={() => this._onButtonPressed('.', GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value={0} onPress={() => this._onButtonPressed(0, GLOBAL_STRING.NUMBER)} />
                            <CalculatorButton value="DEL" onPress={() => this._onButtonPressed('DEL', GLOBAL_STRING.DELETE)} />
                        </View>

                    </View>

                    <View style={Style.operatorButtonStyle}>
                        <CalculatorButton value='/' onPress={() => this._onButtonPressed('/', GLOBAL_STRING.OPERATOR)} />
                        <CalculatorButton value='x' onPress={() => this._onButtonPressed('x', GLOBAL_STRING.OPERATOR)} />
                        <CalculatorButton value='-' onPress={() => this._onButtonPressed('-', GLOBAL_STRING.OPERATOR)} />
                        <CalculatorButton value='+' onPress={() => this._onButtonPressed('+', GLOBAL_STRING.OPERATOR)} />
                        <CalculatorButton value='=' onPress={() => this._onButtonPressed('=', GLOBAL_STRING.OPERATOR)} />
                    </View>

                </View>

            </View>
        );
    }

    _onButtonPressed(userInput, userInputType) {
        if (userInputType === GLOBAL_STRING.NUMBER) {
            this.props.userInputNumberActionCreator(userInput);
        } else if (userInputType === GLOBAL_STRING.OPERATOR) {
            this.props.operatorActionCreator(userInput);
        } else {
            this.props.clearCalculationActionCreator();
        }
    }
}


const _mapStateToProps = ({ calculatorReducer }) => {
    const { displayValue } = calculatorReducer;
    return { displayValue };
}

export default connect(_mapStateToProps, { userInputNumberActionCreator, operatorActionCreator, clearCalculationActionCreator })(Calculator);