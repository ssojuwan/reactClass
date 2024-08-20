import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todoItem'>
      {props.item}
      <hr className='hr'/>
      <button onClick={props.deleteItem}>삭제</button>
    </div>
  )
}

export default TodoItem