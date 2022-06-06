import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background from "../../assets/images/fav_1.png";
import Background1 from "../../assets/images/fav_2.png";
import Background2 from "../../assets/images/fav_3.png";
import Background3 from "../../assets/images/fav_4.png";
const HotFavDestination = () => {
  return (<>
       <section className='pt-40 pb-40 pt-lg-100 pb-lg-100'>
            <Container>
                <div className='text-center pb-30'>
                <h1 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Hot Favourite Destinations</h1>
                <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Row>
                <Col md={6} lg={3}>
                    <div className='get_fav_box mb-30'>
                    <Link to="#">
                        <div className='get_fav_imgbx'>
                            <span style={{background: "url(" + Background + ") no-repeat scroll center center / cover"}}></span>
                        </div>
                        <div className='get_fav_info d-flex align-items-end'>
                            <div className='inner_get_info transition-ease'>
                                <div className='ff-cormorant fs-26 fs-xl-32 fw-600 text-white line-height-12 w-100 gat_ellips'>California, USA</div>
                                <div className='get_fav_hvr_txt fs-16 fs-lg-18 text-white transition-ease w-100 gat_ellips'>250 KM Away</div>
                            </div>
                        </div>
                    </Link>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className='get_fav_box mb-30'>
                    <Link to="#">
                        <div className='get_fav_imgbx'>
                            <span style={{background: "url(" + Background1 + ") no-repeat scroll center center / cover"}}></span>
                        </div>
                        <div className='get_fav_info d-flex align-items-end'>
                            <div className='inner_get_info transition-ease'>
                                <div className='ff-cormorant fs-26 fs-xl-32  fw-600 text-white line-height-12'>Los Angeles, USA</div>
                                <div className='get_fav_hvr_txt fs-16 fs-lg-18 text-white transition-ease'>250 KM Away</div>
                            </div>
                        </div>
                    </Link>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className='get_fav_box mb-30'>
                    <Link to="#">
                        <div className='get_fav_imgbx'>
                            <span style={{background: "url(" + Background2 + ") no-repeat scroll center center / cover"}}></span>
                        </div>
                        <div className='get_fav_info d-flex align-items-end'>
                            <div className='inner_get_info transition-ease'>
                                <div className='ff-cormorant fs-26 fs-xl-32 fw-600 text-white line-height-12'>New York, USA</div>
                                <div className='get_fav_hvr_txt fs-16 fs-lg-18 text-white transition-ease'>250 KM Away</div>
                            </div>
                        </div>
                    </Link>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className='get_fav_box mb-30'>
                    <Link to="#">
                        <div className='get_fav_imgbx'>
                            <span style={{background: "url(" + Background3 + ") no-repeat scroll center center / cover"}}></span>
                        </div>
                        <div className='get_fav_info d-flex align-items-end'>
                            <div className='inner_get_info transition-ease'>
                                <div className='ff-cormorant fs-26 fs-xl-32  fw-600 text-white line-height-12'>San Francisco, USA</div>
                                <div className='get_fav_hvr_txt fs-16 fs-lg-18 text-white transition-ease'>250 KM Away</div>
                            </div>
                        </div>
                    </Link>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    </>)
}

export default HotFavDestination