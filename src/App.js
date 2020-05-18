import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import AddTodo from './components/addTodo'

function App() {
  return (
    <div className="App">
       <Container>
         <h1 className='display-1'>Todos</h1>
         <AddTodo />
       </Container>
    </div>
  );
}

export default App;
