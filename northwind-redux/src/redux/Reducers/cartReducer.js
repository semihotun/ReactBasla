import initialState from "./initialState";
import * as actionType from "../Actions/ActionsTypes";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const index = state.findIndex(
        (x) => x.product.productID === action.payload.product.productID
      );
      if (index !== -1) {
        state[index] = {
          product: state[index].product,
          quantity: state[index].quantity + 1,
        };
        return Object.assign([], state);
      } else {
        return [...state, { ...action.payload }];
      }

    case actionType.REMOVE_FROM_CART:
      const newState = state.filter(
        (carItem) => carItem.product.productID !== action.payload.productID
      );
      return newState;

    default:
      return state;
  }
}

// var addedItem = state.find(x => x.product.productID === action.payload.product.productID);
// if (addedItem){
//     var newState = state.map(cartItem=>{
//         if(cartItem.product.productID ===action.payload.product.productID)
//         {
//             return Object.assign({},addedItem,{quantity:addedItem.quantity+1});
//         }
//         return cartItem;
//     })
//     return newState;
// }
// else{
//     return [...state,{...action.payload}]
// }
