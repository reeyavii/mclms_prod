import React from "react";
import "./PopUp.styles.css";
import {useNavigate} from "react-router-dom";



function StallPopUp() {
  
    const navigate = useNavigate(); 
   
    
    const handleCancel = (e) => {
        //go back to stalls
        navigate("/stalls");
        console.log("Cancel clicked");
        };
    const handlePopSave = (e) => {
            //go to Stalls Submission
            navigate("/save-changed-successfully");
            console.log("Save clicked");
        };
        
    
    return (
    
       
          <div className="PopBox1" id="SavePopUp">
                   
                                
               <div className="Review">
                  
                    <p>Review Changes</p>
               </div>
            
               <div className="PopUpx">
                  
                  <p>You have made changes.<br/>
                    Do you want to discard or save them?</p>
               </div>
                  

                  <div className="StallPopButton">
                        <div className="Cancelx">
                             <button onClick={handleCancel}> Discard </button>
                        </div>
                        <div className="PopSavex">
                             <button onClick={handlePopSave}>Save</button>
                        </div>

                      
                 
                 </div>
               
                  
         
         </div>
                    
   
       
    );
  
}
  export default StallPopUp;
