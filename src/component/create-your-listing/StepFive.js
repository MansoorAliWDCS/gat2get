import React from 'react'
import Stats from './Stats';

function StepFive(props) {
  return (<>
    <div className='StepWizList'>
     <div>Five</div>
    <Stats step={5} {...props} />
  </div>
  </>)
}

export default StepFive