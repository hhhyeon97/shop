import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Footer from '../component/Footer';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    setLoading(true); // 로딩 상태 설정
    let searchQuery = query.get('q') || '';
    //console.log('쿼리값은?', searchQuery);
    let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data); // 데이터를 받아와서 productList 상태를 업데이트
    //console.log('data', data);
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
            {query && (
              <p id="search-text">
                <span id="color-text">{productList.length}</span>개의 검색결과가
                있습니다.
              </p>
            )}
            <Row className="justify-content-center">
              {productList.map((menu, index) => (
                <Col lg={3} key={index} className="my-3 product-col">
                  <ProductCard item={menu} />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <h4 className="no-result">일치하는 검색어가 없습니다.</h4>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default ProductAll;
