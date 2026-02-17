import React from 'react'
import { useNavigate } from 'react-router-dom'
import successstyle from '../Style/Success.module.css'
const Success = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className={successstyle.success}>
        <h1>Order Placed Successfully! &#128156;</h1>
        <a onClick={() => navigate("/home")}>
          ~ Back to Home ~
        </a>
      </div>
    </>
  )
}

export default Success

