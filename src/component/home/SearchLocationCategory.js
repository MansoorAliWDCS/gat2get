import React from 'react'
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ListItem from '../Common/ListItem'


const SearchLocationCategory = () =>{
  return (<>
     <section className='pb-40 pb-lg-100'>
        <Container>
            <div className='text-center pb-30 pb-lg-60'>
            <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Search Location/Venue From Below Categories</h2>
            <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Tab.Container id="location-tabs" defaultActiveKey="wedding">
            <Nav variant="pills" className="location_menu_tabs justify-content-between flex-row flex-nowrap mb-30 mb-lg-60">
                <Nav.Item>
                    <Nav.Link eventKey="wedding">
                    <span className='lcn_name'>Wedding/Celebration</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="retreat">
                    <span className='lcn_name'>Retreat/Events</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="rentals">
                    <span className='lcn_name'>Extended Stays/Furnished Rentals</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="unfurnished">
                    <span className='lcn_name'>Unfurnished Homes</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="meeting">
                    <span className='lcn_name'>Conferences/Meeting</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="vacation">
                    <span className='lcn_name'>Vacation Rentals</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="officespace">
                    <span className='lcn_name'>Officespace/Commercial Property</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="wedding">
                    <Row>
                    <Col md={6} className="mb-20 mb-md-0">
                        <div className='pr-md-30'>
                            <img src={require("../../assets/images/wedding.png")} className='img-fluid rounded-lg'/>
                        </div>
                    </Col>
                    <Col md={6} className="align-self-center">
                        <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Wedding/Celebration</h2>
                        <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    </Row>
                    <Row className='pt-50'>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    </Row>
                    <div className='text-center mt-20'>
                     <Link to={"/list-item"} className='cmn-btn'>Explore Wedding Venue</Link>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="retreat">
                <Row>
                    <Col md={6} className="mb-20 mb-md-0">
                        <div className='pr-md-30'>
                            <img src={require("../../assets/images/wedding.png")} className='img-fluid rounded-lg'/>
                        </div>
                    </Col>
                    <Col md={6} className="align-self-center">
                        <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Wedding/Celebration</h2>
                        <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    </Row>
                    <Row className='pt-50'>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    <Col sm={6} xl={3} className="mb-20">
                        <ListItem/>
                    </Col>
                    </Row>
                    <div className='text-center mt-20'>
                    <button className='cmn-btn'>Explore Wedding Venue</button>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="rentals">
                sf
                </Tab.Pane>
                <Tab.Pane eventKey="unfurnished">
                sf
                </Tab.Pane>
                <Tab.Pane eventKey="meeting">
                sf
                </Tab.Pane>
                <Tab.Pane eventKey="vacation">
                sf
                </Tab.Pane>
                <Tab.Pane eventKey="officespace">
                sf
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        </Container>
   </section>
  </>)
}

export default SearchLocationCategory