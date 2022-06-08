import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import OTPInput from "react-otp-input";

const Verification = (props) => {
    const [OTP, setOTP] = useState("");

    const { show, onClose } = props;
    return (<>
        <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
            <Modal.Title className='fw-bold text-green fs-22'>Verification</Modal.Title>
            </Modal.Header>
            <div className='fs-16 text-green text-center max-w-500px mx-auto pt-md-20 pb-10 pb-md-30'>We have sent the verification code on <span className='fw-bold'>contact@company.com</span>. Please check and enter below.</div>
            <Modal.Body>
            <Form className='cmn_form'>
                <Form.Group className="mb-20 mb-md-30 max-w-500px mx-auto" controlId="formGroupVarification">
                    <Form.Label className='fs-18 fw-500 text-green'>Code</Form.Label>
                    <div className="d-flex verification_input">
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            numInputs={6}
                            isInputNum
                            inputStyle="form-control"
                        />
                    </div>
                </Form.Group>
                <div className="mb-10 mb-md-20 text-center">
                  <Button className='cmn-btn min-w-140px'>Verify Code</Button>
                </div>
                <div className="text-center">
                <Button variant="transparent" onClick={props.backtoSignup} className="link_txt shadow-none text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Back to Login</Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
    </>)
    }

export default Verification