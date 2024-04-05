import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import { authenticateAction } from '../redux/actions/authenticateAction';
import { logoutSuccess } from '../redux/reducer/authenticateSlice';
const Navbar = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
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
    //dispatch(authenticateAction.logout());
    dispatch(logoutSuccess());
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
            {authenticate ? '로그아웃' : '로그인'}
          </span>
        </div>
        {/* 아이콘 클릭 시 showMenu 상태 토글 */}
        <FontAwesomeIcon
          icon={showMenu ? faTimes : faBars}
          className={showMenu ? 'close-icon' : 'menu-icon'}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/*사이드 메뉴바에도 showMenu 상태에 따라 .active 클래스 추가/제거 */}
      <div className={`side-menu-area ${showMenu ? 'active' : ''}`}>
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

      <div className="search-area">
        <FontAwesomeIcon icon={faSearch} id="searchIcon" />
        <input
          id="searchInput"
          type="text"
          onKeyPress={(event) => search(event)}
          placeholder="제품 검색"
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
