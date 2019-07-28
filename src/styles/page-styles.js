const styles = {
  page: {
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: 0
  },
  "@global": {
    ".page-exit": {
      opacity: 1
      // transform: "translateX(0)"
    },
    ".page-exit-active": {
      opacity: 0,
      // transform: "translateX(-100%)",
      transition: "opacity .5s ease-in-out"
      // transition: "transform .5s ease-in"
    },
    ".page-enter": {
      opacity: 0
      // transform: "translateX(100%)"
    },
    ".page-enter-active": {
      opacity: 1,
      // transform: "translateX(0)",
      transition: "opacity .5s ease-in-out"
      // transition: "transform .5s ease-in"
    }
  }
};

export default styles;
