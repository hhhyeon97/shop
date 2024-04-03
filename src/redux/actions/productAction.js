//import { productActions } from '../reducer/productSlice';
// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log('test', data);
//     //dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
//     // setProductList(data); // 데이터를 받아와서 productList 상태를 업데이트
//     dispatch(productActions.getAllProducts({ data }));
//   };
// }

// function getProductDetail(id) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     //console.log('detail page data', data);
//     //setProduct(data);
//     //dispatch({ type: 'GET_PRODUCT_DETAIL_SUCCESS', payload: { data } });
//     dispatch(productActions.getProductDetail({ data }));
//   };
// }

//export const productAction = { getProductDetail };
