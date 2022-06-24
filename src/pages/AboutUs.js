import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (<>
     <section className='pb-40 pb-lg-100 px-15 px-md-35'>
         <img src={require("../assets/images/about-banner.png")} className='img-fluid rounded-lg'/>
     </section>
     <section className='pb-40 pb-lg-100'>
        <Container>
            <Row className='pb-20 pb-lg-80'>
                <Col lg={3}>
                  <h1 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>About Us</h1>
                </Col>
                <Col lg={8}>
                  <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                  <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={6} className='mb-15'>
                    <img src={require("../assets/images/about_1.png")} className='img-fluid rounded-lg'/>
                </Col>
                <Col sm={6} className='mb-15 mt-sm-60'>
                   <img src={require("../assets/images/about_2.png")} className='img-fluid rounded-lg'/>
                </Col>
            </Row>
        </Container>
     </section>
     <section className='pb-40 pb-lg-90'>
        <Container>
            <div className='text-center'>
                <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>Why?</h2>
                <div className='max-w-1050px mx-auto'>
                    <p className='fs-18 fs-lg-22'> In the past we've all had to trust accommodation reviews written by complete strangers. </p>
                    <p className='fs-18 fs-lg-22'>Apparently Tom from Seattle 'loved everything about it', but Paolina from Milan thought the home was 'filthy and stank of sewage'. Who is right? Who is wrong? Does Tom even exist? </p>
                    <p className='fs-18 fs-lg-22'>It's time for a quality standard the world can trust.</p>
                </div>
            </div>
        </Container>
     </section>
     <section className='pb-40 pb-lg-90'>
        <Container>
            <div className='text-center pb-20 pb-lg-40'>
                <h3 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>Founders</h3>
                <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Row>
                <Col md={4} className='mb-20'>
                    <div className='getFoundBox'>
                        <div className='getFoundImg'>
                            <img src={require("../assets/images/1.png")} className='img-fluid'/>
                        </div>
                        <div className='getFoundInfo'>
                            <div className='fs-18 fs-lg-22 fw-600 text-green'>Farzad Sabet</div>
                            <div className='fs-16 fs-lg-18 text-green'>Co-founder and Chief Executive Officer</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className='mb-20'>
                    <div className='getFoundBox'>
                        <div className='getFoundImg'>
                           <img src={require("../assets/images/2.png")} className='img-fluid'/>
                        </div>
                        <div className='getFoundInfo'>
                            <div className='fs-18 fs-lg-22 fw-600 text-green'>Yana Sabet</div>
                            <div className='fs-16 fs-lg-18 text-green'>Co-founder</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className='mb-20'>
                    <div className='getFoundBox'>
                        <div className='getFoundImg'>
                           <img src={require("../assets/images/3.png")} className='img-fluid'/>
                        </div>
                        <div className='getFoundInfo'>
                            <div className='fs-18 fs-lg-22 fw-600 text-green'>Terence Rodrigues</div>
                            <div className='fs-16 fs-lg-18 text-green'>Chief Operations</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
     <section className='pb-40 pb-lg-90'>
        <Container>
            <div className='text-center pb-20 pb-lg-40'>
                <h3 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-6'>This is What We Promise</h3>
                <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Row>
                <Col lg={7} className='mb-30'>
                    <Accordion className='about_accordian max-w-lg-650px' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What You see is What You’ll Get</Accordion.Header>
                            <Accordion.Body>
                            Every nominated and awarded home on Plum Guide has been subject to a meticulous, multi-stage vetting process. We’re taking the headache and anxiety out of booking a home.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>You'll Never Pay More</Accordion.Header>
                            <Accordion.Body>
                            Every nominated and awarded home on Plum Guide has been subject to a meticulous, multi-stage vetting process. We’re taking the headache and anxiety out of booking a home.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>We're Here Every Step of The Way</Accordion.Header>
                            <Accordion.Body>
                            Every nominated and awarded home on Plum Guide has been subject to a meticulous, multi-stage vetting process. We’re taking the headache and anxiety out of booking a home.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Excellent Stay</Accordion.Header>
                            <Accordion.Body>
                            Every nominated and awarded home on Plum Guide has been subject to a meticulous, multi-stage vetting process. We’re taking the headache and anxiety out of booking a home.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col lg={5} className='mb-30'>
                    <div className='getPromiseImg text-center text-lg-start'>
                      <img src={require("../assets/images/we-promise.svg").default} className='img-fluid'/>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
     <section className='pb-40 pb-lg-100'>
        <Container>
            <div className='getGoodCompany position-relative'>
                <div className='getGoodCmnyImg'>
                    <span style={{background: `url(${require("../assets/images/about-work.png")}) no-repeat scroll center center / cover`}}></span>
                </div>
                <div className='getGoodCmnyInfo text-center max-w-800px mx-auto'>
                    <div className='ff-cormorant fs-36 fs-md-52 fs-xl-72 fw-bold text-white pb-10 line-height-12'>Work With Us</div>
                    <div className='fs-20 fs-md-22 fs-xl-26 text-white pb-25 pb-sm-40'>We hope to become the most admired hospitality brand in the world. Help us get there.</div>
                    <Link to="/propery-list" className='cmn-btn white-cmn-btn'>Browse Positions</Link>
                </div>
            </div>
        </Container>
    </section>
    </>)
}

export default AboutUs