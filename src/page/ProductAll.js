import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data); // 데이터를 받아와서 productList 상태를 업데이트
    //console.log('data', data);
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
        <Row>
          {productList.map((menu, index) => (
            <Col lg={3} key={index} className="my-3">
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
