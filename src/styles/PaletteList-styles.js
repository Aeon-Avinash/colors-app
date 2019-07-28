import sizes from "./styleHelpers";
import bg from "./bg.svg";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "auto",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#350eAA",
    backgroundImage: `url(${bg})`
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("sm")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      fontSize: "2rem",
      [sizes.down("xs")]: {
        fontSize: "1.5rem"
      }
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 47.5%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)"
    }
  },
  newLink: {
    color: "white",
    fontSize: "1.5rem",
    textDecoration: "none",
    borderBottom: "1px solid grey",
    transition: "all ease-in-out 1s",
    "&:hover": {
      borderColor: "transparent"
    },
    [sizes.down("xs")]: {
      fontSize: "1rem"
    }
  }
};
export default styles;
