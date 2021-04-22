import * as actionType from "../Actions/ActionsTypes"
import initialState from './initialState';

export default function productListForCategoryReducer(state=initialState.products,action)
{
    switch (action.type) {
        case actionType.GET_PRODUCTS:
            return action.payload
        default:
            return state;
    }
}