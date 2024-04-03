import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchProductDetail = createAsyncThunk(
  'product/:id',
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  },
);

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

// reducers : 동기적으로 자신의 state를 바꾸는 경우
// extraReducers : 외부로부터 state가 바뀌는 경우(주로 비동기 케이스 처리)
// redux toolkit 활용
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductDetail(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

//console.log('productSlice', productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
