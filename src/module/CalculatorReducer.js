import { USER_INPUT_NUMBER, USER_INPUT_OPERATOR, CLEAR_CALCULATION } from '../constants/ActionTypes';


const INTIAL_STATE = {
    displayValue: '0',
    firstInput: '',
    secondInput: '',
    opretor: '',
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case USER_INPUT_NUMBER:
            if (state.opretor === '') {

                return {
                    ...state, firstInput: state.firstInput + '' + action.payload,
                    displayValue: state.firstInput + '' + action.payload
                }
            } else {
                return {
                    ...state, secondInput: state.secondInput + '' + action.payload,
                    displayValue: state.secondInput + '' + action.payload
                }
            }
            break;


        case USER_INPUT_OPERATOR:
            if (action.payload === '=') {
                if (state.secondInput !== '') {
                    switch (state.opretor) {
                        case '+':
                            return {
                                ...state, 
                                displayValue: Number(state.firstInput) + Number(state.secondInput),
                                firstInput: Number(state.firstInput) + Number(state.secondInput),
                                secondInput : '',
                                opretor: '',

                            }
                            break;
                        case '-':
                            return {
                                ...state, displayValue: Number(state.firstInput) - Number(state.secondInput),
                                firstInput: Number(state.firstInput) - Number(state.secondInput),
                                secondInput : '',
                                opretor: '',
                            }
                            break;
                        case 'x':
                            return {
                                ...state, displayValue: Number(state.firstInput) * Number(state.secondInput),
                                firstInput: Number(state.firstInput) * Number(state.secondInput),
                                secondInput : '',
                                opretor: '',
                            }
                            break;
                        case '/':
                            return {
                                ...state, displayValue: Number(state.firstInput) / Number(state.secondInput),
                                firstInput: Number(state.firstInput) / Number(state.secondInput),
                                secondInput : '',
                                opretor: '',
                            }
                            break;
                    }
                }else{
                    return {...state}
                }
            } else {
                return { ...state, opretor: action.payload }
            }
            break;
        case CLEAR_CALCULATION:
            return INTIAL_STATE
            break;
        default:
            return state;
    }
}