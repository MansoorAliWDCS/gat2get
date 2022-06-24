import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const ContactUs = () => {
  return (<>
      <section className='pt-40 pt-lg-70 pb-40 pb-lg-70'>
        <Container>
            <Row className='flex-column-reverse flex-lg-row'>
                <Col lg={6}>
                    <div className='getContactInfo h-100 pr-lg-100'>
                       <h1 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-15 max-w-400px line-height-11'>We'd Love to hear from you</h1>
                       <p className='fs-18 fs-lg-22'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       <p className='fs-18 fs-lg-22'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       <div className='pt-20 text-center text-lg-start'>
                          <img src={require("../assets/images/contact.svg").default} className='img-fluid'/>
                       </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='getContactForm pl-lg-100 mb-40 mb-lg-0'>
                       <h2 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green pb-10'>Contact US</h2>
                       <p className='fs-16 fs-lg-18 text-green'>Fill a form with the below details in order to contact with the admin</p>
                       <Form className='cmn_form'>
                         <Form.Group className="mb-15 mb-md-25">
                            <Form.Label className='fs-18 fw-500 text-green'>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                         </Form.Group>
                         <Form.Group className="mb-15 mb-md-25">
                            <Form.Label className='fs-18 fw-500 text-green'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Email Address" />
                         </Form.Group>
                         <Form.Group className="mb-15 mb-md-25">
                            <Form.Label className='fs-18 fw-500 text-green'>Phone</Form.Label>
                            <div className='counrty_flag_picker'>
                                <IntlTelInput
                                preferredCountries={['us']}
                                inputClassName="form-control"
                                separateDialCode={true}
                                onPhoneNumberChange={[]}
                                onPhoneNumberBlur={[]}
                                />
                            </div>
                        </Form.Group>
                         <Form.Group className='mb-30'>
                            <Form.Label className="fs-18 fw-500 text-green">Message</Form.Label>
                            <Form.Control className='textarea-h-auto' rows="4" as="textarea" placeholder='Enter Your Message'/>
                         </Form.Group>
                         <Form.Group className="mt-md-40">
                            <Button className='cmn-btn min-w-180px'>Send Message</Button>
                         </Form.Group>
                       </Form>
                    </div>
                </Col>
            </Row>
        </Container>

      </section>
    </>)
}

export default ContactUs