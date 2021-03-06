import chroma from "chroma-js";
import sizes from "./styleHelpers";

const styles = {
  ColorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    marginBottom: "-6px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover $copyButton": {
      opacity: "1",
      transition: "opacity 0.5s ease-in"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showingFullPalette ? "20%" : "33.33%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showingFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showingFullPalette ? "5%" : "10%")
    }
  },
  // isLightColor: {
  //   color: props =>
  //     chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white"
  // },
  // isDarkColor: {
  //   color: props =>
  //     chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  // },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
    position: "absolute",
    right: "0px",
    bottom: "0px",
    background: "rgba(255, 255, 255, 0.3)",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    border: "none",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline - block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase",
    "& span": {
      color: props =>
        chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    }
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "6rem"
      }
    },
    "& p": {
      fontSize: "2rem",
      opacity: "0.3",
      fontWeight: "100",
      color: props =>
        chroma(props.background).luminance() >= 0.6
          ? "rgba(0,0,0,0.5)"
          : "white"
    }
  },
  showMsg: {
    opacity: "1",
    zIndex: "25",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};

export default styles;
