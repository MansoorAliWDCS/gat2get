import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SearchFilter = () => {
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
      <div className='search_filter_v2 get_filter justify-content-between bg-theme-orange rounded-lg p-10 max-w-900px mx-auto'>
            <div className='inner_get_filter'>
                <Form className='d-flex flex-wrap get_search_form align-items-center'>
                    <Form.Group className='form-group'>
                      <Form.Control type="search" className='serch_fm_icn' value={"California, USA"} placeholder="Search for Location" />
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
                    <Button className='primary_btn ms-auto min-w-55px pl-10 pr-10' variant="primary" type="submit"><i className='fa fa-search'></i></Button>
                </Form>
            </div>
         </div>
    </>)
}

export default SearchFilter