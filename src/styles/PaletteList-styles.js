const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  },
  newLink: {
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid grey",
    transition: "all ease-in-out 1s",
    "&:hover": {
      borderColor: "transparent"
    }
  }
};
export default styles;
