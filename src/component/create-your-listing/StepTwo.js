import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import DayCheckBox from './DayCheckBox';
import DaySelect from './DaySelect';
import Stats from './Stats';

const StepTwo = (props) =>{
  //radio show hide
  const [status, setStatus] = useState(1) // 0: no show, 1: show yes, 2: show no.
  const radioHandler = (status) => {
    setStatus(status);
  };

  //checkbox checked
  const [dayStatus, setDayStatus] = useState({
    "Monday": true,
    "Tuesday": true,
    "Wednesday": true,
    "Thursday": true,
    "Friday": true,
    "Saturday": true,
    "Sunday": false,
  })
  const checkboxTimeHandler = (day) => {
    setDayStatus((preValues) => {
      return {
        ...preValues,
        [day]: !preValues[day],
      }
    })
  };

  //increment hours
  let [num, setNum]= useState(0);
  let incrementCounter =()=>{
    if(num<48)
    {
    setNum((num)+1);
    }
  };
  let decrementCounter = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
  let handleChange = (e)=>{
    setNum(e.target.value);
   }
   //fileupload
   const [fileupload, setFileupload] = useState(null);
    function handleImageChange(e) {
        setFileupload(e.target.files[0].name);
    };
    //console.log(fileupload !== null, 'fileupload !== undefined')
    let file = fileupload ? ( <span>{fileupload}</span>) : ( <span>Upload .doc, .pdf or .notepad file</span> );
 return (<>
      <div className='StepWizList'>
        <Form className='cmn_form'>
           <Form.Group className='mb-30'>
            <Form.Label className='fs-18 fs-lg-26 fw-bold text-green mb-20'>Name your Space</Form.Label>
             <Form.Control type='text' className='min-h-140px fw-bold plchld_bigtxt' placeholder='The Best Wedding/Celebration Venues in California'/>
           </Form.Group>
           <hr className='bg-light-green mb-30 h-2px'/>
            <div className='mb-30'>
              <div className='fs-18 fs-lg-26 fw-bold text-green mb-20 d-block'>Define your Space availability</div>
              <div className='d-flex pb-20'>
                <Form.Group className="mb-3 custom_radio fs-18 text-green fw-500 mr-20" controlId="hourly">
                  <Form.Check type="radio" name="availabity" checked={status === 1} onChange={(e) => radioHandler(1)} label="Hourly" />
                </Form.Group>
                <Form.Group className="mb-3 custom_radio fs-18 text-green fw-500 mr-20" controlId="daily">
                  <Form.Check type="radio"  name="availabity" checked={status === 2} onChange={(e) => radioHandler(2)} label="Daily" />
                </Form.Group>
                <Form.Group className="mb-3 custom_radio fs-18 text-green fw-500 mr-20" controlId="monthly">
                  <Form.Check type="radio"  name="availabity" checked={status === 3} onChange={(e) => radioHandler(3)} label="Monthly" />
                </Form.Group>
              </div>
              {status === 1 && 
                 <div className='mainTimelyBox'>
                    <div className='d-flex justify-content-between align-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Monday</div>
                            {dayStatus["Monday"] ? (
                               <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                           checked={dayStatus["Monday"]}
                          onChange={() => checkboxTimeHandler("Monday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Tuesday</div>
                            {dayStatus["Tuesday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Tuesday"]}
                          onChange={() => checkboxTimeHandler("Tuesday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Wednesday</div>
                            {dayStatus["Wednesday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Wednesday"]}
                          onChange={() => checkboxTimeHandler("Wednesday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Thursday</div>
                            {dayStatus["Thursday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Thursday"]}
                          onChange={() => checkboxTimeHandler("Thursday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Friday</div>
                            {dayStatus["Friday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Friday"]}
                          onChange={() => checkboxTimeHandler("Friday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Saturday</div>
                            {dayStatus["Saturday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Saturday"]}
                          onChange={() => checkboxTimeHandler("Saturday")}/>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between lign-items-md-center mb-30'>
                      <div className='d-md-flex align-items-center mr-10'>
                        <div className='fs-18 fw-500 text-green mr-10 min-w-120px mb-10 mb-md-0'>Sunday</div>
                            {dayStatus["Sunday"] ? (
                              <DaySelect/>
                            ) : (
                              <div className='fs-18 text-danger'>Closed</div>
                            )}
                      </div>
                      <div className='checkbox_Box'>
                        <DayCheckBox 
                          checked={dayStatus["Sunday"]}
                          onChange={() => checkboxTimeHandler("Sunday")}/>
                      </div>
                    </div>
                 </div>
                }
              {status === 2 && 
                <div className='mainTimelyBox'>
                  Daily
                </div>
              }
              {status === 3 && 
                <div className='mainTimelyBox'>
                  Monthly
                </div>
              }
           </div>
           <hr className='bg-light-green mb-30 h-2px'/>
           <div className='mb-30'>
            <div className='d-md-flex align-items-center justify-content-between'>
              <div className='fs-18 fs-lg-26 fw-bold text-green mr-30 mb-15 mb-md-0'>Space ready in</div>
              <div className="input-group flex-nowrap input_number_box_listing align-items-center pr-md-20 mx-md-auto w-md-400px min-w-md-400px max-w-400px">
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={decrementCounter}>-</button>
                    </div>
                    <input type="text" className="input_frm_ctrl" value={num} onChange={handleChange} placeholder='0 to 48 Hours'/>
                    <div className="input-group-prepend">
                        <button className="btn input_btn" type="button" onClick={incrementCounter}>+</button>
                    </div>
               </div>
              <div className='fs-18 text-green max-w-md-200px mt-10 mt-md-0 ms-md-auto line-height-12'>How many hours in advance needs to have the space ready.</div>
            </div>
           </div>
           <hr className='bg-light-green mb-30 h-2px'/>
           <div className='mb-30'>
            <Form.Group className='mb-30'>
                <Form.Label className='fs-18 fs-lg-26 fw-bold text-green mb-20'>General Rules & Exemptions</Form.Label>
                <Form.Control as="textarea" rows={3} className='min-h-140px fw-bold' placeholder='Enter your Rules and Exemptions'/>
            </Form.Group>
           </div>
           <hr className='bg-light-green mb-30 h-2px'/>
           <div className='mb-30'>
            <Form.Group className='mb-30'>
                <Form.Label className='fs-18 fs-lg-26 fw-bold text-green mb-20'>Cancellation Policy (if any)</Form.Label>
                <Form.Control as="textarea" rows={3} className='min-h-100px fw-bold' placeholder='Enter your Rules and Exemptions'/>
            </Form.Group>
            <div className='fs-18 text-green mt-8 mb-20 d-block text-center'>or</div>
            <div className='mb-30'>
              <Form.Group className='custom-fileupload'>
                  <Form.Control className="custom-file-input min-h-80px fw-bold" id="file" type="file" name="selectedFile" onChange={handleImageChange}/>
                  <Form.Label className='custom-file-label' htmlFor="file">{file}</Form.Label>
                  <span className='primary_btn btn btn-primary'>Upload Document</span>
              </Form.Group>
            </div>
           </div>
           <hr className='bg-light-green mb-30 h-2px'/>
        </Form>
         <Stats step={2} {...props}/>
      </div>
    </>)
}

export default StepTwo