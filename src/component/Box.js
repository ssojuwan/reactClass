import React from 'react';

// Mid컴포넌트에 연결되는 컴포넌트
const Box = ({ name, num, boxColor ,textColor}) => {
  
  const boxStyle = {
    color: textColor,
    backgroundColor: boxColor,
    height: '100px',
    width: '300px',
    border: '1px solid black',
  };

  return (
    <div className="box" style={boxStyle}>
      <p>안녕하세요?</p>
      <p>
        {name} : {num}번 클릭되었습니다.!
      </p>
    </div>
  );
};

export default Box;
