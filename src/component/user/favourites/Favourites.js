import React, { useState } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs'
import Destinations from '../../Common/Destinations';
import Faq from '../../Common/Faq';
import { Link } from 'react-router-dom'


const Favourites = () =>{
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    let [num, setNum]= useState(1);
    const incrementCounter = () => setNum(num + 1);
    let decrementCounter = () => setNum(num - 1);
    if(num<=1) {
      decrementCounter = () => setNum(1);
    }
    let handleChange = (e)=>{
      setNum(e.target.value);
     }
  return (<>
      <section className='bg-light-orange pt-10 pb-30 pb-lg-60 mt-80'>
         <Container>
            <div className='tabs_filter'>
                <div className='get_filter justify-content-between bg-theme-orange rounded-lg p-10'>
                    <div className='inner_get_filter'>
                    <Form className='d-flex flex-wrap get_search_form align-items-center'>
                        <Form.Group className='form-group'>
                        <Form.Control type="search" className='serch_fm_icn' placeholder="Search for Location" />
                        </Form.Group>
                        <Form.Group className='form-group'>
                        <DatePicker className="form-control w-100 date_fm_icn" 
                        minDate={new Date()}
                        selected={startDate} dateFormat="d MMM yyyy" 
                        onChange={(date) => setStartDate(date)} placeholderText="Date of Reservation"/>
                        </Form.Group>
                        <Form.Group className='form-group'>
                        <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeCaption="Time"
                        className="form-control w-100 time_fm_icn"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        timeIntervals={60}
                        dateFormat="h:mm aa"
                        placeholderText="Time"
                        />
                        </Form.Group>
                        <Form.Group className='form-group brdr_nn'>
                        <div className='d-flex guest_input_group'>
                            <Form.Control className='user_fm_icn' placeholder="Guests" disabled/>
                            <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                <div className="input-group-prepend">
                                    <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                </div>
                                <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                <div className="input-group-prepend">
                                    <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                </div>
                            </div>
                        </div>
                        </Form.Group>
                        <Button className='primary_btn ms-auto min-w-xl-200px' variant="primary" type="submit">Search</Button>
                    </Form>
                    </div>
                </div>
            </div>
            <div className='pt-50'>
                <div className='d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap'>
                <div className='mr-lg-10 mb-15 mb-lg-0 w-100 w-lg-auto order-1 order-lg-0'>
                    <Breadcrumbs/>
                </div>
                </div>
            </div>
         </Container>
      </section>
      <section className='pt-40 pb-40 pt-lg-80 pb-lg-80'>
        <Container>
            <Row>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='/wishlist' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-1.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-2.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-3.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Wedding/Celebration</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-4.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-5.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-6.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Retreat/Events</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-7.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-7.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-8.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Extended Stays/Furnished Rentals</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-9.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-10.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-11.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Unfurnished Homes</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-12.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-13.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-14.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Conferences/Meeting</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-15.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-16.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-17.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Vacation Rentals</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-18.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-19.png")} className='img-fluid'/>
                                    </div>
                                    <div className='inner_getImgBox fixHetImgBox'>
                                      <img src={require("../../../assets/images/fav-13.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>Office space/Commercial Property</div>
                        </Link>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='mb-20 mb-lg-30'>
                    <div className='getFavBox'>
                        <Link to='#' className='d-block text-decoration-none'>
                            <div className='getFavImg d-flex'>
                                <div className='w-50 getFavImgLeft'>
                                    <div className='inner_getImgBox'>
                                        <img src={require("../../../assets/images/fav-20.png")} className='img-fluid'/>
                                    </div>
                                </div>
                                <div className='w-50 getFavImgRight'>
                                    <div className='inner_getImgBox fixHetImgBox mb-1'>
                                      <img src={require("../../../assets/images/fav-21.png")} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mt-15 mt-lg-30'>My Wishlist</div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      <section className='pb-20 pb-lg-30'>
        <Container>
            <div className='pb-20'>
            <h2 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>Top Desinations</h2>
            </div>
            <Row>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
                <Col sm={4} xl={3}>
                    <Destinations/>
                </Col>
            </Row>
        </Container>
  </section>
  <section className='pb-40 pb-lg-80'>
     <Container>
        <div className='pb-20'>
           <h2 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>Destinations</h2>
        </div>
        <Row>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
            <Col sm={4} xl={3}>
                <Destinations/>
            </Col>
        </Row>
     </Container>
  </section>
  <section className='pb-40 pb-lg-100'>
     <Container>
        <div className='text-center pb-20 pb-lg-40'>
           <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>FAQs</h2>
           <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='max-w-1320px mx-auto'>
          <Faq/>
        </div>
     </Container>
  </section>
    </>)
}

export default Favourites