import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
// import { getStalls, editStall } from "../app/reducer/stallSlice";
import styles from "./Auth/LesseeData.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { EditLessee, getLessee, getLessees } from "../app/reducer/lesseeSlice";
import { useParams } from "react-router-dom";

function StallStatus() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { lessees } = useSelector((state) => state.lessee);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [stallId, setStallId] = useState(0);
  const [stallNumber, setStallNumber] = useState("");
  const [dimension, setDimension] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const statusChange = (e) => {
    setStatus(e.target.value);
  };
  const stallNumberChange = (e) => {
    setStallNumber(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const sectionChange = (e) => {
    setSection(e.target.value);
  };
  useEffect(() => {
    dispatch(getLessees());
  }, [id]);
  console.log(lessees);
  console.log(id);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (
    section,
    status,
    description,
    id,
    stallNumber,
    dimension,
    monthlyPayment
  ) => {
    setOpen(true);
    setSection(section);
    setStatus(status);
    setDescription(description);
    setStallId(id);
    setStallNumber(stallNumber);
    setDimension(dimension);
    setMonthlyPayment(monthlyPayment);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const handleSave = () => {
  //     const id = stallId;
  //     const data = {
  //       status: status,
  //       description: description,
  //       stallType: section,
  //       id: stallId,
  //       stallNumber: stallNumber,
  //       dimension: dimension,
  //       monthlyPayment: monthlyPayment,
  //     };
  //     dispatch(EditLessee({ id, data }));
  //     console.log(data);

  //     setTimeout(() => {
  //       dispatch(getLessees());
  //       setOpen(false);
  //     }, 500);
  //   };
  return (
    <div className={styles.lessee}>
      <div className={styles.lesseeContainer}>
        <div className={styles.tables}></div>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <div className={styles.lesseeDataContent}>
          <div className={styles.name}>
            <p>LESSEE's DATA</p>
          </div>

          <div className={styles.contents}>
            <div className={styles.blur}></div>
            <table>
              <th>User Id</th>
              <th>Stall #</th>
              <th>Floor</th>
              <th>Section</th>
              <th>Description</th>
              <th>Area Leased</th>
              <th>Monthly Payment</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Initial</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Civil Status</th>
              <th>Address</th>
              <th>Barangay</th>
              <th>Municipality</th>
              <th>Province</th>
              <th>Zip Code</th>
              <th>Contact #</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created</th>
              <th>Approved Date</th>
              <th>Edit Allowed</th>
              <th>Edit Requested</th>

              {lessees
                .filter((item) => {
                  if (search !== "") {
                    if (
                      item.firstName.toLowerCase() === search.toLowerCase() ||
                      item.lastName.toLowerCase() === search.toLowerCase()
                    ) {
                      return item;
                    } else {
                      return null;
                    }
                  } else if (item.id === parseInt(id)) {
                    return item;
                  } else if (id === undefined && search === "") {
                    return item;
                  } else {
                    return null;
                  }
                })
                .map((lessee, index) => {
                  return (
                    <tr key={lessee.id}>
                      {/* <td>{index+1}</td> */}
                      <td>{lessee.userId}</td>
                      <td>{lessee.stall.stallNumber}</td>
                      <td>{lessee.stall.floor}</td>
                      <td>{lessee.stall.stallType}</td>
                      <td>{lessee.stall.description}</td>
                      <td>{lessee.stall.dimension}</td>
                      <td>{lessee.stall.monthlyPayment}</td>
                      <td>{lessee.firstName}</td>
                      <td>{lessee.lastName}</td>
                      <td>{lessee.middleInitial}</td>
                      <td>{lessee.age}</td>
                      <td>{lessee.sex}</td>
                      <td>{lessee.civilStatus}</td>
                      <td>{lessee.address}</td>
                      <td>{lessee.brgy}</td>
                      <td>{lessee.municipality}</td>
                      <td>{lessee.province}</td>
                      <td>{lessee.zipCode}</td>
                      <td>{lessee.contactNumber}</td>
                      <td>{lessee.email}</td>
                      <td>{lessee.status}</td>
                      <td>{lessee.created}</td>
                      <td>{lessee.approvedDate}</td>
                      <td>{lessee.editAllowed}</td>
                      <td>{lessee.editRequest}</td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StallStatus;
