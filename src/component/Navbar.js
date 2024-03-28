import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [showMenu, setShowMenu] = useState(false); // 사이드바 보이기/숨기기 상태 추가
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

  // 로그아웃 처리
  const handleLogout = () => {
    setAuthenticate(false);
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
    <div>
      <div className="nav-section">
        <img
          id="logo"
          width={100}
          src="hnmlogo.png"
          alt=""
          onClick={goToHome}
        />
        <div className="right-sec">
          {authenticate ? (
            <FontAwesomeIcon icon={solidUser} className="log-con" />
          ) : (
            <FontAwesomeIcon icon={regularUser} className="log-con" />
          )}
          <span id="login" onClick={authenticate ? handleLogout : goToLogin}>
            {authenticate === false ? '로그인' : '로그아웃'}
          </span>
        </div>
        {/* 아이콘 클릭 시 showMenu 상태 토글 */}
        <FontAwesomeIcon
          icon={showMenu ? faTimes : faBars}
          className={showMenu ? 'close-icon' : 'menu-icon'}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/* showMenu 상태에 따라 사이드바 메뉴를 보여주거나 숨김 */}
      {showMenu && (
        <div className="side-menu-area">
          <ul className="side-menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}

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

      <div className="menu-area">
        <ul id="menu-list" className="side-menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
