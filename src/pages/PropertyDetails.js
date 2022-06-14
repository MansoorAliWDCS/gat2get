import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import ListItem from '../component/Common/ListItem';
import { Link } from 'react-router-dom'
import SearchFilter from '../component/Common/SearchFilter'
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs';
import Destinations from '../component/Common/Destinations';
import Faq from '../component/Common/Faq';
import PropertyGallery from '../component/property-details/PropertyGallery';
import Amenities from '../component/property-details/Amenities';

const PropertyDetails = () =>{
  return (<>
     <section className='bg-light-orange pt-10 pb-30 pb-lg-60 mt-80'>
       <Container>
          <SearchFilter/>
          <div className='pt-50'>
             <div className='d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap'>
              <div className='mr-lg-10 mb-15 mb-lg-0 w-100 w-lg-auto order-1 order-lg-0'>
                 <Breadcrumbs/>
              </div>
             </div>
          </div>
       </Container>
    </section>
    <PropertyGallery/>
    <Amenities/>
    <section className='pb-40 pb-lg-80'>
        <div className='container'>
            <div className='text-center pb-40'>
                <h3 className='ff-cormorant fw-bold fs-26 fs-lg-32 text-green position-relative under_border_title'>Compare with Similar Property</h3>
             </div>
            <Row>
                <Col sm={6} lg={4} xl={3} className="custm_items_cols mb-20 ">
                <ListItem/>
                </Col>
                <Col sm={6} lg={4} xl={3} className="custm_items_cols mb-20 ">
                <ListItem/>
                </Col>
                <Col sm={6} lg={4} xl={3} className="custm_items_cols mb-20 ">
                <ListItem/>
                </Col>
                <Col sm={6} lg={4} xl={3} className="custm_items_cols mb-20 ">
                <ListItem/>
                </Col>
            </Row>
            <div className='text-center mt-20'>
                 <Link to={"/propery-list"} className='cmn-btn'>Explore Wedding Venue</Link>
            </div>
        </div>
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

export default PropertyDetails