import React, { useState, useEffect } from 'react';
import '../css/Body.css';
import Todo from './Todo';
import Clock from './Clock';
import Mid from './Mid';
import Temperature from './Temperature';
import DarkModeToggle from './DarkModeToggle';

const Body = ({ id }) => {

  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [border, setBorder] = useState('');
  const [width, setWidth] = useState('200px');
  const [cnt, setCnt] = useState(0);
  const [textColor, setTextColor] = useState('black');
  const [colorOptions, setColorOptions] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBorderChange = (e) => {
    setBorder(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleButtonClick = () => {
    setBackgroundColor(color);
    setColor('');
    setCnt(cnt + 1);
  };

  const rstBackColor = () => {
    setBackgroundColor('');
    setBorder('');
    setWidth('200px');
    setCnt(0);
    setTextColor('black');
  };

  const textBlack = () => {
    setTextColor('black');
  };

  const textWhite = () => {
    setTextColor('white');
  };

  useEffect(() => {
    setTextColor(backgroundColor === 'white' ? 'black' : 'white');
  }, [backgroundColor]);

  const divStyle = {
    backgroundColor,
    width,
    height: '200px',
    border: border || (backgroundColor === 'blue' ? '5px dotted yellow' : '5px dotted blue'),
    color: textColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  };

  const handleColorOptionChange = (e) => {
    setColor(e.target.value);
  };

  const handleAddColor = () => {
    if (color) {
      setColorOptions([...colorOptions, color]);
      setBackgroundColor(color);
      setColor('');
    }
  };

  const deleteBackColor = () => {
    const updatedColorOptions = colorOptions.filter((option) => option !== color);
    setColorOptions(updatedColorOptions);
  };

  return (
    <div className='Body'>
      <br/><br/><br/><br/>
      <Clock/>
      <hr/>
      {/* backColor 부분 컴포넌트  */}
      <p>새로운 색상 추가</p>
      <input type="text" value={color} onChange={handleColorChange} placeholder="색상을 입력하세요" />
      <button onClick={handleAddColor}>추가</button>
      <br />
      <hr />
      <select value={color} onChange={handleColorOptionChange}>
        <option value="">색상을 선택하세요</option>
        {colorOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <button
        style={{ backgroundColor: "#5ceccf", borderRadius: "40%", marginTop: "10px" }}
        onClick={handleButtonClick}
      >
        배경색<br />변경
      </button>
      <button
        style={{ backgroundColor: "#5ceccf", borderRadius: "40%", marginLeft: "10px" }}
        onClick={deleteBackColor}
      >
        배경색<br />삭제
      </button>
      <button
        style={{ backgroundColor: "#5ceccf", borderRadius: "40%", marginLeft: "10px" }}
        onClick={rstBackColor}
      >
        배경색<br />초기화
      </button>
      <br />
      <div>
        <div style={{ width: "50%", float: "left" }}>
          <p style={{ backgroundColor: "#86b4f4", fontWeight: "bold", fontSize: "20px", color: "white" }}>
            border를 지정해주세요
          </p>
          <input
            style={{
              height: "10vh",
              width: "30%",
              border: "5px dotted #c988e9",
              fontSize: "20px",
              textAlign: "center"
            }}
            type="text"
            value={border}
            onChange={handleBorderChange}
            placeholder="ex)5px dotted blue"
          />
        </div>

        <div style={{ width: "50%", float: "right" }}>
          <p style={{ backgroundColor: "#c988e9", fontWeight: "bold", fontSize: "20px", color: "white" }}>
            width를 입력해주세요
          </p>
          <input
            style={{
              height: "10vh",
              width: "30%",
              border: "5px dotted #86b4f4",
              fontSize: "20px",
              textAlign: "center"
            }}
            type="text"
            value={width}
            onChange={handleWidthChange}
            placeholder="ex)200px"
          />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <hr />

      <div className="divColor" id={id} style={divStyle}>
        {backgroundColor && (
          <>
            {id} : {backgroundColor}({cnt}번 클릭)

          </>
        )}
      </div>

      <br />
      <button style={{ backgroundColor: "black", color: "white" }} onClick={textBlack}>
        텍스트 Black
      </button>
      <button style={{ backgroundColor: "white", color: "black" }} onClick={textWhite}>
        텍스트 White
      </button>
      <hr/>
      <Todo/>
      <hr/>
      <Mid/>
      <hr/>
      <Temperature/>
      <br/>
      <DarkModeToggle />
      <br/>
      <hr/>
    </div>
  );
};

export default Body;
