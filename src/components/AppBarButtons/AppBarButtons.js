import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import styles from "../../styles/AppBarButtons-styles";

const AppBarButtons = ({ classes, handleOpenDialog }) => {
  const matchesBelowSM = useMediaQuery("(max-width: 767.98px");
  return (
    <div className={classes.appBarButtons}>
      <Link to="/">
        <Button variant="contained" color="secondary">
          {`${matchesBelowSM ? "Back" : "Go Back"}`}
        </Button>
      </Link>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        {`${matchesBelowSM ? "Save" : "Save Palette"}`}
      </Button>
    </div>
  );
};

export default withStyles(styles)(AppBarButtons);
