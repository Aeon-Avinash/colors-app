import { drawerWidth, appBarHeight } from "./styleConstants";

const styles = theme => ({
  appBar: {
    height: `${appBarHeight}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }).AppBar,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  appButtons: {
    margin: "0.5rem 1rem",
    "& button": {
      margin: "0 0.5rem"
    },
    "& a": {
      textDecoration: "none"
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  }
});

export default styles;
