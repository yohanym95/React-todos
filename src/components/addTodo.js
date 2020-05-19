import React, { useState } from 'react'
import '../App.css'
import { Container, Form, Button } from 'react-bootstrap'

const AddTodo = props => {
  const [input, setInput] = useState(null)

  const formHandler = e => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    if (input.length > 3) {
      props.submitHandler(input)
    } else {
    }
  }

  return (
    <>
      <Container>
        <Container>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='text'
                placeholder='Enter Your Todos'
                className='p-4'
                onChange={formHandler}
              />
            </Form.Group>

            <Button
              type='submit'
              className='text-white font-weight-bold lg pl-5 pr-5'
            >
              Add Your Todos
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  )
}

export default AddTodo
