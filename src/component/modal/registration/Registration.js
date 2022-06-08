import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


const Registration = (props) => {
  const { show, onClose } = props;

  // Show password function
  const [showPassword1, setShowPassword1] = useState({
    showPassword1: false,
  });
  const [showPassword, setShowPassword] = useState({
  showPassword: false,
  });
  const handleClickShowPassword = () => {
      setShowPassword({
      showPassword:!showPassword.showPassword
      })
  };
  const handleClickShowPassword1 = () => {
      setShowPassword1({
      showPassword1:!showPassword1.showPassword1
      })
  };

  return (<>
     <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
              <Modal.Title className='fw-bold text-green fs-22'>Please create an account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className='cmn_form'>
                <Row>
                  <Col md={6}>
                    <Form.Group  className="mb-15 mb-md-25">
                      <Form.Label className='fs-18 fw-500 text-green'>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your First Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-15 mb-md-25">
                      <Form.Label className='fs-18 fw-500 text-green'>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Last Name" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
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
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-15 mb-md-20 position-relative">
                      <Form.Label className='fs-18 fw-500 text-green'>New Password</Form.Label>
                      <Form.Control type={showPassword.showPassword ? "text" : "password"} placeholder="Password" />
                      <Button
                      onClick={handleClickShowPassword}
                      variant="transparent"
                      className="passwordshow_hide">
                      {showPassword.showPassword ? <SVG src={require("../../../assets/images/vissible.svg").default} /> : <SVG src={require("../../../assets/images/invissible.svg").default} />}
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-15 mb-md-20 position-relative">
                      <Form.Label className='fs-18 fw-500 text-green'>Confirm Password</Form.Label>
                      <Form.Control type={showPassword1.showPassword1 ? "text" : "password"} placeholder="Password" />
                      <Button
                      onClick={handleClickShowPassword1}
                      variant="transparent"
                      className="passwordshow_hide">
                      {showPassword1.showPassword1 ? <SVG src={require("../../../assets/images/vissible.svg").default} /> : <SVG src={require("../../../assets/images/invissible.svg").default} />}
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-15 mb-md-25" controlId="formBasicCheckbox">
                      <Form.Check className='custm_checkbx' type="checkbox" label="Agree to the cancellation policy & house/office rules" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-5 mt-md-10 mb-20 mb-md-30 text-center">
                   <Button className='cmn-btn min-w-140px'>Create an Account</Button>
                </div>
                <div className="text-center max-w-350px mx-auto mb-20">
                   <div className='fs-16 text-light-green'>By providing your email address, you agree to our 
                   <Link to="#" className="link_txt text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Privacy Policy </Link>
                     and 
                   <Link to="#" className="link_txt text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Terms of Service</Link>
                   </div>
                </div>
              </Form>
            </Modal.Body>
      </Modal>
  </>)
}

export default Registration