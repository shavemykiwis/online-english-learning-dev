import colors from "styles/custom/colors";

const styles = {
  navigations: {
    display: "flex",
    backgroundColor: colors.gray2,
    borderRadius: "10px",
    alignItems: "center"
  },
  navigationBtn: {
    width: "25%",
    textAlign: "center",
    border: `1px solid ${colors.gray}`,
    height: "30px"
  },
  navBtnBorderRadius: [
    {
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10
    },
    {},
    {
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    }
  ],
  navigationIcon: {
    color: colors.yellow1,
    fontSize: "30px",
    marginLeft: "10px",
    marginRight: "10px"
  }
};

export default styles;
