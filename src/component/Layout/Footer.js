import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
       <div className="top-footer bg-green pt-40 pb-25 pt-lg-80 pb-lg-80">
         <Container>
            <Row>
                  <Col md={6} lg={4} className="mb-20 mb-lg-0">
                    <img src={require("../../assets/images/logo.png")} className="footer-logo mb-20" alt="logo"/>
                      <p className="fs-16 text-light-green max-w-350px">When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards</p>
                      <div className="d-flex app_store pt-10 pt-lg-20">
                        <Link to="#" className='mr-15'><img src={require("../../assets/images/app-store-logo.png")} alt='app-store' className="img-fluid"/></Link>
                        <Link to="#"><img src={require("../../assets/images/google-play-logo.png")} alt='google-play' className="img-fluid"/></Link>
                      </div>
                  </Col>
                  <Col md={6} lg={2} className="mb-20 mb-lg-0">
                    <h4 className="fs-22 text-white fw-bold mb-15 mb-lg-25">Company</h4>
                    <ul className='list-unstyled m-0'>
                      <li><Link to="/about-us" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>About Us</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Journal</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Careers</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>How We Works</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Trust & Safety</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Invite Friends</Link></li> 
                    </ul>
                  </Col>
                  <Col md={6} lg={2} className="mb-20 mb-lg-0">
                    <h4 className="fs-22 text-white fw-bold mb-15 mb-lg-25">Contact</h4>
                    <ul className='list-unstyled m-0'>
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Legal</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Press</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Help Center</Link></li> 
                      <li><Link to="terms-of-service" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Terms of Service</Link></li> 
                      <li><Link to="privacy-policy" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Privacy Policy</Link></li> 
                      <li><Link to="#" className='fs-18 pb-6 d-inline-block text-white text-decoration-none orange-hover transition'>Become a Partner</Link></li> 
                    </ul>
                  </Col>
                  <Col md={6} lg={4} className="mb-20 mb-lg-0">
                    <h4 className="fs-22 text-white fw-bold mb-15 mb-lg-25">Socials</h4>
                    <ul className='list-unstyled d-flex align-items-center m-0'>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-linkedin"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-instagram"></i></Link></li>
                      <li><Link to="#" className="social_icn d-flex align-items-center justify-content-center"><i className="fa fa-telegram"></i></Link></li>
                    </ul>
                    <div className="country_currncy_sw d-flex align-items-center justify-content-between bg-white rounded-lg mt-30 mt-lg-45 px-4 py-3 max-w-370px">
                      <div className="fs-15 fs-lg-18 text-green mr-4">Language & Currency</div>
                      <div className="fs-15 fs-lg-18 text-green">USA | $</div>
                    </div>
                  </Col>
            </Row>
          </Container>
       </div>
       <div className="bottom-footer bg-dark-green pt-10 pb-10">
        <Container>
            <div className="text-center text-white fs-14">© 2022 2GAT2GET.com. All Rights Reserved.</div>
        </Container>
       </div>
    </footer>
  )
}

export default Footer