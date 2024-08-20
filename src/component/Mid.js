import Box from './Box';
import React, { useState, useEffect } from 'react';

function Mid() {
  const [buttonText, setButtonText] = useState('홀수 0');
  const [num, setNum] = useState(0);
  const [boxColor, setBoxColor] = useState('cyan');
  const [textColor, setTextColor] = useState('white');
  const [myName, setMyname] = useState("서주완");

  const rstBtn = () => {
    setBoxColor('white');
    setTextColor('green');
    setMyname("서주완");
    setNum(0); // count 리셋
  };

  document.title = buttonText;

  useEffect(() => {
    const h1 = document.getElementById('h1');

    if (num % 2 === 0) {
      setButtonText(num + '번 클릭');
      h1.style.fontSize = '20px';
      setBoxColor('silver'); // Box 컴포넌트의 배경색을 'cyan'으로 설정
      setTextColor('blue');
      setMyname("SeoJuwan");

    } else {
      setButtonText(num + '번 클릭');
      h1.style.fontSize = '40px';
      setBoxColor('pink'); // Box 컴포넌트의 배경색을 'pink'으로 설정
      setTextColor('red');
      setMyname("서 주 완");
    }
  }, [num]);

  return (
    <div className="Mid">
      <button onClick={() => setNum(num + 1)}>{buttonText}</button>
      <button onClick={rstBtn}>count 리셋</button>
      <h1 id="h1">{num}번 클릭!</h1>
      <Box name={myName} num={num} boxColor={boxColor} textColor={textColor} /> {/* boxColor prop 전달 */}
    </div>
  );
}

export default Mid;
