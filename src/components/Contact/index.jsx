import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { BsChatQuoteFill } from 'react-icons/bs'
import { MdCall, MdMail } from 'react-icons/md'

import './style.scss'

const Contact = () => {
  const intialValues = { firstName: "", lastName: "", email: "", contact: "", service: "", message: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesObj = [
    { name: "Website_Design_Development", serviceName: "Website Design & Development" },
    { name: "Application_Development", serviceName: "Application Development" },
    { name: "eCommerce_Website_Development", serviceName: "eCommerce Website Development" },
    { name: "Wordpress_Design", serviceName: "Wordpress Design" },
    { name: "UI_UX_Designing", serviceName: "UI/UX Designing" },
    { name: "Digital_Marketing", serviceName: "Digital Marketing" },
    { name: "SEO_Internet_Marketing", serviceName: "SEO | Internet Marketing" },
    { name: "Social_Media_Marketing", serviceName: "Social Media Marketing" },
    { name: "Logo_Designing", serviceName: "Logo Designing" },
    { name: "Graphic_Designing", serviceName: "Graphic Designing" },
    { name: "Technical_Training", serviceName: "Technical Training" },
    { name: "Others", serviceName: "Others" },
  ]

  const submit = () => {
    console.log(formValues);



  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    const firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    const lastNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const contactRegex = /^[0]?[6789]\d{9}$/

    if (!values.firstName) {
      errors.firstName = "First Name cannot be blank";
    } else if (values.firstName.length < 1) {
      errors.firstName = "First Name must be more than 1 character";
    } else if (!firstNameRegex.test(values.firstName)) {
      errors.email = "Invalid First Name format";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name cannot be blank";
    } else if (values.lastName.length < 1) {
      errors.lastName = "Last Name must be more than 1 character";
    } else if (!lastNameRegex.test(values.lastName)) {
      errors.email = "Invalid Last Name format";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.contact) {
      errors.contact = "Contact No. cannot be blank";
    } else if (values.contact.length < 10) {
      errors.contact = "Contact No. must be of 10 characters";
    } else if (!contactRegex.test(values.contact)) {
      errors.email = "Invalid Contact No. format";
    }

    return errors;
  };


  return (
    <>
      <Container fluid className='body-bg '>
        <Container>
          <Row className='py-4'>
            <Col>
              <p className='fs-2 text-center mt-3 my-0'>We love to Talk</p>
              <h1 className='display-1 text-center text-capitalize' style={{ fontFamily: 'Craftsman' }}>Contact Us</h1>
            </Col>
          </Row>
          <Row className='text-center my-4 d-flex justify-content-center'>
            <Col md="2" className="text-center py-4 pt-5 border border-1 contact-card">
              <span className='p-4 bg-danger text-light rounded-circle fs-3'><BsChatQuoteFill /></span>
              <h2 className='mt-4 fs-4 fw-light'>Let's &nbsp;Chat</h2>
              <p>+91-7404302063</p>
              <a href="https://wa.me/+917404302063" className='text-danger text-decoration-none fs-4'>Whatsapp</a>
            </Col>
            <Col md="2" className="text-center py-4 pt-5 border border-1 mx-2 contact-card">
              <span className='p-4 bg-danger text-light rounded-circle fs-3'><MdCall /></span>
              <h2 className='mt-4 fs-4 fw-light'>Let's &nbsp;Talk</h2>
              <p>+91-7404302063</p>
              <a href="tel:+917404302063" className='text-danger text-decoration-none fs-4'>Call Me</a>
            </Col>
            <Col md="2" className="text-center py-4 pt-5 border border-1 contact-card">
              <span className='p-4 bg-danger text-light rounded-circle fs-3'><MdMail /></span>
              <h3 className='mt-4 fs-4 fw-light mb-0'>e-Mail &nbsp;Me</h3>
              <p className='fs-4'>dmsaketk@gmail.com</p>
              <a href="mail:dmsaketk@gmail.com" className='text-danger text-decoration-none fs-4'>Send e-Mail</a>
            </Col>
          </Row>
          <Row className='mt-5 p-5 pb-0'>
            <Col md="6" sm="12">
              <h1 className='display-1 text-justify'>Because interactions <br />make things simpler.<br />I'd love to tell more<br />about myself and <br />hear more from you. </h1>
            </Col>
            <Col md="6" sm="12" className='bg-white p-5'>
              <p className='fs-3 text-center mt-3'>Fill out the form & I'll be in touch soon!</p>
              <hr />
              <Form onSubmit={handleSubmit} noValidate>
                <div className='d-flex'>
                  <Form.Group className="mb-3 w-50 me-2" controlId="addCustomer.ControlInput1">
                    <Form.Label className='fs-4'>FirstName</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="James" value={formValues.firstName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                    {formErrors.firstName && (<span className="error text-danger">{formErrors.firstName}</span>)}
                  </Form.Group>

                  <Form.Group className="mb-3 w-50" controlId="addCustomer.ControlInput2">
                    <Form.Label className='fs-4'>LastName</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Bond" value={formValues.lastName} onChange={handleChange} className={formErrors.lastName && "input-error"} />
                    {formErrors.lastName && (<span className="error text-danger">{formErrors.lastName}</span>)}
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="addCustomer.ControlInput3">
                  <Form.Label className='fs-4'>Email Address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                  {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="addCustomer.ControlInput4">
                  <Form.Label className='fs-4'>Contact</Form.Label>
                  <Form.Control type="text" name="contact" placeholder="9874563210" value={formValues.contact} onChange={handleChange} className={formErrors.contact && "input-error"} />
                  {formErrors.contact && (<span className="error text-danger">{formErrors.contact}</span>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="addCustomer.ControlInput5">
                  <Form.Label className='fs-4'>Select Service</Form.Label>
                  <Form.Select name="service" value={formValues.service} onChange={handleChange} className={formErrors.service && "input-error"}>
                    <option>Services Interested</option>
                    {
                      servicesObj.map((i) => {
                        return (
                          <>
                            <option value={i.name}>{i.serviceName}</option>
                          </>
                        );
                      })
                    }
                  </Form.Select>
                  {formErrors.service && (<span className="error text-danger">{formErrors.service}</span>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="addCustomer.ControlInput6">
                  <Form.Label className='fs-4'>Describe Your Project</Form.Label>
                  <Form.Control as="textarea" name="message" rows="5" placeholder="Place Your Message Here . . ." value={formValues.message} onChange={handleChange} className={formErrors.message && "input-error"} />
                  {formErrors.message && (<span className="error text-danger">{formErrors.message}</span>)}
                </Form.Group>
                <Form.Group className="mb-3 text-end">
                  <Button type="submit" className='btn btn-lg px-5'>Send Message</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Contact