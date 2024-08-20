import React, { useState, useEffect } from "react";
import '../css/Clock.css'
function Clock() {
  const [clock, setClock] = useState(new Date());
  // useEffect를 사용하여 new Date를 1초마다 받아옴
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='Clock'>
      <h2>현재 시간은 : {clock.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;