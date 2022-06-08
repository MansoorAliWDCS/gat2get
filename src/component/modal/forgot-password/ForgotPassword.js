import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";

const ForgotPassword = (props) => {
    const { show, onClose } = props;
    return (<>
        <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
            <Modal.Title className='fw-bold text-green fs-22'>Password Reset</Modal.Title>
            </Modal.Header>
            <div className='fs-16 text-green text-center max-w-325px mx-auto pt-md-20 pb-10 pb-md-30'>Enter the email address for your account and we'll send a link to reset your password.</div>
            <Modal.Body>
            <Form className='cmn_form'>
                <Form.Group className="mb-15 mb-md-25" controlId="formGroupEmail">
                <Form.Label className='fs-18 fw-500 text-green'>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <div className="mb-20 mb-md-20 text-center">
                <Button className='cmn-btn min-w-140px'>Reset Password</Button>
                </div>
                <div className="text-center">
                <Button variant="transparent" onClick={props.backtoLogin} className="link_txt shadow-none text-decoration-underline pl-6 p-0 text-green orange-hover transition-3">Back to Login</Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
    </>)
    }

export default ForgotPassword