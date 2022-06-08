import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

const Login = (props) => {
  const { show, onClose } = props;
   // Show password function
   const [showPassword, setShowPassword] = useState({ showPassword: false });
   const handleClickShowPassword = () => {
     setShowPassword({
       showPassword: !showPassword.showPassword,
     });
   };
  return (<>
       <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
              <Modal.Title className='fw-bold text-green fs-22'>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className='cmn_form'>
                <Form.Group className="mb-15 mb-md-25" controlId="formGroupEmail">
                  <Form.Label className='fs-18 fw-500 text-green'>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-15 mb-md-20 position-relative" controlId="formGroupPassword">
                  <Form.Label className='fs-18 fw-500 text-green'>Password</Form.Label>
                  <Form.Control type={showPassword.showPassword ? "text" : "password"} placeholder="Password" />
                  <Button
                   onClick={handleClickShowPassword}
                  variant="transparent"
                  className="passwordshow_hide"
                >
                  {showPassword.showPassword ? (
                    <SVG src={require("../../../assets/images/vissible.svg").default} />
                  ) : (
                    <SVG
                      src={require("../../../assets/images/invissible.svg").default}
                    />
                  )}
                </Button>
                </Form.Group>
                <div className="mb-20 mb-md-30 text-center">
                   <div className='fs-16 text-light-green d-flex align-items-center justify-content-center flex-wrap'>Forgot your password? 
                     <Button variant="transparent" onClick={props.handleShowForgotPassword} className="link_txt shadow-none text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Reset password</Button>
                   </div>
                </div>
                <div className="mb-20 mb-md-30 text-center">
                   <Button className='cmn-btn min-w-140px'>Login</Button>
                </div>
                <div className='mb-20 mb-md-30'>
                  <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                     <i className='fa fa-google mr-8'></i>Log in with Google
                  </Link>
                  <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                     <i className='fa fa-facebook mr-8'></i>Log in with Facebook
                  </Link>
                  <Link to="#" className='social_lgn_btn mb-15 mb-md-20 d-flex align-items-center justify-content-center rounded-lg fs-16 bg-light-orange text-green text-decoration-none h-55px'> 
                     <i className='fa fa-envelope mr-8'></i>Log in with Email
                  </Link>
                </div>
                <div className="text-center">
                   <div className='fs-16 text-light-green d-flex align-items-center justify-content-center flex-wrap'>Don't have an account? 
                     <Button variant="transparent" onClick={props.logintoSignup} className="link_txt shadow-none text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Sign up</Button>
                   </div>
                </div>
              </Form>
            </Modal.Body>
      </Modal>
    </>)
}

export default Login