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
      <div className="cho-new-area">
        <span className="choice-text">
          {item?.choice === true ? 'Concious choice' : ''}
        </span>
        <span className="new-text">{item?.new === true ? '신제품' : ''}</span>
      </div>
      <div id="productName">{item?.title}</div>
      <div>{item?.price.toLocaleString('ko-KR')}원</div>
    </div>
  );
};

export default ProductCard;
