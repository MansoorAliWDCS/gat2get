import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import Faq from '../component/Common/Faq'
import ReactPlayer from 'react-player'
import video from "../assets/images/video.mp4"
import videoPoster from "../assets/images/video-poster.png"
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom'
import Slider from "react-slick";

const BecomeHost = () => {
    //slider
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 500,
        centerPadding: '24% 1%',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '0',
                    centerMode: false,
                    slidesToShow: 1,
                    infinite: false,
                }
            }
        ]
    };
  return (<>
    <section className='bg-light-orange pb-30 pb-lg-50'>
        <Container>
            <div className='pt-50'>
                <div className='text-center'>
                <h1 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>Get better bookings on GAT2GET</h1>
                <p className='fs-16 fs-xl-18 text-green'>GAT2GET is the destination for booking exceptional homes</p>
                </div>
            </div>  
        </Container>
    </section>
    <section className='getbecomeVideo pb-40 pb-lg-100 position-relative'>
      <Container>
        <div className='player-wrapper max-w-1320px mx-auto mb-50'>
            <ReactPlayer
                url={video}
                className='react-player'
                playing
                controls={true}
                width='100%'
                height='100%'
                playIcon={<Button variant='transparent'><SVG className='mr-6' src={require("../assets/images/play.svg").default}/></Button>}
                light={videoPoster}
            />
        </div>
        <div className='text-center'>
            <Link to='/create-your-listing' className='cmn-btn min-w-md-180px'>Let's Go</Link>
        </div>
      </Container>
   </section>
   <section className='pb-40 pb-lg-80'>
     <Slider {...settings} className="getUserSlider">
         <div className='getUserSlides'>
             <div className='getUserImg'>
                <img src={require("../assets/images/slide.png")} className="img-fluid"/>
             </div>
             <div className='getUserInfo'>
                <div className='fs-18 fs-lg-22 text-green pb-10'>Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.</div>
                <div className='ff-lamar fs-18 fs-lg-22 text-green'>Steve Smith</div>
                <div className='fs-18 fs-lg-22 text-green'>Host in Amsterdam</div>
             </div>
         </div>   
         <div className='getUserSlides'>
             <div className='getUserImg'>
                <img src={require("../assets/images/slide.png")} className="img-fluid"/>
             </div>
             <div className='getUserInfo'>
                <div className='fs-18 fs-lg-22 text-green pb-10'>Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.</div>
                <div className='ff-lamar fs-18 fs-lg-22 text-green'>Steve Smith</div>
                <div className='fs-22 text-green'>Host in Amsterdam</div>
             </div>
         </div>    
         <div className='getUserSlides'>
             <div className='getUserImg'>
                <img src={require("../assets/images/slide.png")} className="img-fluid"/>
             </div>
             <div className='getUserInfo'>
                <div className='fs-18 fs-lg-22 text-green pb-10'>Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.</div>
                <div className='ff-lamar fs-18 fs-lg-22 text-green'>Steve Smith</div>
                <div className='ffs-18 fs-lg-22 text-green'>Host in Amsterdam</div>
             </div>
         </div>    
         <div className='getUserSlides'>
             <div className='getUserImg'>
                <img src={require("../assets/images/slide.png")} className="img-fluid"/>
             </div>
             <div className='getUserInfo'>
                <div className='fs-18 fs-lg-22 text-green pb-10'>Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.</div>
                <div className='ff-lamar fs-18 fs-lg-22 text-green'>Steve Smith</div>
                <div className='fs-18 fs-lg-22 text-green'>Host in Amsterdam</div>
             </div>
         </div>    
     </Slider>
   </section>
   <section className='bg-light-orange pt-40 pt-lg-90 pb-30 pb-lg-80'>
        <Container>
            <Row>
                <Col xs={12} lg={3} className="w-lg-31">
                    <div className='max-w-lg-380px mb-25'>
                        <div className='ff-cormorant fs-26 fs-lg-32 fw-bold text-green mb-20'>Hosted by Steve Smith</div>
                        <p className='fs-16 fs-xl-18 text-green'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <p className='fs-16 fs-xl-18 text-green'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                </Col>
                <Col sm={4} lg={3} className="w-lg-23 mb-20">
                    <div className='max-w-sm-280px'>
                        <div className='mb-15'>
                            <img src={require("../assets/images/stay.png")}/>
                        </div>
                       <div className='fs-18 fs-lg-22 fw-bold text-green mb-10'>Longer Stays</div>
                        <p className='fs-16 fs-xl-18 text-green'>Our guests stay longer on average, meaning higher occupancy rates and fewer changeovers.</p>
                    </div>
                </Col>
                <Col sm={4} lg={3} className="w-lg-23 mb-20">
                    <div className='max-w-sm-280px'>
                        <div className='mb-15'>
                            <img src={require("../assets/images/guest.png")}/>
                        </div>
                       <div className='fs-18 fs-lg-22 fw-bold text-green mb-10'>Trusted Guests</div>
                        <p className='fs-16 fs-xl-18 text-green'>Our guests tend to be more mature and reliable, and the cancellation rate on Plum Guide is over 30% lower compared to other platforms.</p>
                    </div>
                </Col>
                <Col sm={4} lg={3} className="w-lg-23 mb-20">
                   <div className='max-w-sm-280px'>
                        <div className='mb-15'>
                            <img src={require("../assets/images/service.png")}/>
                        </div>
                       <div className='fs-18 fs-lg-22 fw-bold text-green mb-10'>Concierge Service</div>
                        <p className='fs-16 fs-xl-18 text-green'>Our team of experts are on hand to guide guests towards your home. So you get more bookings, with the right guests.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='pt-40 pt-100 pb-40 pb-lg-100'>
        <Container>
            <div className='getGoodCompany position-relative'>
                <div className='getGoodCmnyImg'>
                    <span style={{background: `url(${require("../assets/images/comapny.png")}) no-repeat scroll center center / cover`}}></span>
                </div>
                <div className='getGoodCmnyInfo text-center max-w-800px mx-auto'>
                    <div className='ff-cormorant fs-36 fs-md-52 fs-xl-72 fw-bold text-white pb-10 line-height-12'>You’re in good company</div>
                    <div className='fs-20 fs-md-22 fs-xl-26 text-white pb-25 pb-sm-40'>We’re working on developing local-language guides for all of our global markets to make it easier than ever to plan your trip.</div>
                    <Link to="/propery-list" className='cmn-btn white-cmn-btn'>Explore Properties</Link>
                </div>
            </div>
        </Container>
    </section>
    <section className='pb-40 pb-lg-100'>
        <Container>
            <div className='text-center pb-20 pb-lg-40'>
                <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>GAT2GET Stories</h2>
                <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Row>
                <Col lg={4} className='mb-20'>
                    <div className='getStorieBox'>
                        <div className='getStrIcn mb-20 mb-lg-35'>
                            <SVG src={require("../assets/images/quate.svg").default}/>
                        </div>
                        <div className='fs-18 fs-lg-22 text-black'>The house is beautiful, paramount location, has breathtaking views and has luxury fit for a royalty. We had a great time and obviously couldn’t have ask for better location nor better amenities.</div>
                        <div className='d-flex flex-wrap align-items-center pt-20 pt-lg-50'>
                          <div className='gat_user_img mr-15 mb-10'>
                             <img src={require("../assets/images/user-1.png")}/>
                          </div>
                          <div className='mb-10'>
                            <div className='fs-18 fs-lg-22 fw-bold text-green'>Jennie Mark</div>
                            <div className='fs-16 fs-lg-18 text-green'>Renter</div>
                           </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='mb-20'>
                    <div className='getStorieBox'>
                        <div className='getStrIcn mb-20 mb-lg-35'>
                            <SVG src={require("../assets/images/quate.svg").default}/>
                        </div>
                        <div className='fs-18 fs-lg-22 text-black'>This home is AMAZING! We had a large group go to stay in this home and it didn't disappoint. The space is fantastic - the living space, the kitchen, the rooms, the pool - all made for a great getaway.</div>
                        <div className='d-flex flex-wrap align-items-center pt-20 pt-lg-50'>
                          <div className='gat_user_img mr-15 mb-10'>
                             <img src={require("../assets/images/user-2.png")}/>
                          </div>
                          <div className='mb-10'>
                            <div className='fs-18 fs-lg-22 fw-bold text-green'>Steve Smith</div>
                            <div className='fs-16 fs-lg-18 text-green'>Host</div>
                           </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='mb-20'>
                    <div className='getStorieBox'>
                        <div className='getStrIcn mb-20 mb-lg-35'>
                            <SVG src={require("../assets/images/quate.svg").default}/>
                        </div>
                        <div className='fs-18 fs-lg-22 text-black'>My friends and I had a lovely time and couldn't say more nice things about our stay. The pool is gorgeous - the slide was lovely and there is so much room for all the guests to be comfortable so thank you so much for having us!</div>
                        <div className='d-flex flex-wrap align-items-center pt-20 pt-lg-50'>
                          <div className='gat_user_img mr-15 mb-10'>
                             <img src={require("../assets/images/user-1.png")}/>
                          </div>
                          <div className='mb-10'>
                            <div className='fs-18 fs-lg-22 fw-bold text-green'>Terence Rodrigues</div>
                            <div className='fs-16 fs-lg-18 text-green'>Renter</div>
                           </div>
                        </div>
                    </div>
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

export default BecomeHost