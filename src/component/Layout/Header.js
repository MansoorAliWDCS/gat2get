import React, {useState, useEffect} from 'react'
import logo from '../../assets/images/logo.png';
import {Navbar, Offcanvas, Nav, Container, Image} from 'react-bootstrap'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [effect,setEffect] = useState('')
  useEffect(()=>{
    if (isOpen) {
      setEffect('fadeIn')
    } else {
      setEffect('fadeOut')
    }
  }, [isOpen])
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
             <Nav.Link href="#">Log In</Nav.Link>
             <Nav.Link href="#">Sign Up</Nav.Link>
           </Nav>
         </Offcanvas.Body>
       </Navbar.Offcanvas>
       <div className='navbar_ctm_menu position-relative'>
               <button className='hamburger-menu' type="button" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17.5" viewBox="0 0 25 17.5">
                  <path id="hamburger" d="M235.173,276.55a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Zm0,7.5a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Zm0,7.5a1.25,1.25,0,1,0,0,2.5h22.5a1.25,1.25,0,0,0,0-2.5Z" transform="translate(-233.923 -276.55)" fill="#1f5b5e"/>
                </svg>
               </button>
               {isOpen && (
                <div className={`inner_menu_list ${effect}`}>
                  <ul className='list-unstyled px-4 m-0 pb-2 borderd-bottom'>
                    <li><Nav.Link href='#' className='submenu_list'>About Us</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Become a Host</Nav.Link></li>
                  </ul>
                  <ul className='list-unstyled px-4 m-0 pt-1'> 
                    <li><Nav.Link href='#' className='submenu_list'>Message</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Manage Lising</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Notification</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Favorite</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Account</Nav.Link></li>
                    <li><Nav.Link href='#' className='submenu_list'>Logout</Nav.Link></li>
                  </ul>
                </div>
               )}
           </div>
     </Container>
   </Navbar>
   
 ))}
   </>
  )
}

export default Header