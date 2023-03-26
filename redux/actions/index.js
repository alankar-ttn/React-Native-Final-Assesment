import axios from 'axios';
import {GLOBAL_URL} from '../../config/global/Constant';

export const getAllProducts = () => async dispatch => {
  const response = await axios.get(`${GLOBAL_URL}/products`);
  dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
};

export const getProduct = id => async dispatch => {
  const response = await axios.get(`${GLOBAL_URL}/products/${id}`);
  dispatch({type: 'SHOW_PRODUCT_DETAIL', payload: response.data});
};

export const filterProducts = filterBy => {
  return {
    type: 'FILTER_PRODUCTS',
    payload: filterBy,
  };
};

export const sortProducts = sortBy => {
  return {
    type: 'SORT_PRODUCTS',
    payload: sortBy,
  };
};

export const removeDetailedProduct = () => {
  return {
    type: 'REMOVE_DETAILED_PRODUCT',
  };
};

export const showProductDetail = product => {
  return {
    type: 'SHOW_PRODUCT_DETAIL',
    payload: product,
  };
};
