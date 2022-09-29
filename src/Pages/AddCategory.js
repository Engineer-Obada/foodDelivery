import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';

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

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Addcategory() {
  return (
    <div className="FavoritContainer">
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "10px 5px" }}>
        <CardContent>
          <form>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="standard-basic"
                  label="ProductName"
                  variant="standard"
                  placeholder="Enter Name Product"
                  fullWidth
                  
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <FormControl   fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Catgory
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                   variant="standard"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                />
              </Grid>
              <Grid xs={6} sm={12} item>
                <IconButton
                  aria-label="upload picture"
                  component="label"
                  style={{
                    backgroundColor: "#f8901c",
                    borderRadius: "15px",
                    color:"#FFF",
                  }}
                  sx={{
                    mt:3
                  }}
                  
                >
                  <input hidden accept="image/*" type="file" />
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
