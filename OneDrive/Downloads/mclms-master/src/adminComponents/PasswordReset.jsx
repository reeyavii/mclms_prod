import React, {useState} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'


function PasswordReset() {
    const navigate = useNavigate();
    const [isNext, setIsNext] = useState(false);
    const {cancel, cancelDisappear} = useSelector ((state) => state.cancelDisappear);

    useEffect(() => {
        if (cancelDisappear !== null && isNext) {
            
        }
    })
    const handleCancel = (e) => {
        navigate("/admin-login");
        console.log("login click")
    }
    const handleNext = (Id) => {
        setIsNext(true);

    }

  return (
    <div className="PasswordReset">
        Reset Password
        <div className='ResetContainer'>
            {isNext ? null : (
                <>
                <div className="verification">
                    <p>
                        A verification code was sent to abccde@gmail.com, please enter the code below.
                    </p>
                </div>
                <div className="verification">
                    <div>
                        <p>Enter new password. 
                        <br/>
                        ____________________</p>
                       <br/>
                       <p>
                       Re-type password
                       <br/>
                       _____________________
                       </p>
                       <br/>
                       <p>
                       Passoword must contain at least 10 characters long with numbers and special character.
                       </p>

                    </div>
                </div>
                </>
            )}
            
        </div>

       
        {isNext ? (
             <div onClick={handleCancel} className="Cancel">Cancel</div>
        ) : (
            <div className="Cancel"></div>)
        }

      
        <div onClick={handleNext} className="Next">Next</div>


    </div>
  )
}

export default PasswordReset