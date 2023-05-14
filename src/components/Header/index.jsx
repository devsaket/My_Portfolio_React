import React from 'react'

import {BsBoxArrowUpRight} from 'react-icons/bs'
import { Button, Col, Container, Row } from 'react-bootstrap'

import './style.scss'
import Mypic from '../../assets/img/myphoto.png'


const Header = () => {
  return (
    <>
        <Container fluid className='body-bg'>
            <Container>
                <Row className='g-0 d-flex justify-content-center align-items-center'>
                    <Col sm={12} md={12} lg={6}>
                        <img src={Mypic} alt='My Profile' className='w-100 mypic' />
                    </Col>
                    <Col sm={12} md={12} lg={6} >
                        <h1 className='display-2 text-capitalize' style={{'font-family': 'Craftsman'}}>Bringing your vision <br />to life with <br />design and code</h1>
                        <h2 className='my-5 fw-lighter'>As a skilled Full Stack Web Developer, UI/UX Designer & Digital Marketer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</h2>
                        <Button variant="dark" size='lg' className='px-4 fs-3 resumebtn'>Resume &nbsp;<BsBoxArrowUpRight /></Button>
                        <Button as='a' href="/" className='btn btn-outline-light bg-transparent fs-2 ms-3 px-4 text-dark resumebtn'>Contact</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  )
}

export default Header