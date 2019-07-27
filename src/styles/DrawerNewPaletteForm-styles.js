import { DRAWER_WIDTH } from "./styleConstants";

const styles = theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerContainer: {
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
