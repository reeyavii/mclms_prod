import React from "react";
import "./auth/Profile.styles.css";
import { useNavigate } from "react-router-dom";
import PopLogo from "../assets/Verified.png";
import { useSelector } from "react-redux";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function SuccessPopUp(props) {
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.auth);

  const handlePopSubmit = (e) => {
    //go to Home
    if (props.navigateToHome) {
      navigate("/home");
    } else {
      navigate("/Login");
    }

    console.log("PopSubmit clicked");
  };
  return (
    <div className="SuccessPop">
      <div className="PopU">
        <ErrorOutlineIcon />
        <p>{result}</p>
      </div>

      <div className="ButtonPopSuccess">
        <div className="PopSub">
          {props.navigateToHome ? (
            <button onClick={handlePopSubmit}>
              {" "}
              <p>go back to home</p>{" "}
            </button>
          ) : (
            <button onClick={handlePopSubmit}>Log in again </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuccessPopUp;
// {result === "Update Password Success" ? (
//           <img src={PopLogo} alt="PopLogo" />
//         ) : (
//           <ErrorIcon/>
//         )}
