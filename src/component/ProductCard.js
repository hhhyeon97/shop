import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item?.img} alt="" width={250} />
      <div>{item?.choice === true ? 'concious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
