import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ListItem from '../component/Common/ListItem';
import Destinations from '../component/Common/Destinations';
import Faq from '../component/Common/Faq';
import HomeFilter from '../component/home/HomeFilter';
import HotFavDestination from '../component/home/HotFavDestination';
import SearchLocationCategory from '../component/home/SearchLocationCategory';

const HomePage = () => {
  return (<>
   <HomeFilter/>
   <HotFavDestination/>
   <SearchLocationCategory/>
   <section className='pb-40 pb-lg-100'>
     <Container>
        <div className='text-center pb-30 pb-lg-60'>
           <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Most Visited Properties</h2>
           <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Row>
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
     </Container>
  </section>
  <section className='pb-40 pb-lg-100'>
     <Container>
        <div className='text-center pb-30 pb-lg-60'>
           <h2 className='ff-cormorant fs-36 fs-md-45 fs-xl-55 fw-bold text-green pb-10'>Newly Added Properties</h2>
           <p className='fs-18 text-green max-w-1050px mx-auto'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Row>
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

export default HomePage