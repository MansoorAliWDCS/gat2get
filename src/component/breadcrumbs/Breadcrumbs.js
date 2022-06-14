import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = () =>{
  return (<>
    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Wedding Venue</Breadcrumb.Item>
    </Breadcrumb>
</>)
}

export default Breadcrumbs