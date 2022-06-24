import React, {useState} from 'react'
import { Container, Form, Dropdown, Button } from 'react-bootstrap'
import { Scrollbars } from 'react-custom-scrollbars';
import SVG from 'react-inlinesvg';
const Message = () =>{
  const [sendMessage, setsendMessage] = useState("");
  const handleChange = (event) => {
    setsendMessage({ 
      sendMessage: event.target.value
    });
  };
  return (<>
      <section className='pt-40 pb-40'>
        <Container>
            <div className='getMessageBox'>
               <div className='getUserInfo d-flex align-items-center justify-content-between bg-light-orange py-10 py-lg-15 px-15 px-lg-30'>
                 <div className='ff-cormorant fs-22 fs-lg-32 fw-600 text-green mr-6'>Chats</div>
                 <div className='userMsgDropdown'>
                    <Dropdown className='online_user cmn_drpdwnbx'  align="end">
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                           <img src={require('../../../assets/images/user-1.png')}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                 </div>
               </div>
               <div className='d-flex flex-wrap getUserDetails'>
                  <div className='getUserListBx'>
                     <div className='msg_serach_bar'>
                        <Form.Control type='search' placeholder='Search People and Group'/>
                     </div>
                     <Scrollbars autoHide
                        style={{ width: "100%", height: 650 }}
                        className="get_scroll_height">
                        <ul className="chat_list list-unstyled m-0">
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Yana Sabet</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">21 Apr</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Farzad Sabet</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">18 May</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center get_active get_online">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Terence Rodrigues</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">21 Apr</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Steve Smith</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">21 Apr</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Steve Smith</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">21 Apr</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Steve Smith</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">21 Apr</div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center get_online">
                            <div className="d-flex align-items-center">
                              <div className="chat_user_60">
                                <img
                                  src={require("../../../assets/images/user-1.png")}
                                  alt="User Pic"
                                />
                              </div>
                              <div className="ps-2">
                                <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Farzad Sabet</div>
                              </div>
                            </div>
                            <div className="fs-14 text-green">18 May</div>
                          </li>
                       </ul>
                     </Scrollbars>
                  </div>
                  <div className='getUserMessageBx pb-30'>
                      <div className='getMessageHeader bg-light-orange d-flex align-items-center justify-content-between'>
                        <div className="d-flex align-items-center">
                            <div className="chat_user_60">
                              <img
                                src={require("../../../assets/images/user-1.png")}
                                alt="User Pic"
                              />
                            </div>
                            <div className="ps-2">
                              <div className="fs-18 fs-lg-22 fw-600 text-green line-height-11">Farzad Sabet</div>
                              <div className="fs-14 text-green">Last seen 1:30PM</div>
                            </div>
                          </div>
                          <div className='right_dropdwn d-flex align-items-center'>
                            <div className='px-2'>
                               <Button variant='transparent shadow-none' className='p-0'>
                                <i className="fa fa-search text-green fs-18" aria-hidden="true"></i>
                               </Button>
                            </div>
                            <div className='px-2'>
                               <div className='msg_imgUpload'>
                                  <input type='file'/>
                                  <SVG src={require("../../../assets/images/img_upload_icn.svg").default}/>
                               </div>
                            </div>
                            <div className='userMsgDropdown px-2'>
                              <Dropdown className='online_user cmn_drpdwnbx'  align="end">
                                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='line-height-1'>
                                     <i className="fa fa-ellipsis-v text-green fs-20" aria-hidden="true"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                  </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                      </div>
                      <Scrollbars autoHide
                        style={{ width: "100%", height: 580, marginBottom: 20 }}
                        className="get_scroll_height">
                         <div className='px-15 px-lg-30 pt-15 pb-30'>
                            <div className='dayDayePanel my-15 fs-14 text-green'><span>18 October 2021</span></div>
                            <ul className='list-unstyled m-0'>
                              <li className='get_msg_list get_recievd_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-light-orange fs-16 p-15'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare.</div>
                                    <div className='fs-14 text-green'>Sent 01:51 PM</div>
                                  </div>
                              </li>
                              <li className='get_msg_list get_sent_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-green fs-16 p-15 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare. Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis</div>
                                    <div className='fs-14 text-green text-end'>Seen 01:51 PM</div>
                                  </div>
                              </li>
                              <li className='get_msg_list get_recievd_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-light-orange fs-16 p-15'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare.</div>
                                    <div className='fs-14 text-green'>Sent 01:51 PM</div>
                                  </div>
                              </li>
                              <li className='get_msg_list get_sent_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-green fs-16 p-15 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare. Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis</div>
                                    <div className='fs-14 text-green text-end'>Seen 01:51 PM</div>
                                  </div>
                              </li>
                              <li className='get_msg_list get_recievd_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-light-orange fs-16 p-15'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare.</div>
                                    <div className='fs-14 text-green'>Sent 01:51 PM</div>
                                  </div>
                              </li>
                              <li className='get_msg_list get_sent_msg'>
                                  <div className='mb-15'>
                                    <div className='bg-green fs-16 p-15 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis pulvinar tellus faucibus ornare. Lorem ipsum dolor sit amet consectetur adipiscing eget dui venenatis</div>
                                    <div className='fs-14 text-green text-end'>Seen 01:51 PM</div>
                                  </div>
                              </li>
                            </ul>
                         </div>
                      </Scrollbars>
                      <div className='msgInputBox d-flex align-items-center mx-15 mx-lg-25'>
                           <div className='mr-8 smileBtnSent'>
                              <Button variant='transparent' className='p-0 shadow-none'>
                                <i className="fa fa-smile-o text-green fs-32" aria-hidden="true"></i>
                              </Button>
                             </div>
                           <div className='getTypeInbox mr-8'>
                              <Form.Control type='text' placeholder='Type Something...' onChange={handleChange}/>
                           </div>
                           <div className='ms-auto uploadBtnSent'>
                            {sendMessage ? (
                                <Button variant="transparent" className="p-0 shadow-none">
                                <i
                                  className="fa fa-paper-plane-o text-white fs-17"
                                  aria-hidden="true"
                                ></i>
                              </Button>
                              ) : (
                                <Button variant="transparent" className="p-0 shadow-none">
                                  <SVG
                                    src={
                                      require("../../../assets/images/audio_upload.svg")
                                        .default
                                    }
                                  />
                              </Button>
                              )}
                           </div>
                      </div>
                  </div>
               </div>
            </div>
        </Container>
      </section>
    </>)
}

export default Message