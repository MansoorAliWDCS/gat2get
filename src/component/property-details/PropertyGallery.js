import React, {useState} from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import Slider from "react-slick";
import SVG from 'react-inlinesvg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShareLink from './ShareLink';


const PropertyGallery = () =>{
//slider
const [showSlide, setShowSlide] = useState(false);
const handaleShow = () =>
    setShowSlide(
    true,
    document.getElementsByTagName("body")[0].classList.add("openSlideShow")
    );
const handaleHide = () =>
    setShowSlide(
    false,
    document.getElementsByTagName("body")[0].classList.remove("openSlideShow")
    );
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const [totalSlide, settotalSlide] = useState();
const [activeSlide, setactiveSlide] = useState(1);

const afterChange = () => {
    if (document.getElementsByClassName("lightbx_slides_box")[0]) {
    const slider = document.getElementsByClassName("lightbx_slides_box")[0];
    const ul = slider.getElementsByClassName("slick-dots")[0];
    const li = ul.getElementsByTagName("li").length;
    const active = ul.getElementsByClassName("slick-active")[0];
    const text = active.getElementsByTagName("button")[0].innerText;
    settotalSlide(li);
    setactiveSlide(text);
    }
};
//datepicker
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
//ShareLink Modal
const [showShareLink, setShowShareLink] = useState(false);
const handleShareLink = () => setShowShareLink(true);
const handleCloseShareLink = () => setShowShareLink(false);
  return (<>
    <section className='pt-40 pt-lg-100 pb-40 pb-lg-60'>
        <Container>
            <Row>
                <Col md={8} className="mb-10">
                    <h1 className='d-inline-block align-middle ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>The Pavilion at Star Lake 
                        <span className='propty_tags ml-6 align-middle d-inline-block'>Wedding Venue</span>
                    </h1>
                    <div className='d-flex align-items-center mb-8 flex-wrap'>
                        <div className="bg-white rounded-lg px-2 px-xxl-3 py-2 mr-6">
                            <div className="d-flex align-items-center fs-14 fs-xxl-16 fw-500 text-green">
                                <i className="fa fa-star mr-6"></i>4.20 (780 Reviews)
                            </div>
                        </div>
                        <div className='fs-16 fw-500 text-green mr-6'>· California, USA</div>
                    </div>
                </Col>
                <Col md={4} className='align-self-center mb-10'>
                    <div className='d-flex justify-content-md-end'>
                        <Button className='borderd-btn mx-6' onClick={handleShareLink}><i className="fa fa-external-link" aria-hidden="true"></i></Button>
                        <Button className='borderd-btn mx-6'><i className="fa fa-heart-o" aria-hidden="true"></i></Button>
                    </div>
                </Col>
            </Row>
            <div className='gat_gallery mt-20 mt-sm-10'>
                <div className='mobile_gallery_slider'>
                    <Slider {...settings}>
                        <div className='mobile_gallery_img'>
                            <div className='inner_mobile_gallery_img'>
                                <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                            </div>
                        </div>
                        <div className='mobile_gallery_img'>
                            <div className='inner_mobile_gallery_img'>
                                <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                            </div>
                        </div>
                        <div className='mobile_gallery_img'>
                            <div className='inner_mobile_gallery_img'>
                                <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                            </div>
                        </div>
                        <div className='mobile_gallery_img'>
                            <div className='inner_mobile_gallery_img'>
                                <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                            </div>
                        </div>
                    </Slider>
                </div>

                {showSlide && (
                    <div className='lightbox_slider'>
                        <Button
                            type="button"
                            onClick={handaleHide}
                            variant="trasparent"
                            className="gatCloseSlideShowBtn"
                        >X</Button>
                        <div className="d-flex justify-content-center mb-20 total_num_slide fs-206 text-black fw-500">
                            <span id="curruntSlide">{activeSlide}</span>/
                            <span id="totalSlide">{totalSlide}</span>
                        </div>
                        <Slider {...settings} className="lightbx_slides_box" afterChange={afterChange}>
                            <div className='lightbox_img'>
                                <div className='inner_lightbox_img'>
                                    <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                                </div>
                            </div>
                            <div className='lightbox_img'>
                                <div className='inner_lightbox_img'>
                                <img src={require("../../assets/images/gallery_2.png")} className="gal_img"/>
                                </div>
                            </div>
                            <div className='lightbox_img'>
                                <div className='inner_lightbox_img'>
                                <img src={require("../../assets/images/gallery_3.png")} className="gal_img"/>
                                </div>
                            </div>
                            <div className='lightbox_img'>
                                <div className='inner_lightbox_img'>
                                <img src={require("../../assets/images/gallery_4.png")} className="gal_img"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                )}

                <div className='gallery_listbox position-relative'>
                    <div className='view_gal_imgAction'>
                        <Button
                            type="button"
                            onClick={handaleShow}
                            className="cmn-btn white-cmn-btn d-flex align-items-center"><SVG className='mr-6' src={require("../../assets/images/gallery_icn.svg").default}/>View All Photos
                        </Button>
                    </div>
                    <Row className='gal_row'>
                        <Col sm={7} className='cmn_gal_col left_galBox'>
                            <div className='gallery_imgbox'>
                              <img src={require("../../assets/images/gallery_1.png")} className="gal_img"/>
                            </div>
                        </Col>
                        <Col sm={5} className='right_galBox'>
                            <Row>
                                <Col xs={12} className="mb-30 mx-h-full">
                                    <div className='gallery_imgbox'>
                                    <img src={require("../../assets/images/gallery_2.png")} className="gal_img"/>
                                    </div>
                                </Col>
                                <Col xs={6} className="mx-h-half">
                                    <div className='gallery_imgbox'>
                                      <img src={require("../../assets/images/gallery_3.png")} className="gal_img"/>
                                    </div>
                                </Col>
                                <Col xs={6} className="mx-h-half">
                                    <div className='gallery_imgbox'>
                                      <img src={require("../../assets/images/gallery_4.png")} className="gal_img"/>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
    <section className='pb-40 pb-lg-70'>
        <Container>
            <Row>
                <Col lg={7}>
                    <div className='pr-xl-60'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='mr-6'>
                                <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12'>The Pavilion at Star Lake</div>
                                <div className='fs-18 fs-lg-22 text-green'><span>4 guests</span> · <span>1 bedroom </span> · <span>3 beds</span> · <span>1 bathroom</span></div>
                            </div>
                            <div className='gat_user_img'>
                                <img src={require("../../assets/images/user.png")}/>
                            </div>
                        </div>
                        <hr className='bg-light-green'/>
                        <div className='pb-20 pt-lg-30'>
                            <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 position-relative under_border_title only_left_brdr'>About Pavilion at Star Lake</div>
                            <div className='pt-20'>
                                <div className='fs-16 fs-lg-18 text-green mb-10'>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. 
                                </div>
                                <div className='fs-16 fs-lg-18 text-green mb-10'>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
                                </div>
                            </div>
                        </div>
                        <hr className='bg-light-green'/>
                        <div className='pb-20 pt-lg-30'>
                            <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 position-relative under_border_title only_left_brdr'>Cost of The Place</div>
                            <div className='pt-20'>
                                <Row>
                                    <Col sm={6} lg={4} className="mb-15">
                                        <div className='get_cost_box'>
                                        <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green line-height-12 pb-10'>Private Room 1</div>
                                        <div className='fs-16 fs-lg-18 text-green line-height-12 mb-20'><span className='fw-bold'>$15.00</span> / Hour</div>
                                        <Button className='primary_btn py-6'>Add</Button>
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
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='payment_sidebar bg-light-orange py-30 px-15 p-sm-40 rounded-lg'>
                        <div className='ff-cormorant fs-26 fs-lg-32 fw-600 text-green line-height-12 mb-20'>$4,300 - Pavilion at Star Lake</div>
                        <Form>
                            <div className='bg-theme-orange rounded-lg p-10 mb-20'>
                                <div className='inner_get_filter form_get_v2'>
                                    <div className='d-flex flex-wrap get_search_form align-items-center'>
                                        <Form.Group className='form-group w-50 brdr-right'>
                                            <Form.Label className='fs-16 fw-500 text-light-green mb-0'>Check-in</Form.Label>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                            minDate={new Date()}
                                            selected={startDate} dateFormat="d MMM yyyy" 
                                            onChange={(date) => setStartDate(date)} />
                                        </Form.Group>
                                        <Form.Group className='form-group w-50'>
                                            <Form.Label className='fs-16 fw-500 text-light-green mb-0'>Check-out</Form.Label>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                                minDate={startDate}
                                                selected={endDate} 
                                                endDate={endDate}
                                                dateFormat="d MMM yyyy" 
                                                onChange={(date) => setEndDate(date)}/>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-theme-orange rounded-lg p-10 mb-20'>
                                <div className='inner_get_filter form_get_v2'>
                                    <div className='get_search_form'>
                                      <div className='d-flex guest_input_group justify-content-between align-items-center'>
                                            <Form.Group className='form-group w-auto'>
                                                <Form.Label className='fs-16 fw-500 text-light-green mb-0'>Guest</Form.Label>
                                                <Form.Control className='user_fm_icn' placeholder="Guests" disabled/>
                                            </Form.Group>
                                            <Form.Group className='form-group w-auto'>
                                                <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                                    </div>
                                                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
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
                            <Button className='primary_btn ms-auto w-100' variant="primary" type="submit">Book Now</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <ShareLink
    show={showShareLink} 
    onClose={handleCloseShareLink}
    />
  </>)
}

export default PropertyGallery