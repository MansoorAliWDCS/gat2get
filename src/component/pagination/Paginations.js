import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginations = () => {
  return (
    <Pagination className='justify-content-center custom_paginations'>
        <Pagination.Prev className='prev-icn' />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next className='next-icn'/>
   </Pagination>
  )
}

export default Paginations