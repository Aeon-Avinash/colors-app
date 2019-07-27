import { drawerWidth } from "./styleConstants";

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerContainer: {
    // margin: "0 auto",
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  drawerButtons: {
    width: "100%",
    "& button": {
      width: "50%"
    }
  },
  colorPicker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  drawerForm: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textInputField: {
    width: "100%",
    height: "70px"
  },
  addColorButton: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  }
});

export default styles;
