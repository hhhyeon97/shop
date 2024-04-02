function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('test', data);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
    // setProductList(data); // 데이터를 받아와서 productList 상태를 업데이트
  };
}

export const productAction = { getProducts };
