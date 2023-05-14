import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
        <Container fluid className='body-bg pt-2'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={12} md={12} lg={6}>
                        <p className='text-center fs-3'>Copyright &copy; 2023 - Designed with Love<span className='text-danger'>&hearts;</span></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  )
}

export default Footer