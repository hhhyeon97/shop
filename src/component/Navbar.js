import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
  return (
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon icon={faUser} id="loginIcon" />
          <span id="login">로그인</span>
        </div>
      </div>
      <div className="nav-section">
        <img width={100} src="hnmlogo.png" alt="" />
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
