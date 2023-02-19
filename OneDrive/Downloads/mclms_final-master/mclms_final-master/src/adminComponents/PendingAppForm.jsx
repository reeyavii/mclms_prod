import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getLesseeId, EditLessee } from "../app/reducer/lesseeSlice";
import { useNavigate, useParams } from "react-router";
import styles from "./Auth/PendingAppForm.module.css";
// import {toMoney} from "../app/constants";

function PendingAppForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lessee } = useSelector((state) => state.lessee);
  const { id } = useParams();
  //   const [firstName] = useState("");
  const [lastName] = useState("");
  const [age] = useState("");
  const [sex] = useState("");
  const [status] = useState("");
  const [address] = useState("");
  const [phoneNum] = useState("");

  useEffect(() => {
    // const Id = id;
    dispatch(getLesseeId( id ));
  }, []);
  console.log(lessee);

  //   const firstNameChange = (e) => {
  //     setFirstName (e.target.value);
  //   }
  const handleView = () => {
    // setView(true);
    // dispatch(({}));
    navigate("/pending-application-form");
    console.log("");
  };
  const handleDecline = () => {
    let newLessee = { ...lessee };
    newLessee.status = "rejected";
    const data = { ...newLessee };
    const id = lessee.id;
    dispatch(EditLessee({ id, data }));
    setTimeout(() => {
      navigate("/archive");
    }, 500);
  };
  const handleApprove = () => {
    let newLessee = { ...lessee };
    newLessee.status = "approved";
    const data = { ...newLessee };
    const id = lessee.id;
    dispatch(EditLessee({ id, data }));
    setTimeout(() => {
      navigate("/pending-application");
    }, 500);
  };
  return (
    <div>
      {lessee && (
        <div className={styles.pending}>
          <div>
            <div className={styles.pendingContainer}>
              <div className={styles.appForm}>
                <h2>APPLICATION FORM</h2>
              </div>
              <div className={styles.input}>
                <div className={styles.information}>
                  <p>PERSONAL INFORMATION</p>
                </div>
                {/* <div className={styles.div}></div> */}
                <div className={styles.inside}>
                  <div className={styles.holdername}>
                    <h5>Name:</h5>

                    <div className={styles.inputContent}>
                      <input
                        placeholder="Last Name, First Name"
                        value={`${lessee.lastName}, ${lessee.firstName}, ${lessee.middleInitial}`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={styles.holderName}>
                    <h5>Permanent Address:</h5>

                    <div className={styles.inputContent}>
                      <input
                        placeholder="Address "
                        value={`${lessee.address}, ${lessee.brgy}, ${lessee.municipality}, ${lessee.province}`}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.inside}>
                  <div className={styles.holdername}>
                    <h5>Age:</h5>
                  </div>
                  <div className={styles.inputContent}>
                    <input placeholder="#" value={lessee.age} readOnly />
                  </div>

                  <div className={styles.holderName}>
                    <h5>Phone Number:</h5>
                  </div>
                  <div className={styles.inputContent}>
                    <input
                      placeholder="+63"
                      value={lessee.contactNumber}
                      readOnly
                    />{" "}
                  </div>
                </div>

                <div className={styles.inside}>
                  <div className={styles.holdername}>
                    <h5>Sex:</h5>
                  </div>
                  <div className={styles.inputContent}>
                    <input placeholder="#" value={lessee.sex} readOnly />
                  </div>
                  <div className={styles.holderName}>
                    <h5>Zip Code:</h5>
                  </div>
                  <div className={styles.inputContent}>
                    <input placeholder="" value={lessee.zipCode} readOnly />
                  </div>
                </div>

                <div className={styles.inside}>
                  <div className={styles.holdername}>
                    <h5>Status:</h5>
                  </div>
                  <div className={styles.inputContent}>
                    <input
                      placeholder="#"
                      value={lessee.civilStatus}
                      readOnly
                    />
                  </div>
                </div>

                <div className={styles.information}>
                  <p>STALL TO ACQUIRE</p>
                </div>

                <div className={styles.acquire}>
                  <div className={styles.title}>
                    <h5>Stall Number:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={lessee.stall.stallNumber}
                      readOnly
                    />
                  </div>

                  <div className={styles.title}>
                    <h5>Rate per Sq.m:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={"P5.00/sq.m x 30days"}
                      readOnly
                    />
                  </div>
                </div>

                <div className={styles.acquire}>
                  <div className={styles.title}>
                    <h5>Stall Type:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={lessee.stall.stallType}
                      readOnly
                    />
                  </div>
                  <div className={styles.title}>
                    <h5>Monthly Rate:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={lessee.stall.monthlyPayment}
                      readOnly
                    />
                  </div>
                </div>

                <div className={styles.acquire}>
                  <div className={styles.title}>
                    <h5>Area Leased:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={lessee.stall.dimension}
                      readOnly
                    />
                  </div>
                  <div className={styles.title}>
                    <h5>Description:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="#"
                      value={lessee.stall.description}
                      readOnly
                    />
                  </div>
                </div>
                <div className={styles.acquire}>
                  <div className={styles.title}>
                    <h5>Location:</h5>
                  </div>
                  <div className={styles.inputName}>
                    <input
                      placeholder="akdkls"
                      value={`${lessee.stall.mapping} ${
                        lessee.stall.floor ? lessee.stall.floor : ""
                      } `}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className={styles.button}>
                <div className={styles.decline}>
                  <button onClick={handleDecline}>
                    <h4>DECLINE</h4>
                  </button>
                </div>
                <div className={styles.approve}>
                  <button onClick={handleApprove}>
                    <h4>APPROVE</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default PendingAppForm;
