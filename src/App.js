import React, { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import AddTodo from './components/addTodo'
import Todo from './components/todo'

function App () {
  const [todo, setTodo] = useState([
    { title: 'Have to finish EA Assignment', id: 1 },
    { title: 'Have to start flutter new project', id: 2 },
    { title: 'Have to create blog app', id: 3 },
    { title: 'There is birthday party in next week', id: 4 }
  ])

  const submitHandler = text => {
    if (text.length > 3) {
      setTodo(prevTodo => {
        return [
          ...prevTodo,
          { title: text, id: Math.floor(Math.random() * 100 + 1) }
        ]
      })
    } else {
    }
  }

  const onDelete = key => {
    console.log(key)
    setTodo(prevTodo => {
      return prevTodo.filter(todo => todo.id !== key)
    })
  }

  return (
    <div className='App'>
      <Container>
        <h1 className='display-1'>Todos</h1>
        <AddTodo submitHandler={submitHandler} />
        <Todo todo={todo} onDelete={onDelete} />
      </Container>
    </div>
  )
}

export default App
