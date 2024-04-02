import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Footer from '../component/Footer';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // 상품보여주기 함수
  const getProducts = () => {
    setLoading(true); // 로딩 상태 설정
    let searchQuery = query.get('q') || '';
    dispatch(productAction.getProducts(searchQuery));
    setLoading(false); // 로딩 상태 해제
  };

  // useEffect 의존성배열에 값이 없으면
  // 앱 시작 후 렌더 후에 딱 한 번만 호출된다 !
  // - > query 값이 바뀔 때마다 getProducts함수를 호출해주어야 함
  // [] - > [query]  주시할 값인 query를 넣어주면 query값이 바뀔 때마다
  // useEffect가 호출된다 !

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        {loading ? (
          <p className="loading-wrap">Loading...</p>
        ) : productList.length ? (
          <div>
            <p id="search-text">
              Total<span id="color-text"> {productList.length} </span>Products
            </p>
            <Row className="justify-content-center">
              {productList.map((menu, index) => (
                <Col lg={3} key={index} className="my-3 product-col">
                  <ProductCard item={menu} />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <h4 className="no-result">일치하는 상품이 없습니다.</h4>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default ProductAll;
