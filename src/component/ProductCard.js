import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt="" width={250} id="productImg" />
      <div>{item?.choice === true ? 'concious choice' : ''}</div>
      <div id="productName">{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
