import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

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

export default function Addcategory() {
  
  const [inputForm, setFormInput] = useState({
    ProductName: "",
    Catgory: "",
    image:"",
    Price: "",
  });

  const handelSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputForm);
  };

  const handelInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormInput({...inputForm, [name]: value})
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
                  name={"ProductName"}
                  defaultValue={inputForm.ProductName}
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
                    name={"Catgory"}
                    defaultValue={inputForm.Catgory}
                    onChange={handelInput}
                  >
                    <MenuItem value={"Burger"}>Burger</MenuItem>
                    <MenuItem value={"Pizza"}>Pizza</MenuItem>
                    <MenuItem value={"Hotdog"}>Hotdog</MenuItem>
                    <MenuItem value={"Taco"}>Taco</MenuItem>
                    <MenuItem value={"Snack"}>Snack</MenuItem>
                    <MenuItem value={"Drink"}>Drink</MenuItem>
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
                  name={"Price"}
                  defaultValue={inputForm.Price}
                  onChange={handelInput}
                />
              </Grid>
              <Grid xs={6} sm={12} item>
                <IconButton
                name={"image"}
                defaultValue={inputForm.image}
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
                  <input hidden accept="image/*" type="file" 
                  
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
    </div>
  );
}
