import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    })

  return (
    <div></div>
  )
}


export default NotFound;