import React, {Fragment, useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import StepWizard from "react-step-wizard";
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepNav from './StepNav';

const CreateYourListing = (props) => {
    //Step Wizard
    const [step, setStep] = useState(1);
    const [state, updateState] = useState({
      form: {},
    });
    let noTransitions = {
      enterRight: '',
      enterLeft: '',
      exitRight: '',
      exitLeft: ''
    };
  
    // Do something on step change
    const onStepChange = (stats) => {
      // console.log(stats);
    };
  
    const setInstance = (SW) =>
      updateState({
        ...state,
        SW
      });
  
  return (<>
    <section className='bg-light-orange pb-30 pb-lg-50'>
        <Container>
            <div className='pt-50'>
                <div className='text-center'>
                {step == 1 && (
                 <Fragment>
                    <h1 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>What kind of place will you Host?</h1>
                    <p className='fs-16 fs-xl-18 text-green'>People don’t buy just listings; they buy lifestyles.</p>
                 </Fragment>
                )}
                {step > 2 && (
                  <Fragment>
                  <h1 className='ff-cormorant fs-32 fs-md-38 fs-xl-45 fw-bold text-green'>sdfs</h1>
                  <p className='fs-16 fs-xl-18 text-green'>sd</p>
                 </Fragment>
                )}
                </div>
            </div>  
        </Container>
    </section>
    <section className='pt-40 pt-lg-100 pb-40 pb-lg-100'>
      <Container>
         <div className='getStepWizard'>
          <StepWizard
            onStepChange={onStepChange}
            isHashEnabled
            transitions={noTransitions}
            nav={<StepNav />}
            instance={setInstance}>
            <StepOne/>
            <StepTwo/>
            <StepThree/>
            <StepFour/>
            <StepFive/>
            <StepSix hashKey={"TheEnd!"} />
          </StepWizard>
         </div>
      </Container>
    </section>
    </>)
}

export default CreateYourListing