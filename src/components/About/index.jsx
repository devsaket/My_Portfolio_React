import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import './style.scss'
import Skprofile from '../../assets/img/SKProfilePicture.jpg'

const About = () => {
    return (
        <>
            <Container fluid className='pb-4 body-bg'>
                <Container>
                    <Row className='py-4'>
                        <Col>
                            <p className='fs-2 text-center mt-3'>Full Stack Web Developer, UI/UX Designer & Digital Marketer</p>
                            <h1 className='display-1 text-center text-capitalize' style={{'font-family': 'Craftsman'}}>Inspiration Drives Action</h1>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={12} md={12} lg={5}>
                            <h2 className='fs-2 mt-3 text-decoration-underline'>Biography</h2>
                            <p className='fs-3'>Hi, I'm Saket, a Full Stack Web Developer, UI/UX Designer & Digital Marketer with a passion for creating beautiful,functional, user-centered digital experiences which leads in increase in traffic on your website. With 3+ years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.</p> 
                            <p className='fs-3 my-4'>I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
                            <p className='fs-3'>Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </Col>
                        <Col sm={12} md={12} lg={5} >
                            <div className='me-5 border border-dark border-2 rounded-5 p-4 d-inline-block profilediv'>
                                <img src={Skprofile} alt='Profile' className='w-100 rounded-5 profileimg' />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={2}  className='text-end'>
                            <Row className='d-flex flex-column'>
                                <Col className='my-2'>
                                    <p className='display-1 m-0'>40+</p>
                                    <p className='fs-2 text-capitalize'>Satisfied Clients</p>
                                </Col>
                                <Col className='my-2'>
                                    <p className='display-1 m-0'>50+</p>
                                    <p className='fs-2 text-capitalize'>Projects Completed</p>
                                </Col>
                                <Col className='my-2'>
                                    <p className='display-1 m-0'>4+</p>
                                    <p className='fs-2 text-capitalize'>Years of Experience</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default About