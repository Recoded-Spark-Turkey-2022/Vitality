import React from "react";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PurchaseThanks() {
  return (
    <div className='flex justify-center items-center w-full h-2/6'>
    <div className="d-flex flex-column gap-4 pt-4 pb-4" >

        <h2>THANK YOU!</h2>
        <p>Your purchase has been submitted, you should receive an email with the receipt soon.</p>
        <Link to="/">
        <Button type="submit" className="btn-bg btn-text">
                BACK TO HOME
              </Button>
        </Link>
    </div>
    </div >
  )
}

export default PurchaseThanks
