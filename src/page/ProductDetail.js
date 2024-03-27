import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  //api 데이터를 state에 담기
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('detail page data', data);
    setProduct(data);
  };
  // api호출은 항상 useEffect에서 해주기
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} width="300" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price.toLocaleString('ko-KR')}원</div>
          <div>
            <Button variant="dark">구매하기</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
