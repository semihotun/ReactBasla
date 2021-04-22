import * as actionType from "../Actions/ActionsTypes"

export function addToCart(cartItem){
    return{
        type:actionType.ADD_TO_CART,
        payload:cartItem
    }
}
export function removeFromCart(cartItem){
    return{
        type:actionType.REMOVE_FROM_CART,
        payload:cartItem
    }
}