import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'

import WebDesign from '../../assets/img/WebsiteDesigning.png'
import WebDev from '../../assets/img/WebDev.png'
import Ecommerce from '../../assets/img/ecommerce.png'
import WebApp from '../../assets/img/FullStackDevelopment.png'
import FrontEndDev from '../../assets/img/FrontendDevelopment.png'
import BackEndDev from '../../assets/img/BackendDevelopment.png'
import WordpressDesigner from '../../assets/img/WordpressDesigner.png'
import WebsiteMaintenance from '../../assets/img/websiteMaintenance.png'
import DM from '../../assets/img/DigitalMarketing.png'
import SEO from '../../assets/img/seo.png'
import SMM from '../../assets/img/social-media.png'
import ORM from '../../assets/img/orm.png'
import GD from '../../assets/img/GraphicDesigning.png'
import LD from '../../assets/img/logodesign.png'
import UI from '../../assets/img/uiuxDesigning.png'
import TT from '../../assets/img/training.png'

import './style.scss'


const Services = () => {
    return (
        <>
            <Container fluid className='pb-4 body-bg '>
                <Container>
                    <Row className='py-4'>
                        <Col>
                            <p className='fs-2 text-center mt-3'>How Can I Help You...</p>
                            <h1 className='display-1 text-center text-capitalize' style={{ 'font-family': 'Craftsman' }}>Quality is my first priority</h1>
                            <p className='fs-2 text-center mt-5'>I always keep up with the most recent industry developments, which provide<br />the finest and readily extendable products to clients across the globe.<br />I provide a variety of products or services, from developing advanced projects to designing unique websites.</p>
                        </Col>
                    </Row>

                    {/* 1st Row */}
                    <Row className='g-0'>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardwebdesign servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={WebDesign} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Website Designing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardwebdev servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={WebDev} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Website Development</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardwebapp servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={WebApp} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Web App Development</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardecomm servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={Ecommerce} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>e-Commerce Solution</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* 2nd Row */}
                    <Row className='g-0'>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardfed servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={FrontEndDev} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Front End Development</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardbed servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={BackEndDev} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Back End Development</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardwd servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={WordpressDesigner} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>WordPress Designer</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardwm servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={WebsiteMaintenance} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Website Maintenance</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* 3rd Row */}
                    <Row className='g-0'>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 carddm servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={DM} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Digital Marketing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardseo servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={SEO} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Search Engine Optimization</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardsmm servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={SMM} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Social Media Marketing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardorm servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={ORM} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Online Reputation Management</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* 4th Row */}
                    <Row className='g-0'>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardgd servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={GD} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Graphic Designing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardld servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={LD} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Logo Designing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardui servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={UI} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>UI / UX Designing</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <Card className='text-center text-light py-4 rounded-0 border-0 cardtt servicecard'>
                                <div className="layer"></div>
                                <Card.Img variant="top" src={TT} className='w-25 mx-auto cardbody' />
                                <Card.Body className='cardbody'>
                                    <Card.Title className='fs-2 cardhead'>Technical Training</Card.Title>
                                    <Card.Text className='fs-4 lh-1 fw-lighter cardpara'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='p-0 cardbody'>
                                    <Card.Link href="/contact" className='fs-4 btn bg-light text-dark px-4 border border-1 cardpara'>Get in Touch</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Services