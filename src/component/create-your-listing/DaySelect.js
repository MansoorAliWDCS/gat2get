import React from 'react'
import { Form } from 'react-bootstrap'

const DaySelect = () =>{
  return (<>
     <div className='hrly_time_picker d-flex align-items-center'>
        <div className='min-w-90 min-w-md-180px'>
            <Form.Select className='form-control'>
                <option value="1">11:00AM</option>
                <option value="1">12:00AM</option>
                <option value="1">01:00PM</option>
                <option value="1">02:00PM</option>
                <option value="1">03:00PM</option>
                <option value="1">04:00PM</option>
                <option value="1">05:00PM</option>
                <option value="1">06:00PM</option>
                <option value="1">07:00PM</option>
                <option value="1">08:00PM</option>
                <option value="1">09:00PM</option>
                <option value="2">10:00PM</option>
                <option value="3">11:00PM</option>
                <option value="3">12:00PM</option>
            </Form.Select>
        </div>
        <div className='fs-18 fw-500 text-green px-10 px-md-20'>To</div>
        <div className='min-w-90 min-w-md-180px'>
            <Form.Select className='form-control'>
                <option value="1">11:00AM</option>
                <option value="1">12:00AM</option>
                <option value="1">01:00PM</option>
                <option value="1">02:00PM</option>
                <option value="1">03:00PM</option>
                <option value="1">04:00PM</option>
                <option value="1">05:00PM</option>
                <option value="1">06:00PM</option>
                <option value="1">07:00PM</option>
                <option value="1">08:00PM</option>
                <option value="1">09:00PM</option>
                <option value="2">10:00PM</option>
                <option value="3">11:00PM</option>
                <option value="3">12:00PM</option>
            </Form.Select>
        </div>
     </div>
    </>)
}

export default DaySelect