import sizes from "./styleHelpers";

const styles = {
  appBarButtons: {
    margin: "0.5rem 1rem",
    "& button": {
      margin: "0 0.5rem",
      [sizes.down("sm")]: {
        margin: "0",
        marginRight: "0.5rem",
        padding: "0.2rem"
      }
    },
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("sm")]: {
      margin: "0.5rem"
    },
    [sizes.down("xs")]: {
      margin: "0"
    }
  }
};

export default styles;
