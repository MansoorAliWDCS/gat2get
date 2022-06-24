import React from 'react'
import Stats from './Stats';

const StepFour = (props) =>{
  return (<>
    <div className='StepWizList'>
       <div>Four</div>
     <Stats step={4} {...props} />
    </div>
  </>)
}

export default StepFour