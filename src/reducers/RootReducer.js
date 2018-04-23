/* Created By Zishan Rashid */

import { combineReducers } from 'redux';
import CalculatorReducer from '../module/CalculatorReducer';

const rootReducer = combineReducers({
    calculatorReducer : CalculatorReducer,
});

export default rootReducer;