import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../Reducers/index'
import thunk from "redux-thunk"

export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk));
}