import colors from "../../../styles/custom/colors";

const styles = {
  welcomeContainer: {
    position: "relative",
    height: "calc(49vw)"
  },
  welcomeTextContainer: {
    top: "40%",
    position: "absolute",
    right: "0",
    left: "0",
    textAlign: "center",
    fontSize: "2.3vw",
    lineHeight: "1.3",
    color: "white",
    fontWeight: "300"
  },
  btnsContainer: {
    top: "65%",
    position: "absolute",
    right: "0",
    left: "0",
    textAlign: "center"
  },
  storeBtn: {
    padding: 10,
    borderRadius: 30,
    border: "solid white 2px",
    margin: 10
  },
  androidIcon: {
    height: 25,
    paddingBottom: 4,
    paddingTop: 3
  },
  macIcon: {
    height: 25,
    paddingBottom: 6
  },
  storeIcon: {
    height: 25
  },
  storeLabel: {
    color: "white",
    lineHeight: "25px",
    marginLeft: "6px",
    fontWeight: "300",
    fontSize: "12px"
  },
  mWidthStyle: {
    minWidth: "80px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  signupStyle: {
    minWidth: "70px",
    marginLeft: "30px",
    borderRadius: "15px",
    height: "32px",
    boxShadow: "none",
    border: "solid 1px #fd7a46"
  },
  raisedRoundButton: {
    overlayStyle: { borderRadius: "15px", height: 30 },
    buttonStyle: { borderRadius: "15px", height: 30, lineHeight: "30px" },
    rippleStyle: { borderRadius: "15px", height: 30 },
    style: { borderRadius: "15px", minWidth: 70, height: 30 },
    labelStyle: {
      fontFamily: "Lato",
      fontSize: 10,
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  flatRoundButton: {
    style: {
      borderRadius: "15px",
      minWidth: 70,
      height: "30",
      lineHeight: "30px"
    },
    labelStyle: {
      fontFamily: "Lato",
      color: "#888888",
      fontSize: 10,
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  video1Container: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: "-12vw",
    textAlign: "center"
  },
  video1: {
    width: "65%"
  },
  bodyContentBelowVideo1: {
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  subContainer1: {
    style: {
      color: "#5e5655",
      textAlign: "center"
    },
    p1: {
      marginBottom: 0,
      fontSize: "1.8vw",
      fontWeight: "300",
      lineHeight: "1.3"
    },
    p2: {
      fontSize: "2.2vw",
      fontWeight: "300",
      lineHeight: "1.3",
      marginBottom: "0"
    },
    img: {
      width: "4vw",
      margin: "2vw"
    },
    p3: {
      fontSize: "1.2vw",
      lineHeight: "1.3",
      marginBottom: 0
    }
  },
  beltsContainer: {
    style: {
      marginTop: "5vw",
      marginBottom: "5vw"
    },
    oneBeltContainer: {
      display: "flex",
      padding: "10px",
      borderRadius: "7px",
      backgroundColor: "white",
      alignItems: "center",
      color: colors.defaultGray,
      marginTop: "10px",
      marginBottom: "10px"
    },
    img: {
      width: "15%",
      padding: "12px"
    },
    span1: {
      width: "15%",
      textAlign: "center",
      fontSize: "1.3vw",
      fontWeight: "300",
      padding: "5px"
    },
    span2: {
      width: "70%",
      fontWeight: "300",
      lineHeight: "1.3",
      fontSize: "0.8vw",
      padding: "5px"
    }
  },
  video2Container: {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    left: {
      width: "32%",
      textAlign: "right"
    },
    right: {
      width: "68%",
      height: "16vw"
    },
    video2: {
      position: "absolute",
      width: "43%",
      left: "40%"
    },
    span1: {
      color: colors.yellow1,
      marginBottom: 0,
      fontSize: "1.8vw"
    },
    span2: {
      fontSize: "1.2vw",
      color: colors.defaultGray1
    }
  },
  bottomContainer: {
    style: {
      backgroundColor: colors.welcomeFooter,
      textAlign: "center",
      paddingBottom: "80px"
    },
    textDiv: {
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "10vw",
      textAlign: "center"
    },
    text1: {
      marginBottom: "20px",
      marginTop: "10px",
      lineHeight: "1.3",
      color: "white",
      fontWeight: "200",
      fontSize: "2.2vw"
    },
    divider: {
      width: "4vw",
      height: "2px",
      backgroundColor: colors.yellow1,
      marginLeft: "auto",
      marginRight: "auto"
    },
    text2: {
      marginBottom: 0,
      marginTop: "20px",
      lineHeight: "1.4",
      fontSize: "1.1vw",
      color: "rgba(255,255,255,0.5)",
      fontWeight: "100"
    },
    bottomLogo: {
      width: "70%",
      marginTop: "40px"
    },
    btnContainer: {
      color: "white",
      width: "40vw",
      border: "solid 1px white",
      color: "white",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
      padding: "8px",
      textAlign: "center",
      borderRadius: "30px",
      fontSize: "12px",
      fontWeight: "100"
    },
    btnImg: {
      width: "15px",
      position: "absolute",
      left: "31vw"
    }
  },
  footContainer: {
    style: {
      backgroundColor: colors.welcomeFooter1,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      padding: "25px",
      alignItems: "center"
    },
    left: {
      width: "50%",
      textAlign: "center",
      color: "rgba(255,255,255,0.3)",
      fontSize: "1vw"
    },
    right: {
      width: "50%"
    },
    img: {
      width: "30px",
      marginRight: "10px"
    }
  }
};

export default styles;
