import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  selectedItem: null,
};

// 이전 문법
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data };
//     case 'GET_PRODUCT_DETAIL_SUCCESS':
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

//export default productReducer;

// redux toolkit 활용
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getProductDetail(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

//console.log('productSlice', productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
