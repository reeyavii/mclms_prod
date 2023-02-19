import React, { useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

function Redirect() {
  const navigate = useNavigate();  
  const { token } = useSelector(state => state.auth);

  useEffect( () => {
    if (token !== null){
        navigate("/lessees-list");
    }
  },[])
  return (
    <div>Redirect</div>
  )
};

export default Redirect;