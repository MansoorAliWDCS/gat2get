import React, {useState} from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Payment = () => {
  const [startDate, setStartDate] = useState();
  return (<>
      <section className='bg-light-orange pb-30 pb-lg-50'>
       <Container>
          <div className='pt-50'>
            <div className='text-center'>
               <h1 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>Payment</h1>
               <p className='fs-16 fs-xl-18 text-green'>Review all rules of accommodation & confirm your booking</p>
            </div>
          </div>
       </Container>
    </section>
    <section className='pb-40 pb-lg-80 pt-40 pt-lg-70'>
        <Container>
            <Form>
                <Row>
                    <Col lg={7}>
                        <div className='pr-xl-60'>
                            <div className='fs-22 fw-bold text-green mb-25 mb-lg-35'>Property Information</div>
                            <div className='d-flex justify-content-between'>
                                <div className='mb-10 mr-10'>
                                    <div className='fs-18 text-green'>Booking</div>
                                    <div className='fs-20 fs-lg-22 text-green'>01 Aug 2020 - 04 Aug 2020</div>
                                </div>
                                <div className='mb-10'>
                                    <Button className='primary_btn fs-15-i'>Edit</Button>
                                </div>
                            </div>
                            <div className='pt-30 pb-20 pb-lg-40'>
                                <Row>
                                    <Col sm={6} lg={4} className="mb-15">
                                        <div className='get_cost_box'>
                                        <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 pb-10'>Private Room 2</div>
                                        <div className='fs-16 fs-lg-18 text-green line-height-12 mb-20'><span className='fw-bold'>$15.00</span> / Hour</div>
                                        <Button className='primary_btn green_borderd_btn py-6'>Remove</Button>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} className="mb-15">
                                        <div className='get_cost_box'>
                                        <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 pb-10'>Private Room 2</div>
                                        <div className='fs-16 fs-lg-18 text-green line-height-12 mb-20'><span className='fw-bold'>$15.00</span> / Hour</div>
                                        <Button className='primary_btn green_borderd_btn py-6'>Remove</Button>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} className="mb-15">
                                        <div className='get_cost_box'>
                                        <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 pb-10'>Private Room 2</div>
                                        <div className='fs-16 fs-lg-18 text-green line-height-12 mb-20'><span className='fw-bold'>$15.00</span> / Hour</div>
                                        <Button className='primary_btn green_borderd_btn py-6'>Remove</Button>
                                        </div>
                                    </Col>
                                </Row>
                          </div>
                            <hr className='bg-light-green'/>
                            <div className='pt-30 pb-20 pb-lg-30'>
                                <div className='fs-22 fw-bold text-green mb-25 mb-lg-35'>Payment Options</div>
                                    <div className='cmn_form'>
                                        <Row>
                                            <Col xs={12}>
                                                <Form.Group className='mb-20 mb-lg-35'>
                                                    <Form.Select className='form-control'>
                                                        <option>Credit Cards/Debit Cards</option>
                                                        <option value="1">Paytm</option>
                                                        <option value="2">Credit Cards/Debit Cards</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                            <Form.Group className='mb-20 mb-lg-35'>
                                                <Form.Label className='fs-18 fw-500 text-green'>Credit Cards/Debit Cards</Form.Label>
                                                    <Form.Control type='number' placeholder='0000 0000 0000 0000'/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                            <Form.Group className='mb-20 mb-lg-35'>
                                                <Form.Label className='fs-18 fw-500 text-green'>Expiration Date</Form.Label>
                                                <DatePicker className="form-control w-100 date_fm_icn" 
                                                minDate={new Date()}
                                                selected={startDate} dateFormat="MM / yy" 
                                                onChange={(date) => setStartDate(date)}
                                                showMonthYearPicker/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                            <Form.Group className='mb-20 mb-lg-35'>
                                                <Form.Label className='fs-18 fw-500 text-green'>CVV</Form.Label>
                                                    <Form.Control type='password' placeholder='***'/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                            <Form.Group className='mb-20 mb-lg-35'>
                                                <Form.Label className='fs-18 fw-500 text-green'>Name on Card</Form.Label>
                                                    <Form.Control type='text' placeholder='Lorem Ipsum'/>
                                            </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                            </div>
                            <hr className='bg-light-green'/>
                            <div className='pt-30 pb-20 pb-lg-40'>
                                <div className='fs-22 fw-bold text-green mb-20 mb-lg-30'>Cancellation Policy</div>
                                <div className='fs-18 text-green mb-20 mb-lg-40'>By selecting to complete this booking, I agree to the <Link to="#" className='text-green orange-hover'>House Rules</Link> and <Link to="#" className='text-green orange-hover'>Cancellation Policy</Link>, <Link to="#" className='text-green orange-hover'>Terms of Service</Link> and <Link to="#" className='text-green orange-hover'>Privacy Policy</Link>. I also agree to pay the total amount shown, which includes Occupancy Taxes.</div>
                                <Form.Group className="mb-15 mb-md-40" controlId="formBasicCheckbox">
                                <Form.Check className='custm_checkbx' type="checkbox" label="Agree to the cancellation policy & house/office rules" />
                                </Form.Group>
                                <Form.Group className='mb-20'>
                                <Button className='cmn-btn min-w-140px'>Confirm and Pay</Button>
                                </Form.Group>
                            </div>
                       </div>
                    </Col>
                    <Col lg={5}>
                        <div className='payment_sidebar  max-w-lg-500px mx-lg-auto'>
                            <div className='fs-22 fw-bold text-green mb-25 mb-lg-35'>Price Summary</div>
                            <div className='bg-light-orange pb-10 pb-sm-20 rounded-lg'>
                                <div className='mb-20 product_img'>
                                    <img src={require('../assets/images/item_1.png')} className='img-fluid w-100'/>
                                </div>
                                <div className='px-15 px-sm-40'>
                                    <div className='ff-cormorant fs-26 fs-lg-32 fw-600 text-green line-height-12 mb-6'>Pavilion at Star Lake</div>
                                    <div className='fs-16 fw-500 text-green mb-6'>California, USA</div>
                                    <div className="bg-white rounded-lg px-2 px-xxl-3 py-2 d-inline-block">
                                        <div className="d-flex align-items-center fs-14 fs-xxl-16 fw-500 text-green">
                                            <i className="fa fa-star mr-6"></i>4.20 (780 Reviews)
                                        </div>
                                    </div>
                                    <div className='payment_table pt-15 pt-sm-30 pb-15'>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <div className='fs-18 fs-lg-22 text-green pr-6'>$1,200 x 3 night</div>
                                            <div className='fs-18 fs-lg-22 text-green fw-500'>$3,600</div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <div className='fs-18 fs-lg-22 text-green pr-6'>Cleaning Fees</div>
                                            <div className='fs-18 fs-lg-22 text-green fw-500'>$450</div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <div className='fs-18 fs-lg-22 text-green pr-6'>Service Fee</div>
                                            <div className='fs-18 fs-lg-22 text-green fw-500'>$250</div>
                                        </div>
                                        <hr className='bg-green h-2px'/>
                                        <div className='d-flex justify-content-between pb-3'>
                                            <div className='fs-18 fs-lg-22 text-green fw-bold pr-6'>Total</div>
                                            <div className='fs-18 fs-lg-22 text-green fw-bold'>$4,300</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    </section>
  </>)
}

export default Payment