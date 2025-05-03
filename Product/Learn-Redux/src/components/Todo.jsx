import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTodo,deleteTodo,toggleTodo } from '../action/todoAction'


const Todo = ({todos,addTodo,deleteTodo,toggleTodo}) => {

    const [text,setText] = useState('')

    const handleAdd = ()=>{
        if(text.trim()){
            addTodo(text),
            setText('')
        }
    }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
  });
  
const mapDispatchToProps ={
    addTodo,
    deleteTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
