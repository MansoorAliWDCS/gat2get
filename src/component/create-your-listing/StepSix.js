import React from 'react'
import Stats from './Stats';

function StepSix(props) {
  const submit = () => {
    alert("You did it! Yay!"); // eslint-disable-line
  };
  return (<>
     <div>
      <div className={"text-center"}>
        <h3>This is the last step in this example!</h3>
        <hr />
      </div>
      <Stats step={4} {...props} nextStep={submit} />
    </div> 
    </> )
}

export default StepSix