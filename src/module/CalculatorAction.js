import { USER_INPUT_NUMBER, USER_INPUT_OPERATOR, CLEAR_CALCULATION } from '../constants/ActionTypes';

export const userInputNumberActionCreator = (userInput) => {
    return ({
        type: USER_INPUT_NUMBER,
        payload: userInput
    });
}

export const operatorActionCreator = (userInput) => {
    return ({
        type: USER_INPUT_OPERATOR,
        payload: userInput
    });
}

export const clearCalculationActionCreator = () => {
    return ({
        type: CLEAR_CALCULATION,
    });
}