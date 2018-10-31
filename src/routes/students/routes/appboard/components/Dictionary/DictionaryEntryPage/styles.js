import colors from "styles/custom/colors";

const styles = {
  progress: {
    marginTop: "20%",
    marginBottom: "20%"
  },
  icon: {
    height: "20vh",
    position: "absolute",
    left: "calc(-10vh - 50px)"
  },
  square: {
    height: "30px",
    position: "absolute",
    left: "calc(5% - 10px)",
    top: "calc(10vh - 15px)"
  },
  diver: {
    position: "relative"
  },
  container: {
    position: "relative",
    minHeight: "400px",
    // height: '76vh',
    backgroundColor: "white",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    padding: "20px"
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerBtn: {
    overlayStyle: { borderRadius: "10px", height: 20 },
    buttonStyle: { borderRadius: "10px", height: 20, lineHeight: "20px" },
    rippleStyle: { borderRadius: "10px", height: 20 },
    style: {
      borderRadius: "12px",
      minWidth: 50,
      height: 24,
      boxShadow: "none",
      border: "solid 2px #fd7a46"
    },
    labelStyle: {
      fontFamily: "Lato",
      fontSize: 10,
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  headerBtnIcon: {
    color: colors.yellow,
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "5px"
  },
  headerTitle: {
    color: colors.gray1,
    fontSize: 18
  },
  wordBar: {
    marginTop: "20px",
    borderRadius: "10px",
    background: "linear-gradient(#FE8543 , #F75451)",
    padding: "10px"
  },
  wordBarImg: {
    width: "22px"
  },
  wordBarContent: {
    marginTop: "5px",
    marginBottom: "5px",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  wordBarContentDivider: {
    height: "60px",
    width: "1px",
    backgroundColor: colors.yellow2
  },
  wordBarText1: {
    fontSize: "30px",
    color: "white",
    fontWeight: "100"
  },
  wordBarText2: {
    fontSize: "20px",
    color: "white",
    fontWeight: "100"
  },
  content: {
    marginTop: "10px",
    padding: "5px",
    // overflowY: 'auto',
    minHeight: "150px"
    // height: 'calc(76vh - 225px)'
  },
  subtitle: {
    color: colors.yellow1,
    marginBottom: "5px"
  },
  padding10: {
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  comment: {
    color: colors.gray1,
    fontSize: "14px",
    marginBottom: "5px"
  },
  mainText: {
    fontSize: "18px",
    color: "black",
    marginBottom: "5px"
  },
  wordComponentsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "6px"
  },
  oneWord: {
    marginLeft: "3px",
    marginRight: "3px",
    backgroundColor: colors.yellow1,
    color: "black",
    borderRadius: "3px",
    fontSize: "25px",
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    textAlign: "center"
  },
  oneGroup: {
    backgroundColor: colors.mainBackground,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5
  }
};

export default styles;
