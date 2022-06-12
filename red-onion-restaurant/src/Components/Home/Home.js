import React from "react";
import { TextField, Button } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h1>Best foods wait for your belly</h1>
          <TextField

            style={{ width: "500px" }}
            label="Search your favourite food"
            placeholder="Type food name"
            multiline
          ></TextField>{" "}
          <Button color="error" variant="outlined" style={{ height: "55px" }}>
            Search
          </Button>
        </div>{" "}
        <div className="form-group">
						<input type="search" placeholder="Search food items" className="form-control" />
						<button className="btn btn-danger btn-round btn-round" type="button" id="button-addon2">
							Search
						</button>
					</div>
      </div>
    </div>
  );
};

export default Home;
