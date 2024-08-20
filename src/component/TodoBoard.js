import React from 'react';
import TodoItem from './TodoItem';
const TodoBoard = (props) => {
 
  return (
    <div>
      <h1>오늘의 할 일</h1>
      <ol>
      {props.todoList.map((item, index) => (
        <li key={index}>
        <TodoItem key={index} item={item} deleteItem={() => props.deleteItem(index)} index={index}/>
        
        </li>
      ))}
      </ol>
    </div>
  )
}

export default TodoBoard