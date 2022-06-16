import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SVG from 'react-inlinesvg';
import Map from '../Common/map/Map';
import AddReviews from './AddReviews';

const Amenities = () => {
    //Active class
    const [activeIndex, setActiveIndex] = useState(false);
    const handleSetActive = to => {
        setActiveIndex(to);
      };
    //AddReviews
    const [showAddReviews, setShowAddReviews] = useState(false);
    const handleAddReviews = () => setShowAddReviews(true);
    const handleCloseAddReviews = () => setShowAddReviews(false);
  return (<>
     <section className='pb-40 pb-lg-60'>
        <Container>
            <div className='get_amenities'>
                <div className='getogat_spelty_tabs'>
                    <ul className='list-unstyled nav'>
                        <li>
                        <Link activeClass="active" className={"nav-link " + (!activeIndex ? 'active ' : '') } to="space-availability" spy={true} smooth={true} offset={-130} duration={500} onSetActive={handleSetActive}>
                        Space Availability
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" className="nav-link" to="amenities" spy={true} smooth={true} offset={-130} duration={500}>
                        Amenities
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" className="nav-link" to="general-rules" spy={true} smooth={true} offset={-130} duration={500}>
                        General Rules and Exemptions
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" className="nav-link" to="reviews" spy={true} smooth={true} offset={-130} duration={500}>
                        Reviews and Ratings
                        </Link>
                        </li>
                    </ul> 
                </div>
                <div id='space-availability' className="pt-35 pt-sm-50">
                  <div className="d-inline-block align-middle ff-cormorant fs-26 fs-lg-32 fw-bold text-green pb-30">
                    <span className='line-height-12 position-relative under_border_title only_left_brdr'>Space Availability</span>
                    <span className="line-height-12 propty_tags ml-6 align-middle d-inline-block">Hourly</span>
                  </div>
                  <Row>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Monday</span>
                            <span className='mx-10'>-</span>
                            <span>09:00 AM - 05:00 PM</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Tuesday</span>
                            <span className='mx-10'>-</span>
                            <span>09:00 AM - 05:00 PM</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Wednesday</span>
                            <span className='mx-10'>-</span>
                            <span>09:00 AM - 05:00 PM</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Thursday</span>
                            <span className='mx-10'>-</span>
                            <span>09:00 AM - 05:00 PM</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Friday</span>
                            <span className='mx-10'>-</span>
                            <span>09:00 AM - 05:00 PM</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Saturday</span>
                            <span className='mx-10'>-</span>
                            <span>Closed</span>
                        </div>
                     </Col>
                     <Col md={6} lg={4}>
                        <div className='mb-15 fs-18 fs-xl-22 text-green'>
                            <span className='fw-500'>Sunday</span>
                            <span className='mx-10'>-</span>
                            <span>Closed</span>
                        </div>
                     </Col>
                  </Row>
                  <hr className='bg-light-green mt-sm-30'/>
                </div>
                <div id='amenities' className="pt-10 pt-sm-30">
                  <div className="d-inline-block align-middle ff-cormorant fs-26 fs-lg-32 fw-bold text-green pb-30">
                    <span className='line-height-12 position-relative under_border_title only_left_brdr'>Amenities</span>
                  </div>
                  <Row>
                     <Col md={6} lg={4} className="mb-15">
                        <div className='mb-15 fs-18 fs-xl-22 fw-500 text-green'>Features</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Hosted Reception</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Print/Scan/Copy</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Kitchen/Kitchenette</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Bottled Water</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Wi-fi</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Parking</div>
                     </Col>
                     <Col md={6} lg={4} className="mb-15">
                        <div className='mb-15 fs-18 fs-xl-22 fw-500 text-green'>Private Room 1</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Projector</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Video Conference</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>TV/Monitor</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Whiteboard</div>
                     </Col>
                     <Col md={6} lg={4} className="mb-15">
                        <div className='mb-15 fs-18 fs-xl-22 fw-500 text-green'>Private Room 1</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Phone</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Projector</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>Whiteboard</div>
                        <div className='mb-10 fs-18 fs-xl-22 text-green'>TV/Monitor</div>
                     </Col>
                  </Row>
                  <hr className='bg-light-green mt-sm-30'/>
                </div>
                <div id='general-rules' className="pt-10 pt-sm-30">
                  <div className="d-inline-block align-middle ff-cormorant fs-26 fs-lg-32 fw-bold text-green pb-30">
                    <span className='line-height-12 position-relative under_border_title only_left_brdr'>General Rules and Exemptions</span>
                  </div>
                  <div className='mb-20 fs-18 fs-xl-22 text-green'><span className='fw-500'>Check-in:</span> 12:00 PM and <span className='fw-500'>Check-out:</span> 10:30 AM</div>
                  <Row>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>Smoking within the premises is allowed</div>
                    </Col>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>Smoking within the premises is allowed</div>
                    </Col>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>There are no restrictions on alcohol consumption.</div>
                    </Col>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>There are no restrictions on alcohol consumption.</div>
                    </Col>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>Quarantine protocols are being followed as perlocal government authorities</div>
                    </Col>
                    <Col lg={6}>
                       <div className='fs-18 text-green mb-8'><i className='fa fa-check-circle text-light-green mr-6'></i>Quarantine protocols are being followed as perlocal government authorities</div>
                    </Col>
                  </Row>
                  <Row className='mt-20'>
                    <Col sm={6} md={3} className="mb-10">
                        <Button variant='transparent' className='dwnld_btn d-flex align-items-center fs-18 text-green p-0 shadow-none'>
                            <SVG className='mr-6' src={require("../../assets/images/download.svg").default}/>FileNameHere.pdf</Button>
                    </Col>
                    <Col sm={6} md={3} className="mb-10">
                        <Button variant='transparent' className='dwnld_btn d-flex align-items-center fs-18 text-green p-0 shadow-none'>
                            <SVG className='mr-6' src={require("../../assets/images/download.svg").default}/>FileNameHere.pdf</Button>
                    </Col>
                    <Col sm={6} md={3} className="mb-10">
                        <Button variant='transparent' className='dwnld_btn d-flex align-items-center fs-18 text-green p-0 shadow-none'>
                            <SVG className='mr-6' src={require("../../assets/images/download.svg").default}/>FileNameHere.pdf</Button>
                    </Col>
                    <Col sm={6} md={3} className="mb-10">
                        <Button variant='transparent' className='dwnld_btn d-flex align-items-center fs-18 text-green p-0 shadow-none'>
                            <SVG className='mr-6' src={require("../../assets/images/download.svg").default}/>FileNameHere.pdf</Button>
                    </Col>
                  </Row>
                  <hr className='bg-light-green mt-30'/>
                </div>   
                <div id='reviews' className="pt-10 pt-sm-30">
                  <div className="d-inline-block align-middle ff-cormorant fs-26 fs-lg-32 fw-bold text-green pb-30">
                    <span className='line-height-12 position-relative under_border_title only_left_brdr'>Reviews and Ratings</span>
                  </div>
                  <div className='d-flex flex-wrap justify-content-between align-items-center mb-25'>
                    <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                        <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mr-15 mb-10'>
                            <div className='ff-cormorant d-flex align-items-center fs-26 fs-xl-32 fw-600 text-green'>
                                <i className='fa fa-star mr-6 fs-26'></i>4.3/5
                            </div>
                        </div>
                        <div className='mb-10'>
                          <div className='fs-18 fs-lg-22 fw-bold text-green'>Very Good</div>
                          <div className='fs-16 fs-lg-18 text-green'>2023 User Reviews</div>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <Button className='primary_btn' onClick={handleAddReviews}>Post Reviews</Button>
                        <AddReviews
                        show={showAddReviews} 
                        onClose={handleCloseAddReviews}/>
                    </div>
                  </div>
                  <Row>
                    <Col md={6}>
                        <div className='reviewBox py-20 px-15 p-lg-40 bg-light-orange rounded-lg mb-30'>
                            <div className='d-flex justify-content-between flex-wrap align-items-center mr-15'>
                                <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                                    <div className='mr-15 mb-10'>
                                        <div className='gat_user_img'>
                                           <img src={require("../../assets/images/user.png")}/>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className='fs-18 fs-lg-22 fw-bold text-green'>Jennie Mark</div>
                                        <div className='fs-16 fs-lg-18 text-green'>March 2022</div>
                                    </div>
                                </div>
                                <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mb-10'>
                                    <div className='d-flex align-items-center fs-18 fs-xl-22 fw-600 text-green'>
                                          4.5
                                    </div>
                                </div>
                            </div>
                             <p className='fs-18 text-green'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum. Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                    <Col md={6}>
                        <div className='reviewBox py-20 px-15 p-lg-40 bg-light-orange rounded-lg mb-30'>
                            <div className='d-flex justify-content-between flex-wrap align-items-center mr-15'>
                                <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                                    <div className='mr-15 mb-10'>
                                        <div className='gat_user_img'>
                                           <img src={require("../../assets/images/user.png")}/>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className='fs-18 fs-lg-22 fw-bold text-green'>Jennie Mark</div>
                                        <div className='fs-16 fs-lg-18 text-green'>March 2022</div>
                                    </div>
                                </div>
                                <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mb-10'>
                                    <div className='d-flex align-items-center fs-18 fs-xl-22 fw-600 text-green'>
                                          3.5
                                    </div>
                                </div>
                            </div>
                             <p className='fs-18 text-green'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum. Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                    <Col md={6}>
                        <div className='reviewBox py-20 px-15 p-lg-40 bg-light-orange rounded-lg mb-30'>
                            <div className='d-flex justify-content-between flex-wrap align-items-center mr-15'>
                                <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                                    <div className='mr-15 mb-10'>
                                        <div className='gat_user_img'>
                                           <img src={require("../../assets/images/user.png")}/>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className='fs-18 fs-lg-22 fw-bold text-green'>Jennie Mark</div>
                                        <div className='fs-16 fs-lg-18 text-green'>March 2022</div>
                                    </div>
                                </div>
                                <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mb-10'>
                                    <div className='d-flex align-items-center fs-18 fs-xl-22 fw-600 text-green'>
                                          4.5
                                    </div>
                                </div>
                            </div>
                             <p className='fs-18 text-green'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum. Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                    <Col md={6}>
                        <div className='reviewBox py-20 px-15 p-lg-40 bg-light-orange rounded-lg mb-30'>
                            <div className='d-flex justify-content-between flex-wrap align-items-center mr-15'>
                                <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                                    <div className='mr-15 mb-10'>
                                        <div className='gat_user_img'>
                                           <img src={require("../../assets/images/user.png")}/>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className='fs-18 fs-lg-22 fw-bold text-green'>Jennie Mark</div>
                                        <div className='fs-16 fs-lg-18 text-green'>March 2022</div>
                                    </div>
                                </div>
                                <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mb-10'>
                                    <div className='d-flex align-items-center fs-18 fs-xl-22 fw-600 text-green'>
                                          4.5
                                    </div>
                                </div>
                            </div>
                             <p className='fs-18 text-green'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum. Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                  </Row>
                  <div className='text-center pt-10 pt-lg-30 pb-10 pb-lg-30'>
                        <Button className='primary_btn'>View All Reviews</Button>
                  </div>
                  <hr className='bg-light-green mt-sm-30'/>
                  {/* location */}
                  <div className='pb-10 pt-10 pt-sm-30'>
                    <Row>
                        <Col lg={6} className="mb-20">
                          <div className='d-flex flex-wrap align-items-center mb-10 mr-15'>
                                <div className='mr-15 mb-10'>
                                    <div className='gat_user_img'>
                                        <img src={require("../../assets/images/user.png")}/>
                                    </div>
                                </div>
                                <div className='mb-10'>
                                    <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12'>Hosted by Mansoor Ali</div>
                                    <div className='fs-16 fs-lg-18 text-green'>Joined in June 2017</div>
                                </div>
                          </div>
                          <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2 mb-20 d-inline-block'>
                            <div className='d-flex align-items-center fs-16 fw-500 text-green'>
                                <i className='fa fa-star mr-6'></i> 4.20 (780 Reviews)
                            </div>
                          </div>
                          <div className='pb-20'>
                             <p className='fs-18 text-green'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt.</p>
                             <p className='fs-18 text-green'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt.</p>
                             <p className='fs-18 text-green'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt.</p>
                          </div>
                          <Button className='primary_btn'>Request for Chat</Button>
                        </Col>
                        <Col lg={6} className="mb-20">
                          <div className='mb-20'>
                                <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12'>Where you’ll be</div>
                                <div className='fs-16 fs-lg-18 text-green'>California City, California, United States</div>
                           </div>
                           <Map/>
                        </Col>
                    </Row>
                    <hr className='bg-light-green mt-sm-30'/>
                    </div>
                </div>
            </div>
        </Container>
     </section>
    </>)
}

export default Amenities