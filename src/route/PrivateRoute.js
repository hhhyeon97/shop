import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  const handleNavigate = () => {
    alert('로그인 후 이용 가능합니다.');
    return <Navigate to="/login" />;
  };

  return authenticate === true ? <ProductDetail /> : handleNavigate();
};

export default PrivateRoute;
