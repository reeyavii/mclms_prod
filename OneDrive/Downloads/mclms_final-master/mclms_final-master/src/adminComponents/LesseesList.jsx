import React, { useState, useEffect } from "react";
// import "./Lessees.styles.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getLessee,
  getLessees,
  EditLessee,
  hideAlert,
  addLessees,
  getLesseeId,
  UpdateLesseeStatus,
} from "../app/reducer/lesseeSlice";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import styles from "./Auth/LesseeList.module.css";

const statuses = ["Requested", "Approved", "Rejected"];
// const stallNumbers = ["1", "2", "3", "4", "5","6", "7", "8", "9", "10", "11","12", "13","14","15","16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34","35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47","48","49", "50"]

// Address Brgy Municipality Province
//Alibango St., Poblacion, Alimodian, Iloilo

const separateAddress = (address) => {
  let array = address.split(", ");
  console.log(array);
  return array;
};

function LesseesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { lessees, lessee, showAlert } = useSelector((state) => state.lessee);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [age, setAge] = useState("");
  const [contNum, setContNum] = useState("");
  // const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  // const [stallNum, setStallNum] = useState("");
  const [stallType, setStallType] = useState("");
  const [description, setDescription] = useState("");
  const [dateAcquired, setDateAcquired] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [appStatus, setAppStatus] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [appStallNum, setAppStallNum] = useState("");

  const handleChange = (event) => {
    setAppStallNum(event.target.value);
  };

  useEffect(() => {
    dispatch(getLessees());
    if (showAlert === true) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    }
    separateAddress("Alibango St., Poblacion, Alimodian, Iloilo");
  }, [showAlert]);
  console.log(lessees);

  useEffect(() => {
    if (lessee !== null && isEdit) {
      setFName(lessee.firstName);
      setLName(lessee.lastName);
      setMiddleInitial(lessee.middleInitial);
      setAge(lessee.age);
      setContNum(lessee.contactNumber);
      setCivilStatus(lessee.civilStatus);
      setAddress(lessee.address);
      setEmail(lessee.email);
      //   setStallNum(lessee.stall.stallNumber);
      //   setStallType(lessee.stall.stallType);
      setDateAcquired(lessee.approvedDate);
      setAppStatus(lessee.status);
      // setAppStallNum(lessee.stall.stallNumber);
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
  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const contNumChange = (e) => {
    setContNum(e.target.value);
  };
  // const statusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  const civilStatusChange = (e) => {
    setCivilStatus(e.target.value);
  };
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  // const appStallNumChange = (e) => {
  //   setAppStallNum(e.target.value);
  // };
  const stallTypeChange = (e) => {
    setStallType(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const dateAcquiredChange = (e) => {
    setDateAcquired(e.target.value);
  };

  const handleEdit = (Id) => {
    setIsEdit(true);
    dispatch(getLesseeId( Id ));
  };
  const handleView = (Id) => {
    navigate("/lessee-data/" + Id);
  };
  const handleCancelDetails = (e) => {
    setIsEdit(false);
    setFName("");
    setLName("");
    setMiddleInitial("");
    setAge("");
    setContNum("");
    setCivilStatus("");
    setAddress("");
    setEmail("");
    setAppStallNum("");
    setStallType("");
    setDateAcquired("");
    setAppStatus("");
    setDescription("");
  };
  const handleEditDetails = () => {
    var array = separateAddress(address);
    const street = array[0];
    const brgy = array[1];
    const municipality = array[2];
    const province = array[3];
    const zip = array[4];
    const id = lessee.id;
    const data = {
      id: lessee.id,
      stallId: lessee.stallId,
      firstName: fName,
      lastName: lName,
      middleInitial: middleInitial,
      age: age,
      contactNumber: contNum,
      status: appStatus,
      brgy: brgy,
      province: province,
      municipality: municipality,
      zipCode: zip,
      civilStatus: civilStatus,
      address: street,
      email: email,
      // stallNumber: stallNum,
      stallType: stallType,
      description: description,
      number: appStallNum,
    };
    dispatch(EditLessee({ id, data }));
    console.log("Home clicked");
  };
  const handleAddDetails = (e) => {
    var array = separateAddress(address);
    const street = array[0];
    const brgy = array[1];
    const municipality = array[2];
    const province = array[3];
    const zip = array[4];
    const data = {
      firstName: fName,
      lastName: lName,
      middleInitial: middleInitial,
      age: age,
      contactNumber: contNum,
      status: appStatus,
      address: street,
      email: email,
      // stallNumber: stallNum,
      stallType: stallType,
      sex: dateAcquired,
      brgy: brgy,
      userId: "",
      province: province,
      municipality: municipality,
      zipCode: zip,
      civilStatus: civilStatus,
      description: description,
      stallNumber: appStallNum,
    };
    dispatch(addLessees(data));
    console.log("Home clicked");
  };

  const handleStatusChange = (status) => {
    setAnchorEl(null);
    setAppStatus(status);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSee = () => {
    navigate("/lessee-data");
  };

  const handleDelete = (lessee) => {
    let id = lessee.id;
    let data = { ...lessee };
    let status = "archived";
    dispatch(UpdateLesseeStatus({ id, data, status }));
  };
  return (
    <div className={styles.lessee}>
      <div className={styles.lesseeContainer}>
        <div className={styles.table}></div>
        <div className={styles.tableContent}>
          <div className={styles.Bg}></div>
          <div className={styles.search}>
            <input
              placeholder="Search any keyword"
              value={search}
              onChange={searchChange}
            />
          </div>
          <div className={styles.lesseeContent}>
            <div className={styles.see}>
              <p onClick={handleSee}>See All</p>
            </div>
            <div className={styles.innerContent}>
              <div className={styles.blur}></div>
              <table>
                <tr>
                  <th>#</th>
                  <th>STALL #</th>
                  <th>STALL TYPE</th>
                  <th>DESCRIPTION</th>
                  <th>ACCOUNT NAME</th>
                  <th> </th>
                  <th> </th>
                  <th> </th>
                </tr>

                {lessees
                  .filter((item) => {
                    if (
                      item.status.toLowerCase() === "approved" &&
                      search !== ""
                    ) {
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
                    } else if (item.status.toLowerCase() === "approved") {
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
                          <td>{lesseeData.stall.description}</td>
                          <td>
                            {`${lesseeData.firstName} ${lesseeData.lastName}`}{" "}
                          </td>
                          <td>
                            <Tooltip title="View">
                              <IconButton
                                onClick={() => handleView(lesseeData.id)}
                              >
                                <VisibilityOutlinedIcon
                                  sx={{
                                    width: 18,
                                    height: 20,
                                    color: "black",
                                    marginTop: 0.5,
                                  }}
                                />
                              </IconButton>
                            </Tooltip>
                          </td>
                          <td>
                            <Tooltip title="Edit">
                              <IconButton
                                onClick={() => handleEdit(lesseeData.id)}
                              >
                                <EditIcon
                                  sx={{ width: 15, height: 15, color: "blue" }}
                                />
                              </IconButton>
                            </Tooltip>
                          </td>
                          <td>
                            <Tooltip title="Delete">
                              <IconButton
                                onClick={() => handleDelete(lesseeData)}
                              >
                                <DeleteIcon
                                  sx={{ width: 15, height: 15, color: "red" }}
                                />
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
        <div className={styles.Details}>
          <div className={styles.DetailsContent}>
            <h2>{isEdit ? "Edit" : "Add"} Lessee</h2>
            <div className={styles.DetailsForm}>
              <input
                placeholder="First Name"
                value={fName}
                onChange={fNameChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input
                placeholder="Last Name"
                value={lName}
                onChange={lNameChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input
                placeholder="Middle Initial"
                value={middleInitial}
                onChange={middleInitialChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input placeholder="Age" value={age} onChange={ageChange} />
            </div>
            <div className={styles.DetailsForm}>
              <input
                placeholder="Contact Number"
                value={contNum}
                onChange={contNumChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input
                placeholder="Civil Status"
                value={civilStatus}
                onChange={civilStatusChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input
                placeholder="Address"
                value={address}
                onChange={addressChange}
              />
            </div>
            <div className={styles.DetailsForm}>
              <input placeholder="Email" value={email} onChange={emailChange} />
            </div>

            {isEdit ? null : (
              <>
                <div className={styles.DetailsForm1}>
                  <div className={styles.DetailsForm2}>
                    <input
                      placeholder="Stall Type"
                      value={stallType}
                      onChange={stallTypeChange}
                    />
                  </div>

                  <div className={styles.DetailsForm2}>
                    <FormControl
                      variant="standard"
                      sx={{
                        marginLeft: 1,
                        minWidth: 125,
                        fontSize: -2,
                        marginTop: -3.1,
                      }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Stall Number
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={appStallNum}
                        onChange={handleChange}
                        label="Stall Number"
                      >
                        {/* {stallNumbers.map((item) => {
                  return (
                    <MenuItem onClick={() => handleChange(item)}>
                      {item}
                      
                    </MenuItem>
                  );
                 })} */}
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={26}>26</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={28}>28</MenuItem>
                        <MenuItem value={29}>29</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={31}>31</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                        <MenuItem value={33}>33</MenuItem>
                        <MenuItem value={3}>34</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={36}>36</MenuItem>
                        <MenuItem value={37}>37</MenuItem>
                        <MenuItem value={38}>38</MenuItem>
                        <MenuItem value={39}>39</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={41}>41</MenuItem>
                        <MenuItem value={42}>42</MenuItem>
                        <MenuItem value={43}>43</MenuItem>
                        <MenuItem value={44}>44</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={46}>46</MenuItem>
                        <MenuItem value={47}>47</MenuItem>
                        <MenuItem value={48}>48</MenuItem>
                        <MenuItem value={49}>49</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </>
            )}

            <div className={styles.DetailsForm}>
              <div className={styles.DetailsForm2}>
                {" "}
                <input
                  placeholder="Date Acquired"
                  value={dateAcquired}
                  onChange={dateAcquiredChange}
                />
              </div>

              <div className={styles.AppStatus}>
                <input
                  onClick={handleClick}
                  placeholder="Application Status"
                  value={appStatus && appStatus.toUpperCase()}
                  readOnly
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {statuses.map((item) => {
                    return (
                      <MenuItem onClick={() => handleStatusChange(item)}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </div>
          </div>
          <div className={styles.DetailsButton}>
            <button onClick={handleCancelDetails}>
              <div className={styles.CancelDetails}> CANCEL</div>
            </button>

            {isEdit ? (
              <button onClick={handleEditDetails}>
                <div className={styles.AddDetails}> EDIT</div>
              </button>
            ) : (
              <button onClick={handleAddDetails}>
                <div className={styles.AddDetails}> ADD</div>
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
    </div>
  );
}
export default LesseesList;
