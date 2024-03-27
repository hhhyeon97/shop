import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // 메뉴바 리스트
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  // 로그인 페이지로 이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon icon={faUser} id="loginIcon" />
          <span id="login" onClick={goToLogin}>
            로그인
          </span>
        </div>
      </div>
      <div className="nav-section">
        <img
          id="logo"
          width={100}
          src="hnmlogo.png"
          alt=""
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} id="searchIcon" />
          <input
            id="searchInput"
            type="text"
            placeholder="상품을 검색해보아요 : )"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
