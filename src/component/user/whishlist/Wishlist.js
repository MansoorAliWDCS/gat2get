import React, { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import Destinations from '../../Common/Destinations';
import Faq from '../../Common/Faq';
import ListItem from '../../Common/ListItem';
import SearchFilter from '../../Common/SearchFilter';
import Select from 'react-select';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import Map from '../../Common/map/Map';

//selectpicker
const categories = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Wedding/Celebration', label: 'Wedding/Celebration' },
    { value: 'Retreat/ Events', label: 'Retreat/ Events' },
  ];
  const price = [
    { value: '$200', label: '$200' },
    { value: '$300', label: '$300' },
    { value: '$400', label: '$400' },
  ];
  const amenities = [
    { value: 'Spa', label: 'Spa' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'WiFi', label: 'WiFi' },
  ];
const Wishlist = () =>{
    //selectpicker
    const [categriesOption, setCategriesOption] = useState(null);

    //checkbox checked
    const [isMapBoxShown, setIsMapBoxShown] = useState(true);
    const checkboxHandler = () => {
        setIsMapBoxShown(!isMapBoxShown);
    };
    return (<>
        <section className='bg-light-orange pt-10 pb-30 pb-lg-60 mt-80'>
           <Container>
              <SearchFilter/>
              <div className='pt-50'>
                 <div className='d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap'>
                   <div className='mr-10 mb-15 mb-lg-0 order-2 order-lg-0'>
                    <Select
                        defaultValue={categriesOption}
                        onChange={setCategriesOption}
                        options={categories}
                        className="custom-selectpicker min-w-200px"
                        classNamePrefix="gatSelect"
                        placeholder= "All Categories"
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: "#B6C8C1",
                            primary75: "#B6C8C1",
                            primary50: "#B6C8C1",
                            primary: "#0D5551",
                          },
                        })}
                        />
                   </div>
                  <div className='mr-lg-10 mb-15 mb-lg-0 w-100 w-lg-auto order-1 order-lg-0'>
                     <Breadcrumbs/>
                  </div>
                  <div className='mb-15 mb-lg-0 d-flex flex-wrap flex-lg-nowrap align-items-center order-3 order-lg-0'>
                   <Button className='borderd-btn mr-10 mb-10 mb-lg-0 bg-white'><i className="fa fa-external-link" aria-hidden="true"></i></Button>
                    <Select
                      defaultValue={categriesOption}
                      onChange={setCategriesOption}
                      options={price}
                      className="custom-selectpicker min-w-160px mr-10 mb-10 mb-lg-0"
                      classNamePrefix="gatSelect"
                      placeholder= "Price"
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: "#B6C8C1",
                          primary75: "#B6C8C1",
                          primary50: "#B6C8C1",
                          primary: "#0D5551",
                        },
                      })}
                      />
                      <Select
                      defaultValue={categriesOption}
                      onChange={setCategriesOption}
                      options={amenities}
                      className="custom-selectpicker min-w-160px mb-10 mb-lg-0"
                      classNamePrefix="gatSelect"
                      placeholder= "Amenities"
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: "#B6C8C1",
                          primary75: "#B6C8C1",
                          primary50: "#B6C8C1",
                          primary: "#0D5551",
                        },
                      })}
                      />
                  </div>
                 </div>
              </div>
           </Container>
        </section>
        <section className='pt-40 pt-lg-60 pb-40 pb-lg-100'>
           <Container>
              <div className='d-flex align-items-center justify-content-between pb-30'>
                 <div className='fs-22 fw-bold text-green mb-10 mr-10'>7 Results</div>
                 <div className='mb-10'>
                  <Form.Check 
                      type="switch"
                      id="custom-switch"
                      checked={!isMapBoxShown}
                      onChange={checkboxHandler}
                      label="Show Map" 
                      className='custom-switch reverse_switch d-flex align-items-center flex-row-reverse'
                    />
                 </div>
              </div>
              <Row className={"flex-column-reverse flex-lg-row " + (!isMapBoxShown ? 'mapshow' : 'maphidden')}>
                 <Col lg={12} className="list_items_gat">
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
                 </Col>
                 {!isMapBoxShown && 
                   <Col lg={6} className="map_gat mb-30">
                      <Map/>
                   </Col>
                 }
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

export default Wishlist