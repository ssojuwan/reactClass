import React, { useState } from 'react';
import '../css/Header.css';
import Body from './Body';

const Header = ({ isLoggedIn, onLogin, onLogout, id, setId }) => {
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isIdExisting, setIsIdExisting] = useState(false);

  const handleRegister = () => {
    const isExisting = registeredUsers.some((user) => user.id === id);
    if (isExisting) {
      setIsIdExisting(true);
      return;
    }

    const newUser = { id, password };
    setRegisteredUsers([...registeredUsers, newUser]);
    setId('');
    setPassword('');
    setIsRegistering(false);
    setIsIdExisting(false);
    alert('회원 가입이 완료되었습니다!');
  };

  const handleLogin = () => {
    const user = registeredUsers.find((user) => user.id === id && user.password === password);
    if (user) {
      onLogin();
      alert('로그인 성공!');
    } else {
      alert('로그인에 실패하였습니다. \n아이디와 패스워드를 다시 확인해주세요');
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃하시겠습니까?\n확인을 누르면 로그아웃됩니다.');
    if (confirmLogout) {
      onLogout();
      setId('');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (isRegistering) {
        handleRegister();
      } else {
        handleLogin();
      }
    }
  };

  const btnStyle = {
    marginLeft: '10px',
  };

  return (
    <div className="Header">
      <div className="aaa">
        <h3 className="h3">
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="linkStyle">
            REACT (공식문서) Project
          </a>
        </h3>
      </div>
      {/* 로그인이 활성화 됬을시 */}
      {isLoggedIn ? (
        <div className="divHeader">
          {id && <span>안녕하세요, {id}님!</span>}
          <button className='btnLogout' style={btnStyle} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <>
        {/* 로그인 전 초기 header 상태 */}
          <div className="login">
            <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="ID" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD" onKeyPress={handleKeyPress} />
            <button className ="btnLogin"onClick={handleLogin}>로그인</button>
            <button className ="btnRegister" onClick={() => setIsRegistering(true)}>회원 가입</button>
          </div>
          <hr />
        </>
      )}
      {/* 로그인전 body내용 확인 불가능 */}
      {!isLoggedIn && (
        <div>
          <br />
          <h2 className="h2_1">로그인을 해야 확인할 수 있습니다.</h2>
        </div>
      )}
      {/* 로그인 후 body내용 출력 */}
      {isLoggedIn && <Body id={id} />}
      
      {/* 회원가입 팝업 */}
      {isRegistering && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsRegistering(false)}>
              &times;
            </span>
            <h2 style={{ textAlign: 'center' }}>회원 가입</h2>
            <div className="register-form">
              <p>ID</p>
              <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="ID" />
              <p>PASSWORD</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="PASSWORD"
                onKeyDown={handleKeyPress}
              />
              {isIdExisting && <p style={{ color: 'red' }}>이미 존재하는 아이디입니다.</p>}
              <br />
              <button className='btnHandleRegister' onClick={handleRegister}>가입하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
