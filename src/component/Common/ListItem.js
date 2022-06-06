import React from 'react'
import { Link } from 'react-router-dom'
import ItemBg from "../../assets/images/item_1.png";
import SVG from 'react-inlinesvg';

const ListItem = () => {
  return (<>
    <div className='get_list_items'>
        <Link to="#" className='text-decoration-none'>
            <div className='get_top_items_info position-relative mb-20'>
                <div className='inner_list_items_img'>
                    <span style={{background: "url(" + ItemBg + ") no-repeat scroll center center / cover"}}></span>
                </div>
                <div className='list_iems_users'>
                    <div className='d-flex align-items-center'>
                        <img src={require("../../assets/images/user.png")} className="user_img"/>
                        <span className='user_name gat_ellips'>By Josheph</span>
                    </div>
                </div>
                <div className='list_iems_actions'>
                    <button className='wishlist_btn'><SVG src={require("../../assets/images/wishlist_blank.svg").default}/></button>
                </div>
            </div>
            <div className='get_bottom_items_info'>
               <div className='d-flex justify-content-between align-items-center mb-8'>
                    <div className='fs-18 fs-xxl-22 fw-bold text-green mr-6'>$1,200/-</div>
                    <div className='items_reviews bg-white rounded-lg px-2 px-xxl-3 py-2'>
                        <div className='d-flex align-items-center fs-14 fs-xxl-16 fw-500 text-green'>
                            <i className='fa fa-star mr-6'></i>4.20 (780 Reviews)
                        </div>
                    </div>
                </div>
                <div className='ff-cormorant fs-28 fs-xxl-32 fw-600 text-green gat_ellips'>The Pavilion at Star Lake</div>
                <div className='fs-18 text-green gat_ellips'>California, USA</div>
            </div>
        </Link>
    </div>
    </>)
}

export default ListItem