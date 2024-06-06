import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Search = () => {
  return (
    <Container>
        <Row>
            <Col lg={6} md={6} className='mt-4 '>
            <img src={require('../Banner/banner6.jpg')} alt="" className='img-fluid'/>
            </Col>
            <Col lg={6} md={6} className='mt-4 text-center'>
            <h3>
            Food is the language of love, a universal expression of care and connection.
             Each meal shared is a journey through flavors, 
            bringing hearts closer together. In every bite, we taste the essence of life
            </h3>
            <h3 style={{color:'tomato'}}>Go search for food and enjoy it!!!</h3>
            </Col>

        </Row>
        </Container>
  )
}

export default Search