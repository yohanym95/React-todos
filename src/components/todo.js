/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../App.css'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Todos = props => {
  return (
    <>
      <Container className=' pt-2  text-dark '>
        {props.todo.map((todo, id) => (
          <Card className='p-3 m-3 bg-light' key={id}>
            <Row>
              <Col className='col-10'>
                <h4 className='text-justify display-4'>{todo.title}</h4>
              </Col>
              <Col className='col-2'>
                <a
                  className='btn text-danger align-middle'
                  onClick={() => {
                    props.onDelete(todo.id)
                  }}
                >
                  <i className='fas fa-trash-alt' />
                </a>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Todos
