import React, {useState, useEffect} from 'react'
import logo from '../../assets/images/logo.png';
import {Navbar, Offcanvas, Nav, Container, Image, Button, NavDropdown} from 'react-bootstrap'
import Login from '../modal/login/Login';
import ForgotPassword from '../modal/forgot-password/ForgotPassword';
import SignUp from '../modal/signup/SignUp';
import Verification from '../modal/varification/Varification';
import SetNewPassword from '../modal/set-new-password/SetNewPassword';
import Registration from '../modal/registration/Registration';
import VerificationPassword from '../modal/varification/VarificationPassword';


const Header = () => {
  
  //Sign up
  const [showSignup, setShowSignup] = useState(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

 //Login
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  //forgot Password
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleShowForgotPassword = () => {
    setShowForgotPassword(true);
    setShowLogin(false);
  };
  const handleCloseForgotPassword = () => setShowForgotPassword(false);

   //backtoLogin
   const backtoLogin = () => {
    setShowLogin(true);
    setShowForgotPassword(false);
  };

  //logintoSignup
  const logintoSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

   //signuptoLogin
   const signuptoLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };
  
  //Verification
  const [showVerification, setShowVerification] = useState(false);
  const handleShowVerification = () => {
    setShowVerification(true);
    setShowSignup(false);
  };
  const handleCloseVerification = () => setShowVerification(false);

  //VerificationPassword
  const [showVerificationPassword, setShowVerificationPassword] = useState(false);
  const handleShowVerificationPassword = () => {
    setShowVerificationPassword(true);
    setShowForgotPassword(false);
  };
  const handleCloseVerificationPassword = () => setShowVerificationPassword(false);

  //backtoSignup
  const backtoSignup = () => {
  setShowVerification(false);
  setShowSignup(true);
};

//SetNewPassword
const [showSetNewPassword, setShowSetNewPassword] = useState(false);
const handleShowNewPassword = () => {
  setShowSetNewPassword(true);
  setShowVerification(false);
};
const handleCloseSetNewPassword = () => setShowSetNewPassword(false);

//Registration
const [showRegistration, setShowRegistration] = useState(false);
const handleShowRegistration = () => {
  setShowRegistration(true);
  setShowVerification(false);
};
const handleCloseRegistration = () => setShowRegistration(false);

  return (
    <>
    {['lg'].map((expand) => (
   <Navbar id="navbar-example" key={expand} expand={expand} className="header" sticky="top" >
     <Container>
       <Navbar.Brand href="/"><Image src={logo} alt={"logo"}/></Navbar.Brand>
       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="ms-auto more_menu"/>
       <Navbar.Offcanvas
         id={`offcanvasNavbar-expand-${expand}`}
         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
         placement="end">
         <Offcanvas.Header closeButton></Offcanvas.Header>
         <Offcanvas.Body>
           <Nav className="nav_bar_ctm justify-content-end align-items-lg-center flex-grow-1 pe-3">
             <Nav.Link href="#">($) USD</Nav.Link>
             <Nav.Link href="#"><div className='country_flag'><img src={require("../../assets/images/usa-flag.png")} all="flag"/>English</div></Nav.Link>
             <Nav.Link onClick={handleShowLogin}>Log In</Nav.Link>
             <Nav.Link onClick={handleShowSignup}>Sign Up</Nav.Link>
           </Nav>
         </Offcanvas.Body>
       </Navbar.Offcanvas>
        <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17.5" viewBox="0 0 25 17.5">
                  <path id="hamburger" d="M235.173,276.55a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Zm0,7.5a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Zm0,7.5a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Z" transform="translate(-233.923 -276.55)" fill="#1f5b5e"/>
                </svg>} 
                id="basic-nav-dropdown" className='navbar_ctm_menu'  align="end">
              <NavDropdown.Item href="about-us" className='submenu_list'>About Us</NavDropdown.Item>
              <NavDropdown.Item href="become-host" className='submenu_list'>Become a Host</NavDropdown.Item>
              <NavDropdown.Divider className='bg-light-green' />
              <NavDropdown.Item href="message" className='submenu_list'>Message</NavDropdown.Item>
              <NavDropdown.Item href="#" className='submenu_list'>Manage Lising</NavDropdown.Item>
              <NavDropdown.Item href="#" className='submenu_list'>Notification</NavDropdown.Item>
              <NavDropdown.Item href="favourites" className='submenu_list'>Favorite</NavDropdown.Item>
              <NavDropdown.Item href="#" className='submenu_list'>Account</NavDropdown.Item>
              <NavDropdown.Item href="#" className='submenu_list'>Logout</NavDropdown.Item>
        </NavDropdown>
     </Container>
     <SignUp
      show={showSignup}
      onClose={handleCloseSignup}
      signuptoLogin={signuptoLogin}
      handleShowVerification={handleShowVerification}/>

     <Login 
      show={showLogin} 
      onClose={handleCloseLogin}
      handleShowForgotPassword={handleShowForgotPassword}
      logintoSignup={logintoSignup}/>

     <ForgotPassword 
      show={showForgotPassword} 
      onClose={handleCloseForgotPassword}
      handleShowVerificationPassword={handleShowVerificationPassword} 
      backtoLogin={backtoLogin}/>

      <Verification
       show={showVerification} 
       onClose={handleCloseVerification}
       handleShowNewPassword={handleShowNewPassword}
       handleShowRegistration={handleShowRegistration}
       backtoSignup={backtoSignup}/>

      <VerificationPassword
       show={showVerificationPassword} 
       onClose={handleCloseVerificationPassword}
       handleShowNewPassword={handleShowNewPassword}
       backtoSignup={backtoSignup}/>

      <SetNewPassword
       show={showSetNewPassword} 
       onClose={handleCloseSetNewPassword}/>

      <Registration
       show={showRegistration} 
       onClose={handleCloseRegistration}/>

   </Navbar>
   
 ))}

   </>
  )
}

export default Header