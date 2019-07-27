import chroma from "chroma-js";

const styles = {
  root: {
    backgroundColor: ({ color }) => color,
    color: "white",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-6px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover $deleteIcon": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    display: "flex",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase",
    "& span": {
      color: ({ color }) =>
        chroma(color).luminance() <= 0.08 ? "white" : "inherit"
    },
    "& span:last-child": {
      marginLeft: "auto",
      marginRight: "0.5rem"
    }
  },
  deleteIcon: {
    color: "rgba(0,0,0,0.5)",
    transition: "all 0.5s ease-in"
  }
};

export default styles;
