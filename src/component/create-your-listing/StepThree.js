import React, {useState} from 'react'
import { Col, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import Stats from './Stats';

const StepThree = (props) =>{
   //increment hours
   let [num, setNum]= useState(1);
   const incrementCounter = () => setNum(num + 1);
   let decrementCounter = () => setNum(num - 1);
   if(num<=1) {
     decrementCounter = () => setNum(1);
   }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  return (<>
    <div className='StepWizList'>
      <Form>
         <div className='fs-18 fs-lg-26 fw-bold text-green mb-20 mb-lg-30 d-block'>Select Category</div>
         <div className='d-flex flex-wrap align-items-center justify-content-center mb-30 mb-lg-40'>
             <Form.Group className="mb-3 getCatBox" controlId="ballrooms">
                <Form.Check type="checkbox" label="+ Ballrooms" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="community">
                <Form.Check type="checkbox" label="+ Community Center" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="bed">
                <Form.Check type="checkbox" label="+ Bed & Breakfast / Inn" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="banquet">
                <Form.Check type="checkbox" label="+ Banquet Hall/Restaurant" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="golf">
                <Form.Check type="checkbox" label="+ Golf Course" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="church">
                <Form.Check type="checkbox" label="+ Church/Temple" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="event">
                <Form.Check type="checkbox" label="+ Event Center" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="loft">
                <Form.Check type="checkbox" label="+ Loft" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="luau">
                <Form.Check type="checkbox" label="+ Luau" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="mansion">
                <Form.Check type="checkbox" label="+ Mansion" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="museum">
                <Form.Check type="checkbox" label="+ Museum/Gallery" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="club">
                <Form.Check type="checkbox" label="+ Private Club" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="estate">
                <Form.Check type="checkbox" label="+ Private Estate" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="rustic">
                <Form.Check type="checkbox" label="+ Rustic & Barn" />
             </Form.Group>
             <Form.Group className="mb-3 getCatBox" controlId="winery">
                <Form.Check type="checkbox" label="+ Winery/Vineyard/Brewery" />
             </Form.Group>
         </div>
         <Row className='align-items-center mb-20 mb-lg-30'>
            <Col md={8} className="mb-15 mb-md-0">
                <Row className='align-items-center'>
                  <Col md={5}>
                     <div className='fs-18 text-green fw-500'>Bed & Breakfast / Inn</div>
                  </Col>
                  <Col md={7}>
                      <InputGroup className="GetCatHourlyBox">
                          <InputGroup.Text className='CatpriceBox'>$</InputGroup.Text>
                          <FormControl aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text className='CatTimeBox'>Hour</InputGroup.Text>
                      </InputGroup>
                  </Col>
                </Row>
            </Col>
            <Col md={4} className='text-md-end'>
              <div className="input-group round-counter flex-nowrap align-items-center max-w-150px ms-md-auto">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
            </Col>
         </Row>
         <Row className='align-items-center mb-20 mb-lg-25'>
            <Col md={8} className="mb-15 mb-md-0">
                <Row className='align-items-center'>
                  <Col md={5}>
                     <div className='fs-18 text-green fw-500'>Church/Temple</div>
                  </Col>
                  <Col md={7}>
                      <InputGroup className="GetCatHourlyBox">
                          <InputGroup.Text className='CatpriceBox'>$</InputGroup.Text>
                          <FormControl aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text className='CatTimeBox'>Hour</InputGroup.Text>
                      </InputGroup>
                  </Col>
                </Row>
            </Col>
            <Col md={4} className='text-md-end'>
              <div className="input-group round-counter flex-nowrap align-items-center max-w-150px ms-md-auto">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
            </Col>
         </Row>
         <Row className='align-items-center mb-20 mb-lg-25'>
            <Col md={8} className="mb-15 mb-md-0">
                <Row className='align-items-center'>
                  <Col md={5}>
                     <div className='fs-18 text-green fw-500'>Loft</div>
                  </Col>
                  <Col md={7}>
                      <InputGroup className="GetCatHourlyBox">
                          <InputGroup.Text className='CatpriceBox'>$</InputGroup.Text>
                          <FormControl aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text className='CatTimeBox'>Hour</InputGroup.Text>
                      </InputGroup>
                  </Col>
                </Row>
            </Col>
            <Col md={4} className='text-md-end'>
              <div className="input-group round-counter flex-nowrap align-items-center max-w-150px ms-md-auto">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
            </Col>
         </Row>
         <Row className='align-items-center mb-20 mb-lg-25'>
            <Col md={8} className="mb-15 mb-md-0">
                <Row className='align-items-center'>
                  <Col md={5}>
                     <div className='fs-18 text-green fw-500'>Mansion</div>
                  </Col>
                  <Col md={7}>
                      <InputGroup className="GetCatHourlyBox">
                          <InputGroup.Text className='CatpriceBox'>$</InputGroup.Text>
                          <FormControl aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text className='CatTimeBox'>Hour</InputGroup.Text>
                      </InputGroup>
                  </Col>
                </Row>
            </Col>
            <Col md={4} className='text-md-end'>
              <div className="input-group round-counter flex-nowrap align-items-center max-w-150px ms-md-auto">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
            </Col>
         </Row>
         <Row className='align-items-center mb-20 mb-lg-25'>
            <Col md={8} className="mb-15 mb-md-0">
                <Row className='align-items-center'>
                  <Col md={5}>
                     <div className='fs-18 text-green fw-500'>Private Estate</div>
                  </Col>
                  <Col md={7}>
                      <InputGroup className="GetCatHourlyBox">
                          <InputGroup.Text className='CatpriceBox'>$</InputGroup.Text>
                          <FormControl aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text className='CatTimeBox'>Hour</InputGroup.Text>
                      </InputGroup>
                  </Col>
                </Row>
            </Col>
            <Col md={4} className='text-md-end'>
              <div className="input-group round-counter flex-nowrap align-items-center max-w-150px ms-md-auto">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
            </Col>
         </Row>
         <hr className='bg-light-green mb-30 mt-lg-30 h-2px'/>
      </Form>
      <Stats step={3} {...props} />
    </div>
  </>)
}

export default StepThree