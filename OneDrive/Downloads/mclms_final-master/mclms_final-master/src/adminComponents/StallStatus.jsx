import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getStalls,
  editStall,
  getStall,
  addStall,
} from "../app/reducer/stallSlice";
import styles from "./Auth/StallStatus.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { IconButton, MenuItem, Select } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { API_URL } from "../app/constants";
import placeholder from "../assets/placeholder.png";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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
  const [image, setImage] = useState(null);
  const [floor, setFloor] = useState("");
  const [mapping, setMapping] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [stallType, setStallType] = useState("");

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
  const floorChange = (e) => {
    setFloor(e.target.value);
  };
  const mappingChange = (e) => {
    setMapping(e.target.value);
  };
  const monthlyPaymentChange = (e) => {
    setMonthlyPayment(e.target.value);
  };
  const stallTypeChange = (e) => {
    setStallType(e.target.value);
  };
  const dimensionChange = (e) => {
    setDimension(e.target.value);
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
    monthlyPayment,
    floor,
    mapping,
    imageUrl
  ) => {
    setOpen(true);
    setSection(section);
    setStatus(status);
    setDescription(description);
    setStallId(id);
    setStallNumber(stallNumber);
    setDimension(dimension);
    setMonthlyPayment(monthlyPayment);
    setFloor(floor);
    setMapping(mapping);
    setImageUrl(imageUrl);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const id = stallId;
    // const data = {
    //   status: status,
    //   description: description,
    //   stallType: section,
    //   id: stallId,
    //   stallNumber: stallNumber,
    //   dimension: dimension,
    //   monthlyPayment: monthlyPayment,
    //   image: image,
    //   floor: floor,
    //   mapping: mapping,
    // };
    const formData = new FormData();
    formData.append("status", status);
    formData.append("description", description);
    formData.append("stallType", section);
    formData.append("id", stallId);
    formData.append("stallNumber", stallNumber);
    formData.append("dimension", dimension);
    formData.append("monthlyPayment", monthlyPayment);
    formData.append("stallImage", image);
    formData.append("floor", floor);
    formData.append("mapping", mapping);
    dispatch(editStall({ id, formData }));
    setTimeout(() => {
      dispatch(getStalls());

      setOpen(false);
    }, 500);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const [add, setAdd] = React.useState(false);

  // const handleClickAdd = (
  //   section,
  //   status,
  //   description,
  //   id,
  //   stallNumber,
  //   dimension,
  //   monthlyPayment,
  //   floor,
  //   mapping,
  //   imageUrl
  // ) => {
  //   setAdd(true);
  //   setSection(section);
  //   setStatus(status);
  //   setDescription(description);
  //   setStallId(id);
  //   setStallNumber(stallNumber);
  //   setDimension(dimension);
  //   setMonthlyPayment(monthlyPayment);
  //   setFloor(floor);
  //   setMapping(mapping);
  //   setImageUrl(imageUrl);
  // };

  const handleAddStall = () => {
    setAdd(true);
    setSection("");
    setStatus("");
    setDescription("");
    setStallNumber("");
    setDimension("");
    setMonthlyPayment("");
    setFloor("");
    setMapping("");
    setImageUrl("");
  };

  const handleAdd = () => {
    const stallNo = stalls && Math.max(...stalls.map((s) => s.stallNumber)) + 1;
    const formData = new FormData();
    formData.append("status", status);
    formData.append("description", description);
    formData.append("stallType", section);
    formData.append("id", stallId);
    formData.append("stallNumber", stallNo);
    formData.append("dimension", dimension);
    formData.append("monthlyPayment", monthlyPayment);
    formData.append("stallImage", image);
    formData.append("floor", floor);
    formData.append("mapping", mapping);
    console.log(formData);
    dispatch(addStall({ formData }));
    setAdd(false);
  };

  const handleCancel = () => {
    setAdd(false);
    setSection("");
    setStatus("");
    setDescription("");
    setStallId("");
    setStallNumber(stallNumber);
    setDimension("");
    setMonthlyPayment("");
    setFloor("");
    setMapping("");
    setImageUrl("");
  };
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
        <div className={styles.stallContent}>
          <div className={styles.name}>
            <p>STALL STATUS</p>
          </div>
          <div className={styles.add}>
            <Tooltip title="Add Stall" onClick={handleAddStall}>
              <AddIcon sx={{ marginRight: 4, marginTop: -7 }} />
            </Tooltip>
          </div>

          <div className={styles.contents}>
            <div className={styles.blur}></div>
            <table>
              <th>STATUS</th>
              <th>Stall #</th>
              <th>Floor</th>
              <th>Section</th>
              <th>Description</th>
              <th>Area Leased</th>
              <th>Monthly Payment</th>
              <th></th>

              {stalls
                .filter((item) => {
                  if (search !== "") {
                    if (
                      item.stallType.toLowerCase() === search.toLowerCase() ||
                      item.stallNumber === parseInt(search)
                    ) {
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
                      <td>
                        {stallData.floor === null || stallData.floor === "null"
                          ? ""
                          : stallData.floor}
                      </td>
                      <td>{stallData.stallType}</td>
                      <td>{stallData.description}</td>
                      <td>{stallData.dimension}</td>
                      <td>{stallData.monthlyPayment}</td>
                      <td>
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() =>
                              handleClickOpen(
                                stallData.stallType,
                                stallData.status,
                                stallData.description,
                                stallData.id,
                                stallData.stallNumber,
                                stallData.dimension,
                                stallData.monthlyPayment,
                                stallData.floor,
                                stallData.mapping,
                                stallData.imageUrl
                              )
                            }
                          >
                            <BorderColorOutlinedIcon
                              sx={{ fontSize: 12, padding: 0.1 }}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "white", background: "#284f8f", height: 20 }}>
          Edit Stall Status
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <Stack direction="row" alignItems="center" justifyContent="center">
            <div className={styles.picture}>
              <img
                src={
                  imageUrl || image
                    ? `${API_URL}api/receipts/image/${imageUrl}`
                    : placeholder
                }
                alt="stallPicture"
              />
            </div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => handleImage(e)}
              />
              <PhotoCamera />
            </IconButton>
          </Stack>
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
            label="Stall Number"
            fullWidth
            variant="standard"
            value={stallNumber}
            onChange={stallNumberChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Stall Type"
            fullWidth
            variant="standard"
            value={section}
            onChange={sectionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Area Leased"
            fullWidth
            variant="standard"
            value={dimension}
            onChange={dimensionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Monthly Payment"
            fullWidth
            variant="standard"
            value={monthlyPayment}
            onChange={monthlyPaymentChange}
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Floor"
            fullWidth
            variant="standard"
            value={floor === "null" || floor === null ? "" : floor}
            onChange={floorChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mapping"
            fullWidth
            variant="standard"
            value={mapping}
            onChange={mappingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* /////////////////////      */}

      <Dialog open={add} onClose={handleCancel}>
        <DialogTitle sx={{ color: "white", background: "#284f8f", height: 20 }}>
          Add Stall
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <div className={styles.picture}>
              <img
                src={
                  imageUrl || image
                    ? `${API_URL}api/receipts/image/${imageUrl}`
                    : placeholder
                }
                alt="stallPicture"
              />
            </div>
          
          </Stack>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Stall Number"
            fullWidth
            variant="standard"
            value={stalls && Math.max(...stalls.map((s) => s.stallNumber)) + 1}
            // onChange={stallNumberChange} plus 1 gli daad
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Area Leased"
            fullWidth
            variant="standard"
            value={dimension}
            onChange={dimensionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Monthly Payment"
            fullWidth
            variant="standard"
            value={monthlyPayment}
            onChange={monthlyPaymentChange}
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Stall Type"
            fullWidth
            variant="standard"
            value={section}
            onChange={sectionChange}
          />
          <div className={styles.Select}>
            <FormControl
              variant="standard"
              sx={{
                minWidth: 160,
                fontSize: 2,
                marginTop: 2,
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Stall Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                onChange={statusChange}
                label="Stall Status"
              >
                <MenuItem value={"acquired"}>Acquired</MenuItem>
                <MenuItem value={"available"}>Available</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                marginLeft: 4,
                minWidth: 160,
                fontSize: 2,
                marginTop: 2,
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Mapping
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={mapping}
                onChange={mappingChange}
                label="Mapping"
              >
                <MenuItem value={"frontright"}>frontright</MenuItem>
                <MenuItem value={"frontright-Top"}>frontright-Top</MenuItem>
                <MenuItem value={"frontleft"}>frontleft</MenuItem>
                <MenuItem value={"frontleft-Top"}>frontleft-Top</MenuItem>
                <MenuItem value={"leftside"}>leftside</MenuItem>
                <MenuItem value={"lowerleft"}>lowerleft</MenuItem>
                <MenuItem value={"backleft"}>backleft</MenuItem>
                <MenuItem value={"backright"}>backright</MenuItem>
                <MenuItem value={"lowerright"}>lowerright</MenuItem>
                <MenuItem value={"rightside"}>rightside</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                marginLeft: 4,
                minWidth: 160,
                fontSize: 2,
                marginTop: 2,
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Floor
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={floor}
                onChange={floorChange}
                label="Floor"
              >
                <MenuItem value={1}></MenuItem>
                <MenuItem value={"1st Floor"}>1st Floor</MenuItem>
                <MenuItem value={"2nd Floor"}>2nd Floor</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mapping"
            fullWidth
            variant="standard"
            value={mapping}
            onChange={mappingChange}
          /> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Floor"
            fullWidth
            variant="standard"
            value={floor}
            onChange={floorChange}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StallStatus;
