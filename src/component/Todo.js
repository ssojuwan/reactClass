import React, { useState } from 'react';
import TodoBoard from './TodoBoard';
import '../css/Todo.css';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(1);
  const [bodyColor, setBodyColor] = useState('white');
  const [bodyTextColor, setBodyTextColor] = useState('black');

  const addItem = () => {
    setTodoList([...todoList, "[" + count + "번째 게시글]" + inputValue]);
    setInputValue('');
    setCount(count + 1);
  };

  const resetItem = () => {
    const confirmRstItem = window.confirm('게시글만 없앨까요?');
    if (confirmRstItem) {
      alert("완료되었습니다");
      setTodoList([]);
    }else{
      alert("취소되었습니다");
    }
    
  };

  const deleteItem = (index) => {
    const updatedList = todoList.filter((item, i) => i !== index);
    setTodoList(updatedList);
  };

  const resetCount = () => {
    const cofirmRstCnt = window.confirm('진짜 초기화해요?');
    if (cofirmRstCnt) {
      alert("초기화 완료");
      setCount(1);  
    setTodoList([]);
    setBodyColor('white');
    setBodyTextColor('black');
    }else{
      alert("초기화 취소");
    }
    
  };
 
  const changeBodyColor = (color) => {
    setBodyColor(color);
    setBodyTextColor('black');
  };


  const backRan = () => {
    const colors = ['green', 'pink', 'blue', 'red', 'white'];
    const colorIdx = parseInt(Math.random() * colors.length);
    setBodyColor(colors[colorIdx]);
    setBodyTextColor(colors[colorIdx] === 'white' ? 'black' : 'white');
  };

  return (
    <div className="todo" style={{ backgroundColor: bodyColor, color: bodyTextColor }}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>할 일 추가</button>
      <button onClick={resetItem}>전체 삭제</button>
      <button onClick={resetCount}>완전 삭제</button>
      <TodoBoard todoList={todoList} deleteItem={deleteItem} />
      <button onClick={() => changeBodyColor('cyan')}>Cyan</button>
      <button onClick={() => changeBodyColor('gold')}>Gold</button>
      <button onClick={backRan}>Random</button>
      <button onClick={() => changeBodyColor('white')}>배경 초기화</button>
    </div>
  );
}

export default Todo;
