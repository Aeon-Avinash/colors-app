import sizes from "./styleHelpers";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  PaletteColors: {
    height: "90%"
  },
  goBack: {
    backgroundColor: "black",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    marginBottom: "-6px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "& a": {
      textDecoration: "none"
    },
    opacity: "1",
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.33%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  },
  backButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontAize: "1rem",
    lineHeight: "30px",
    color: "white",
    textTransform: "uppercase",
    border: "none"
  }
};

export default styles;
