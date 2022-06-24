import React from 'react';
import { Nav } from 'react-bootstrap'

const StepNav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <Nav.Item key={`step-${i}`}>
                <div className={"nav-link " + (isActive ? 'active' : '')} onClick={() => props.goToStep(i)}>
                    <span
                    className="lcn_name dots"
                >0{i}</span>
                </div>
            </Nav.Item>
        ));
    }

    return (<>
           <Nav variant="pills" className="location_menu_tabs stepNavTabs justify-content-between flex-row flex-nowrap mb-30 mb-lg-60">
               {dots}
           </Nav>
        </>);
};

export default StepNav;