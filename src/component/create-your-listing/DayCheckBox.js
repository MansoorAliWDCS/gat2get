import React from 'react'
import { Form } from 'react-bootstrap'

const DayCheckBox = ({checked, onChange}) => {
  return (<>
    <Form.Check 
    type="switch"
    className='custom-switch reverse_switch cursor-pointer'
    checked={checked}
    onChange={onChange}
  />
  </>)
}

export default DayCheckBox