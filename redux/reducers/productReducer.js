const intialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  loading: true,
};

const productDetailInitialState = {
  loading: true,
  detail: {},
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      const cats = action.payload
        .map(item => item.category)
        .filter((item, index, arr) => arr.indexOf(item) === index);
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        categories: cats,
        loading: false,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case 'SET_CATEGORIES':
      return {...state, categories: action.payload};
    case 'FILTER_PRODUCTS':
      if (action.payload === 'Filter') {
        return {...state, products: state.filteredProducts};
      } else {
        const prods = state.filteredProducts.filter(
          item => item.category === action.payload,
        );
        return {...state, products: prods};
      }
    case 'SORT_PRODUCTS':
      if (action.payload === 'desc') {
        const prods = state.products.sort((a, b) => b.price - a.price);
        return {...state, products: prods};
      } else if (action.payload === 'asc') {
        const prods = state.products.sort((a, b) => a.price - b.price);
        return {...state, products: prods};
      } else {
        return {...state};
      }
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = productDetailInitialState,
  action,
) => {
  switch (action.type) {
    case 'SHOW_PRODUCT_DETAIL':
      return {...state, detail: action.payload, loading: false};
    case 'REMOVE_DETAILED_PRODUCT':
      return {...state, loading: true};
    default:
      return state;
  }
};
