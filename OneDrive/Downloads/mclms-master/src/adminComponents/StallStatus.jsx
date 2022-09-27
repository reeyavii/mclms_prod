import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getStalls, editStall } from "../app/reducer/stallSlice";
import styles from "./Auth/StallStatus.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

function StallStatus() {
  const dispatch = useDispatch();
  const { lessees } = useSelector((state) => state.lessee);
  const { stalls, stall } = useSelector((state) => state.stall);
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
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const sectionChange = (e) => {
    setSection(e.target.value);
  };
  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

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
  const handleSave = () => {
    const id = stallId;
    const data = {
      status: status,
      description: description,
      stallType: section,
      id: stallId,
      stallNumber: stallNumber,
      dimension: dimension,
      monthlyPayment: monthlyPayment,
    };
    dispatch(editStall({ id, data }));
    console.log(data);

    setTimeout(() => {
      dispatch(getStalls());
      setOpen(false);
    }, 500);
  };
  return (
    <div className={styles.lessee}>
      <div className={styles.tables}></div>
      <div className={styles.statusContent}>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <table>
          <th>STATUS</th>
          <th>Stall #</th>
          <th>Section</th>
          <th>Description</th>
          <th>Area Leased</th>
          <th>Rate per Sq.M</th>
          <th>Monthly Payment</th>
          <th></th>

          {stalls
            .filter((item) => {
              if (search !== "") {
                if (item.stallNumber === parseInt(search)) {
                  return item;
                } else {
                  return null;
                }
              } else {
                return item;
              }
            })

            .map((stallData, index) => {
              return (
                <tr key={stallData.id}>
                  {/* <td>{index+1}</td> */}
                  <td>{stallData.status}</td>
                  <td>{stallData.stallNumber}</td>
                  <td>{stallData.stallType}</td>
                  <td>{stallData.description}</td>
                  <td>{stallData.dimension}</td>
                  <td>x (5.00 x 30days) = </td>
                  <td>{stallData.monthlyPayment}</td>
                  <td>
                    <IconButton
                      onClick={() =>
                        handleClickOpen(
                          stallData.stallType,
                          stallData.status,
                          stallData.description,
                          stallData.id,
                          stallData.stallNumber,
                          stallData.dimension,
                          stallData.monthlyPayment
                        )
                      }
                    >
                      <BorderColorOutlinedIcon
                        sx={{ fontSize: 12, padding: 0.1 }}
                      />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Stall Status</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Status"
            fullWidth
            variant="standard"
            value={status}
            onChange={statusChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Section"
            fullWidth
            variant="standard"
            value={section}
            onChange={sectionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            fullWidth
            variant="standard"
            value={description}
            onChange={descriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StallStatus;
