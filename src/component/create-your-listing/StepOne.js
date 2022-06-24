import React from 'react'
import { Form } from 'react-bootstrap'
import Stats from './Stats';

const StepOne = (props) => {
  return (<>
    <div className='StepWizList'>
        <form>
              <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='wedding'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='wedding'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-1.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Wedding/Celebration</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='retreat'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='retreat'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-6.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Retreat/Events</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='stays'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='stays'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-7.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Extended Stays/Furnished Rentals</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='unfurnished'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='unfurnished'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-10.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Unfurnished Homes</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='conferences'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='conferences'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-12.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Conferences/Meeting</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='vacation'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='vacation'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-17.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Vacation Rentals</div>
                    </div>
               </div>
               <div className='hostMainBox w-100 mb-15 mb-lg-25'>
                    <input type="radio" className='hostRadio' name="steptype" id='office'/>
                    <div className='hostImgList d-flex align-items-center' htmlFor='office'>
                        <div className='hostImg'><img src={require("../../assets/images/fav-18.png")} className='img-fluid'/></div>
                        <div className='hostInfo text-green ff-cormorant fs-22 fs-lg-32 fw-600'>Office space/Commercial Property</div>
                    </div>
               </div>
        </form>
    <Stats step={1} {...props} />
   </div>
  </>)
}

export default StepOne