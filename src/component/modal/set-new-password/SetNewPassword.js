import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import SVG from 'react-inlinesvg';

const SetNewPassword = (props) => {
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
            <Modal.Title className='fw-bold text-green fs-22'>Set New Password</Modal.Title>
            </Modal.Header>
            <div className='fs-16 text-green text-center max-w-500px mx-auto pt-md-20 pb-10 pb-md-30'>Enter the email address for your account and we'll send a link to reset your password.</div>
            <Modal.Body>
            <Form className='cmn_form'>
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

                <div className="mb-10 mb-md-20 text-center">
                  <Button className='cmn-btn min-w-140px'>Reset Password</Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
    </>)
    }

export default SetNewPassword