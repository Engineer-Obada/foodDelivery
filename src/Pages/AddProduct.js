import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Items } from "../Data/Data";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import {
  PhotoCamera,
  TextFields,
  TextFieldsOutlined,
} from "@mui/icons-material";

export default function AddProduct() {
  const [inputForm, setFormInput] = useState({
    name: "",
    itemId: "",
    price: "",
    imgSrc: "",
  });
  const [sucess, setSucess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handelInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    if (evt.target.name == "imgSrc") {
      setFormInput({
        ...inputForm,
        [evt.target.name]: URL.createObjectURL(evt.target.files[0]),
      });
    } else {
      setFormInput({ ...inputForm, [name]: value });
    }
    console.log(sucess);
  };

  const handelSubmit = (evt) => {
    evt.preventDefault();
    if (
      inputForm.name &&
      inputForm.imgSrc &&
      inputForm.itemId &&
      inputForm.price
    ) {
      Items.push(inputForm);
      setSucess(true);
      setFailed(false);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="FavoritContainer">
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "10px 5px" }}>
        <CardContent>
          <form onSubmit={handelSubmit}>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="standard-basic"
                  label="ProductName"
                  variant="standard"
                  placeholder="Enter Name Product"
                  fullWidth
                  name={"name"}
                  defaultValue={inputForm.name}
                  onChange={handelInput}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Catgory
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    variant="standard"
                    name={"itemId"}
                    defaultValue={inputForm.itemId}
                    onChange={handelInput}
                  >
                    <MenuItem value={"buger01"}>Burger</MenuItem>
                    <MenuItem value={"pizza01"}>Pizza</MenuItem>
                    <MenuItem value={"hotdog01"}>Hotdog</MenuItem>
                    <MenuItem value={"taco01"}>Taco</MenuItem>
                    <MenuItem value={"Snack"}>Snack</MenuItem>
                    <MenuItem value={"drink01"}>Drink</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={6} sm={12} item>
                <TextField
                  type={"number"}
                  id="standard-basic"
                  label="Price"
                  variant="standard"
                  placeholder="Enter Price "
                  fullWidth
                  name={"price"}
                  defaultValue={inputForm.price}
                  onChange={handelInput}
                />
              </Grid>
              <Grid xs={6} sm={12} item>
                <IconButton
                  aria-label="upload picture"
                  component="label"
                  style={{
                    backgroundColor: "#f8901c",
                    borderRadius: "15px",
                    color: "#FFF",
                  }}
                  sx={{
                    mt: 3,
                  }}
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    name={"imgSrc"}
                    defaultValue={inputForm.imgSrc}
                    onChange={handelInput}
                  />
                  <PhotoCamera />
                </IconButton>
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    backgroundColor: "#f8901c",
                    borderRadius: "15px",
                  }}
                >
                  ADD New Product
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      {sucess && <Alert severity="success"
      variant="outlined"
      sx={{mt:1}}
      >Product added successfully</Alert>}
      {failed ? (
        <>
          <Alert variant="filled" 
          sx={{
          mt:1,
          backgroundColor:"rgb(248, 144, 28)",
          }}
          icon={false}
          >
          Please fill in the fields
          </Alert>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
