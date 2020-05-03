import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from "./products/productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const reducer = combineReducers({products: productsReducer});

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
