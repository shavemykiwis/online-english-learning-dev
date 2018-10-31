const date = new Date();
const year = date.getFullYear();

const locale = "zh"; // en for FullChinese, zh for FullEnglish

const APPCONFIG = {
  brand: "Material",
  user: "Lisa",
  year,
  productLink:
    "https://themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/19582625",
  AutoCloseMobileNav: true, // true, false. Automatically close sidenav on route change (Mobile only)
  color: {
    primary: "#00BCD4",
    success: "#8BC34A",
    info: "#66BB6A",
    infoAlt: "#7E57C2",
    warning: "#FFCA28",
    danger: "#F44336",
    text: "#3D4051",
    gray: "#EDF0F1"
  },
  settings: {
    layoutBoxed: false, // true, false
    navCollapsed: true, // true, false
    navBehind: false, // true, false
    fixedHeader: true, // true, false
    sidebarWidth: "middle", // small, middle, large
    colorOption: "14", // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    theme: "light" // light, gray, dark
  },
  locale: locale,
  apiURL:
    process.env.NODE_ENV === "development"
      ? `http://api.${
          locale === "zh" ? "fullchinese" : "fullchinese"
        }.com/api/1/`
      : `http://api.${
          locale === "zh" ? "fullchinese" : "fullchinese"
        }.com/api/1/`,
  apiEndPointPrefix:
    process.env.NODE_ENV === "development"
      ? `${locale === "zh" ? "fe_" : "fc_"}`
      : `${locale === "zh" ? "fe_" : "fc_"}`
};

module.exports = APPCONFIG;
