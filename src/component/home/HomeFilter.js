import React, { useState } from 'react'
import { Container, Tab, Nav, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import wedding from '../../assets/images/wedding.svg'

const HomeFilter = () => {
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
  return (<>
        <section className='pl-15 pr-15 pl-sm-35 pr-sm-35'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className='bg-light-orange pt-30 pb-90 pt-lg-100 pb-lg-140 rounded-lg'>
                    <Container>
                        <Nav variant="pills" className="get_filter_menu justify-content-start justify-content-lg-between flex-row">
                                <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Wedding/<br/> Celebration</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Retreat/ Events</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Extended Stays/ Furnished Rentals</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="four">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Unfurnished Homes</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="five">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Conferences/ Meeting</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="six">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Vacation Rentals</span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="seven">
                                    <div className='event_icn d-flex align-items-center justify-content-center'>
                                        <img src={wedding} alt="wedding" className='img-fluid'/>
                                    </div>
                                    <span className='event_name'>Office space/ Commercial Property</span>
                                </Nav.Link>
                                </Nav.Item>
                        </Nav>
                    </Container>
                </div>
                <Container>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className='tabs_filter'>
                                <div className='get_filter justify-content-between bg-theme-orange rounded-lg p-10'>
                                    <div className='inner_get_filter'>
                                    <Form className='d-flex flex-wrap get_search_form align-items-center'>
                                        <Form.Group className='form-group'>
                                        <Form.Control type="search" className='serch_fm_icn' placeholder="Search for Location" />
                                        </Form.Group>
                                        <Form.Group className='form-group'>
                                        <DatePicker className="form-control w-100 date_fm_icn" 
                                        minDate={new Date()}
                                        selected={startDate} dateFormat="d MMM yyyy" 
                                        onChange={(date) => setStartDate(date)} placeholderText="Date of Reservation"/>
                                        </Form.Group>
                                        <Form.Group className='form-group'>
                                        <DatePicker
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeCaption="Time"
                                        className="form-control w-100 time_fm_icn"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        minDate={new Date()}
                                        timeIntervals={60}
                                        dateFormat="h:mm aa"
                                        placeholderText="Time"
                                        />
                                        </Form.Group>
                                        <Form.Group className='form-group brdr_nn'>
                                        <div className='d-flex guest_input_group'>
                                            <Form.Control className='user_fm_icn' placeholder="Guests" disabled/>
                                            <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                                <div className="input-group-prepend">
                                                    <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                                </div>
                                                <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                                <div className="input-group-prepend">
                                                    <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        </Form.Group>
                                        <Button className='primary_btn ms-auto min-w-xl-200px' variant="primary" type="submit">Search</Button>
                                    </Form>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className='tabs_filter'>
                                    <div className='get_filter justify-content-between bg-theme-orange rounded-lg p-10'>
                                        <div className='inner_get_filter'>
                                        <Form className='d-flex flex-wrap get_search_form align-items-center'>
                                            <Form.Group className='form-group'>
                                            <Form.Control type="search" className='serch_fm_icn' placeholder="Search for Location" />
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                            minDate={new Date()}
                                            selected={startDate} dateFormat="d MMM yyyy" 
                                            onChange={(date) => setStartDate(date)} placeholderText="Date of Reservation"/>
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeCaption="Time"
                                            className="form-control w-100 time_fm_icn"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            minDate={new Date()}
                                            timeIntervals={60}
                                            dateFormat="h:mm aa"
                                            placeholderText="Time"
                                            />
                                            </Form.Group>
                                            <Form.Group className='form-group brdr_nn'>
                                            <div className='d-flex guest_input_group'>
                                            <Form.Control className='user_fm_icn' placeholder="No. of Person" disabled/>
                                            <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                                <div className="input-group-prepend">
                                                    <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                                </div>
                                                <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                                <div className="input-group-prepend">
                                                    <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                            </Form.Group>
                                            <Button className='primary_btn ms-auto min-w-xl-200px' variant="primary" type="submit">Search</Button>
                                        </Form>
                                        </div>
                                    </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div className='tabs_filter'>
                                    <div className='get_filter justify-content-between bg-theme-orange rounded-lg p-10'>
                                        <div className='inner_get_filter'>
                                        <Form className='d-flex flex-wrap get_search_form align-items-center'>
                                            <Form.Group className='form-group'>
                                            <Form.Control type="search" className='serch_fm_icn' placeholder="Search for Location" />
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                            minDate={new Date()}
                                            selected={startDate} dateFormat="d MMM yyyy" 
                                            onChange={(date) => setStartDate(date)} placeholderText="Check-in"/>
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                                minDate={startDate}
                                                selected={endDate} 
                                                endDate={endDate}
                                                dateFormat="d MMM yyyy" 
                                                onChange={(date) => setEndDate(date)} placeholderText="Check-out"/>
                                            </Form.Group>
                                            <Form.Group className='form-group brdr_nn'>
                                            <div className='d-flex guest_input_group'>
                                                <Form.Control className='user_fm_icn' placeholder="Guests" disabled/>
                                                <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                                    </div>
                                                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            </Form.Group>
                                            <Button className='primary_btn ms-auto min-w-xl-200px' variant="primary" type="submit">Search</Button>
                                        </Form>
                                        </div>
                                    </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            <div className='tabs_filter'>
                                    <div className='get_filter justify-content-between bg-theme-orange rounded-lg p-10'>
                                        <div className='inner_get_filter'>
                                        <Form className='d-flex flex-wrap get_search_form align-items-center'>
                                            <Form.Group className='form-group'>
                                            <Form.Control type="search" className='serch_fm_icn' placeholder="Search for Location" />
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                            minDate={new Date()}
                                            selected={startDate} dateFormat="d MMM yyyy" 
                                            onChange={(date) => setStartDate(date)} placeholderText="Check-in"/>
                                            </Form.Group>
                                            <Form.Group className='form-group'>
                                            <DatePicker className="form-control w-100 date_fm_icn" 
                                                minDate={startDate}
                                                selected={endDate} 
                                                endDate={endDate}
                                                dateFormat="d MMM yyyy" 
                                                onChange={(date) => setEndDate(date)} placeholderText="Check-out"/>
                                            </Form.Group>
                                            <Form.Group className='form-group brdr_nn'>
                                            <div className='d-flex guest_input_group'>
                                                <Form.Control className='user_fm_icn' placeholder="Guests" disabled/>
                                                <div className="input-group flex-nowrap input_number_box align-items-center min-w-90px max-w-90px">
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                                                    </div>
                                                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} readOnly/>
                                                    <div className="input-group-prepend">
                                                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            </Form.Group>
                                            <Button className='primary_btn ms-auto min-w-xl-200px' variant="primary" type="submit">Search</Button>
                                        </Form>
                                        </div>
                                    </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Container>
            </Tab.Container>
       </section>
    </>)
}

export default HomeFilter