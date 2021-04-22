import * as actionTypes from '../Actions/ActionsTypes'
import initialState from './initialState';

export default function changeCategoryReducer(state=initialState.CurrentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload    
        default:
            return state;
    }
}