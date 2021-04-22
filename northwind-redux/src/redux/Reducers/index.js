import {combineReducers} from "redux"
import changeCategoryReducer from "../Reducers/changeCategoryReducer"
import categoryListReducer from "../Reducers/categoryListReducer"
import productListForCategoryReducer from "../Reducers/productListForCategoryReducer"
import saveProductReducer from "../Reducers/saveProductReducer"
import cartReducer from "../Reducers/cartReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListForCategoryReducer,
    cartReducer,saveProductReducer
})
export default rootReducer;