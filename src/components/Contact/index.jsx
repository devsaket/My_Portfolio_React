import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

import {BsChatQuoteFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <Container fluid className='pb-4 body-bg '>
        <Container>
          <Row className='py-4'>
            <Col>
              <p className='fs-2 text-center mt-3'>We love to Talk</p>
              <h1 className='display-1 text-center text-capitalize' style={{ 'font-family': 'Craftsman' }}>Contact Us</h1>
            </Col>
          </Row>
          <Row className='text-center'>
            <Col>
              <BsChatQuoteFill />
            </Col>
            <Col>
              
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Contact