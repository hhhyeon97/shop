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
  // 메인페이지로 이동
  const goToHome = () => {
    navigate('/');
  };

  const search = (event) => {
    // console.log('key press');
    if (event.key === 'Enter') {
      //console.log('we click this key', event.key);
      // 입력한 검색어를 읽어와서 url을 바꿔주자 !
      let keyword = event.target.value;
      // console.log('keyword', keyword);

      navigate(`/?q=${keyword}`);
    }
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
            onKeyPress={(event) => search(event)}
            placeholder="상품을 검색해보아요 : )"
          />
          {/*모든 이벤트 리스너는 이벤트를 매개변수로 넘겨준다.*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
