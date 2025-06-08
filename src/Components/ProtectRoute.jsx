import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectRoute = ({children}) => {

let user = localStorage.getItem("logedInUser")

    
    const navigate = useNavigate()

    useEffect(()=>{
if (!user) navigate("/login")
    },[])

  return (
    children
  )
}

export default ProtectRoute