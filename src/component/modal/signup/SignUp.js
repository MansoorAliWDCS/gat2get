import React from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
 const { show, onClose } = props;
  return (<>
      <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
              <Modal.Title className='fw-bold text-green fs-22'>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className='cmn_form'>
                <Form.Group className="mb-15 mb-md-25" controlId="formGroupEmail">
                  <Form.Label className='fs-18 fw-500 text-green'>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <div className="mb-20 mb-md-30 text-center">
                   <Button className='cmn-btn min-w-180px'>Continue</Button>
                </div>
                <div className='mb-10'>
                 <div className='text-center fs-16 text-green mb-20 mb-md-30'>or continue with</div>
                  <Row>
                      <Col md={6}>
                        <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                            <i className='fa fa-google mr-8'></i>Google
                        </Link>
                      </Col>
                      <Col md={6}>
                        <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                            <i className='fa fa-facebook mr-8'></i>Facebook
                        </Link>
                      </Col>
                      <Col md={12}>
                        <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                            <i className='fa fa-envelope mr-8'></i>Email
                        </Link>
                      </Col>
                  </Row>
                </div>
                <div className="text-center max-w-350px mx-auto mb-20">
                   <div className='fs-16 text-light-green'>By providing your email address, you agree to our 
                   <Link to="#" className="link_txt text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Privacy Policy </Link>
                     and 
                   <Link to="#" className="link_txt text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Terms of Service</Link>
                   </div>
                </div>
                <div className="text-center">
                   <div className='fs-16 text-light-green d-flex align-items-center justify-content-center flex-wrap'>Already have an account? 
                     <Button variant="transparent" onClick={props.signuptoLogin} className="link_txt shadow-none text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Login</Button>
                   </div>
                </div>
              </Form>
            </Modal.Body>
      </Modal>
    </>)
}

export default SignUp