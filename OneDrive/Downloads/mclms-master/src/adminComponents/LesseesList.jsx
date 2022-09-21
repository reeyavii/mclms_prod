import React, { useState, useEffect } from "react";
import "./Lessees.styles.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getLessee,
  getLessees,
  EditLessee,
  hideAlert,
  addLessees,
} from "../app/reducer/lesseeSlice";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function LesseesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { lessees, lessee, showAlert } = useSelector((state) => state.lessee);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [contNum, setContNum] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [stallNum, setStallNum] = useState("");
  const [stallType, setStallType] = useState("");
  const [dateAcquired, setDateAcquired] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getLessees());
    if (showAlert === true) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    }
  }, [showAlert]);
  console.log(lessees);

  useEffect(() => {
    if (lessee !== null && isEdit) {
      setFName(lessee.firstName);
      setLName(lessee.lastName);
      setMiddleInitial(lessee.middleInitial);
      setBirthDate(lessee.age);
      setContNum(lessee.contactNumber);
      setStatus(lessee.status);
      setAddress(lessee.address);
      setEmail(lessee.email);
      //   setStallNum(lessee.stall.stallNumber);
      //   setStallType(lessee.stall.stallType);
      setDateAcquired("");
    }
  }, [isEdit, lessee]);
  console.log(lessee);

  const searchChange = (e) => {
    setSearch(e.target.value);
  };
  const fNameChange = (e) => {
    setFName(e.target.value);
  };
  const lNameChange = (e) => {
    setLName(e.target.value);
  };
  const middleInitialChange = (e) => {
    setMiddleInitial(e.target.value);
  };
  const birthDateChange = (e) => {
    setBirthDate(e.target.value);
  };
  const contNumChange = (e) => {
    setContNum(e.target.value);
  };
  const statusChange = (e) => {
    setStatus(e.target.value);
  };
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const stallNumChange = (e) => {
    setStallNum(e.target.value);
  };
  const stallTypeChange = (e) => {
    setStallType(e.target.value);
  };
  const dateAcquiredChange = (e) => {
    setDateAcquired(e.target.value);
  };

  const handleEdit = (Id) => {
    setIsEdit(true);
    dispatch(getLessee({ Id }));
  };
  const handleCancelDetails = (e) => {
    setIsEdit(false);
    setFName("");
    setLName("");
    setMiddleInitial("");
    setBirthDate("");
    setContNum("");
    setStatus("");
    setAddress("");
    setEmail("");
    setStallNum("");
    setStallType("");
    setDateAcquired("");
  };
  const handleEditDetails = () => {
    const id = lessee.id;
    const data = {
      id: lessee.id,
      stallId: lessee.stallId,
      firstName: fName,
      lastName: lName,
      middleInitial: middleInitial,
      age: birthDate,
      contactNumber: contNum,
      status: status,
      address: address,
      email: email,
      stallNumber: stallNum,
      stallType: stallType,
    };
    dispatch(EditLessee({ id, data }));
    console.log("Home clicked");
  };
  const handleAddDetails = (e) => {
    const data = {
      firstName: fName,
      lastName: lName,
      middleInitial: middleInitial,
      age: birthDate,
      contactNumber: contNum,
      status: status,
      address: address,
      email: email,
      stallNumber: stallNum,
      stallType: stallType,
      sex: dateAcquired,
    };
    dispatch(addLessees(data));
    console.log("Home clicked");
  };

  return (
    <div className="Lessee">
      <div className="Tables"></div>
      <div className="TableContent">
        <div className="Search">
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>

        <table>
          <tr>
            <th>#</th>
            <th>STALL #</th>
            <th>STALL TYPE</th>
            <th>ACCOUNT NAME</th>
            <th> </th>
          </tr>

          {lessees
            .filter((item) => {
              if (item.status === "approved" && search !== "") {
                if (
                  `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`.includes(
                    search.toLowerCase()
                  ) ||
                  item.stall.stallNumber === parseInt(search)
                ) {
                  return item;
                } else {
                  return null;
                }
              } else if (item.status === "approved") {
                return item;
              }
            })
            .map((lesseeData, index) => {
              return (
                <tbody key={lesseeData.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{lesseeData.stall.stallNumber}</td>
                    <td>{lesseeData.stall.stallType}</td>
                    <td>{`${lesseeData.firstName} ${lesseeData.lastName}`} </td>
                    <td>
                      <button onClick={() => handleEdit(lesseeData.id)}>
                        Edit
                      </button>
                      <button>Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      <div className="Details">
        <div className="DetailsContent">
          <h2>{isEdit ? "Edit" : "Add"} Lessee</h2>
          <div className="DetailsForm">
            <input
              placeholder="First Name"
              value={fName}
              onChange={fNameChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Last Name"
              value={lName}
              onChange={lNameChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Middle Initial"
              value={middleInitial}
              onChange={middleInitialChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Birthdate"
              value={birthDate}
              onChange={birthDateChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Contact Number"
              value={contNum}
              onChange={contNumChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Status"
              value={status}
              onChange={statusChange}
            />
          </div>
          <div className="DetailsForm">
            <input
              placeholder="Address"
              value={address}
              onChange={addressChange}
            />
          </div>
          <div className="DetailsForm">
            <input placeholder="Email" value={email} onChange={emailChange} />
          </div>

          {isEdit ? null : (
            <>
              <div className="DetailsForm1">
                <div className="DetailsForm2">
                  <input
                    placeholder="Stall Number"
                    value={stallNum}
                    onChange={stallNumChange}
                  />
                </div>
                <div className="DetailsForm2">
                  <input
                    placeholder="Stall Type"
                    value={stallType}
                    onChange={stallTypeChange}
                  />
                </div>
              </div>
            </>
          )}

          <div className="DetailsForm">
            <input
              placeholder="Date Acquired"
              value={dateAcquired}
              onChange={dateAcquiredChange}
            />
          </div>
        </div>
        <div className="DetailsButton">
          <button onClick={handleCancelDetails}>
            <div className="CancelDetails"> CANCEL</div>
          </button>

          {isEdit ? (
            <button onClick={handleEditDetails}>
              <div className="AddDetails"> EDIT</div>
            </button>
          ) : (
            <button onClick={handleAddDetails}>
              <div className="AddDetails"> ADD</div>
            </button>
          )}
        </div>
        {showAlert && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>Edit Lessee success! </strong>
          </Alert>
        )}
      </div>
    </div>
  );
}
export default LesseesList;
