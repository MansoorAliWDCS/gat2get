import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
  return (<>
    <Accordion className='faq_accordian' defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header>How do I book a 2GAT2GET?</Accordion.Header>
            <Accordion.Body>
              When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. If you booked through a third party, check here.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Are there any extra charges or fees?</Accordion.Header>
            <Accordion.Body>
            When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. If you booked through a third party, check here.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>When and how do I pay?</Accordion.Header>
            <Accordion.Body>
            When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. If you booked through a third party, check here.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Is there a security deposit?</Accordion.Header>
            <Accordion.Body>
            When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. If you booked through a third party, check here.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>How do I extend my booking?</Accordion.Header>
            <Accordion.Body>
            When you book directly through 2GAT2GET.com, you will be charged the total amount for your stay at the time of booking (for stays up to 30 nights). We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. We accept all debit and credit cards, excluding pre-paid credit cards. We don’t accept cash on arrival. If you booked through a third party, check here.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
</>)
}

export default Faq