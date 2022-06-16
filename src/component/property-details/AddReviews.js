import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Rating from "react-rating";
import SVG from "react-inlinesvg";
const AddReviews = (props) =>     {
    const { show, onClose } = props;
    
  return (<>
     <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
              <Modal.Title className='fw-bold text-green fs-22'>Add Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form className='cmn_form'>
                 <Form.Group className='text-center mb-30'>
                 <Rating
                    placeholderRating={2}
                    emptySymbol={
                    <SVG
                    className="starIcon"
                    src={require("../../assets/images/star.svg").default}
                    />
                    }
                    placeholderSymbol={
                    <SVG
                    className="fill-green starIcon"
                    src={require("../../assets/images/star.svg").default}
                    />
                    }
                    fullSymbol={
                    <SVG
                    className="fill-green starIcon"
                    src={require("../../assets/images/star.svg").default}
                    />
                    }
                   />
                 </Form.Group>
                 <Form.Group className='mb-30'>
                    <Form.Label className="fs-18 fw-500 text-green">Review</Form.Label>
                    <Form.Control className='textarea-h-auto' rows="4" as="textarea" placeholder='Enter your reviews'/>
                 </Form.Group>
                 <Form.Group className='text-center'>
                    <Button className='cmn-btn min-w-140px'>Submit</Button>
                 </Form.Group>
               </Form>

            </Modal.Body>
      </Modal>
    
    </>)
}

export default AddReviews