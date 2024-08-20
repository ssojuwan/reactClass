import React, { useState, useEffect } from 'react';

const celsiusToFahrenheit = (celsius) => {
  // 섭씨온도를 화씨온도로 변환 하는 계산식
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit.toFixed(2); // 소수점 2자리까지 반올림하여 보여줌
};

const calculateBackgroundColor = (value) => {
  // 입력된 온도에 따라 배경색을 calculateBackgroundColor에 저장한다.
  if (value <= 0) {
    return 'blue';
  } else if (value >= 0 && value <= 18) {
    return 'skyblue';
  } else if (value >= 18 && value <= 25) {
    return 'lime';
  } else if (value >= 25 && value <= 30) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Temperature = () => {
  const [celsius, setCelsius] = useState('0');
  const [fahrenheitValue, setFahrenheitValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const fahrenheit = celsiusToFahrenheit(celsius);
    setFahrenheitValue(fahrenheit);
    const color = calculateBackgroundColor(celsius);
    setBackgroundColor(color);
  }, [celsius]);

  return (
    <div style={{ backgroundColor }}>
      <h3 style={{ color: 'white' }}>섭씨를 화씨로 변환</h3>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(parseInt(e.target.value) || '')}
      />
      <span style={{ color: 'white' }}>= {fahrenheitValue}°F</span>
    </div>
  );
};

export default Temperature;
