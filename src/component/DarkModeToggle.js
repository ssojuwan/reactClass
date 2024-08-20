import React, { useState } from 'react';
import '../css/DarkModeToggle.css'; // 다크 모드 스타일을 정의한 CSS 파일

const Game = () => {
  const [guess, setGuess] = useState('');
  //1부터 100까지의 랜덤한 정수를 생성한다.
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');
  const [cnt, setCnt] = useState(0);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedGuess = parseInt(guess, 10);
    // 숫자가 아닌 값이 입력됐을 때 실행되는 if문
    if (isNaN(parsedGuess)) {
      setMessage('유효한 숫자를 입력하세요.');
    } else if (parsedGuess < 1 || parsedGuess > 100) {
      setMessage('1부터 100 사이의 숫자를 입력하세요.');
    } else if (parsedGuess === randomNumber) {
      setMessage('정답입니다! 새로운 숫자로 게임을 시작합니다.');
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setGuess('');
      setCnt(0);
    } else if (parsedGuess < randomNumber) {
      setMessage('입력한 숫자가 작습니다. 더 큰 숫자를 입력하세요.');
      setGuess('');
    } else {
      setMessage('입력한 숫자가 큽니다. 더 작은 숫자를 입력하세요.');
      setGuess('');
    }
  };

  const btnClick = () =>{
    setCnt(cnt+1);
  }

  return (
    <div className="game-container">
      <h1>숫자 맞추기 게임</h1>
      <h2>{cnt}번 입력</h2>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={handleChange} />
        <button onClick={btnClick} type="submit">입력</button>
      </form>
      <br/>
    </div>
  );
};
// Darkmode를 실행하는 부분
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <label htmlFor="darkModeToggle">Dark Mode</label>
      <input
        id="darkModeToggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <Game />
    </div>
  );
};

export default DarkModeToggle;
