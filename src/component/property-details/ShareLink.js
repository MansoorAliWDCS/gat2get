import React, {useState, useRef} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ShareLink = (props) =>     {
    const { show, onClose } = props;
    
    //copylink
    const [copied, setCopied] = useState(false);
    const textBoxRef = useRef(null);
    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      textBoxRef.current.select();
      //document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }
  return (<>
     <Modal show={show} onHide={onClose} className="common_modal" centered>
            <Modal.Header className='justify-content-center border-0' closeButton>
              <Modal.Title className='fw-bold text-green fs-22'>Share Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-20 mb-md-35 d-flex gat_copy_link" controlId="formGroupEmail">
                  <Form.Control type="text" ref={textBoxRef} value="https://www.gat2get.com/dummy..." readOnly/>
                  <Button className='primary_btn min-w-95px min-w-sm-160px' onClick={copy}>{!copied ? "Copy link" : "Copied!"}</Button>
                </Form.Group>
                <div className='social_icn_list'>
                   <div className='text-center position-relative mb-30 border_btm_title'>
                      <div className='border_inner_titleText position-relative fs-16 fw-500 text-green d-inline-block px-10 bg-theme-orange'>Or you can share via</div>
                   </div>
                   <ul className='list-unstyled d-flex align-items-center m-0 justify-content-center'>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-linkedin"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </Modal.Body>
      </Modal>
    
    </>)
}

export default ShareLink