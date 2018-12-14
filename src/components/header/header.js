import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <AppBar position="static" className={props.classes.appBar}>
      <Toolbar>
        <CameraIcon className={props.classes.icon} />
        <Typography variant="h4" color="inherit" noWrap>
          {props.heading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
