import React from "react";
import { TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <TextField
        className="textField"
        style={{ backgroundColor: "white" }}
        variant="filled"
        label="Search for items..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    );
  }
}

export default SearchBar;
