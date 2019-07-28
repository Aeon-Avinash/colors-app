import { DRAWER_WIDTH, APPBAR_HEIGHT } from "./styleConstants";
import sizes from "./styleHelpers";

const styles = theme => ({
  appBar: {
    height: `${APPBAR_HEIGHT}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }).AppBar,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formNavTitle: {
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
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
