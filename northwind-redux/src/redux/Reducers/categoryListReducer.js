import * as actionTypes from '../Actions/ActionsTypes'
import initialState from './initialState';

export default function categoryListReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return action.payload    
        default:
            return state;
    }
}