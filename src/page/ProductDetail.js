import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  //api 데이터를 state에 담기
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hhhyeon97/shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('detail page data', data);
    setProduct(data);
  };
  // api호출은 항상 useEffect에서 해주기
  useEffect(() => {
    getProductDetail();
  }, []);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Row className="my-5 detail-mobile">
        <Col className="product-img">
          <img src={product?.img} width="300" alt="" />
        </Col>
        <Col>
          <div className="mb-1 pro-title">{product?.title}</div>
          <div className="mb-3 new-text1">
            <span className="emp1">
              {product?.choice === true ? 'Concious choice' : ''}
            </span>
            <span className="emp2">{product?.new === true ? 'New' : ''}</span>
            {/* {product?.new === true && 'New'} */}
          </div>
          <div className="mb-3">{product?.price.toLocaleString('ko-KR')}원</div>
          <div className="mb-3">
            {product?.size.map((size, index) => (
              <Button
                key={index}
                variant={selectedSize === size ? 'dark' : 'outline-dark'}
                className="mx-2"
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </Button>
            ))}
          </div>
          <div>
            <Button variant="dark" className="buy-btn">
              구매하기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
