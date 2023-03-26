import {combineReducers} from 'redux';
import {productDetailReducer, productsReducer} from './productReducer';

const allReducers = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
});

export default allReducers;
