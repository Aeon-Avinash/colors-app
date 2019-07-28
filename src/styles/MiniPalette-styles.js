const styles = {
  // "@global": {
  //   ".fade-exit": {
  //     backgroundColor: "red",
  //     opacity: 1
  //   },
  //   ".fade-exit-active": {
  //     backgroundColor: "red",
  //     opacity: 0,
  //     transition: "opacity 5s ease-out"
  //   }
  // },
  root: {
    backgroundColor: "white",
    border: "solid 1px black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    cursor: "pointer",
    "&:hover $deleteIcon": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "10px",
    zIndex: 100,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out"
  }
};

export default styles;
