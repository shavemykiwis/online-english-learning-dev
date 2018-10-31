import React from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton/IconButton";
import { withRouter } from "react-router-dom";
import Divider from "material-ui/Divider";
import images from "assets/public/images";

const styles = {
  logo: {
    height: "30px"
  },
  container: {
    height: "60px",
    display: "flex",
    paddingLeft: "90px",
    justifyContent: "center",
    alignItems: "center"
  }
};

class NavLeftList extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {
    return (
      <div style={styles.container}>
        <a href="/student/">
          <img src={images.logo} style={styles.logo} />
        </a>
      </div>
    );
  }
}

module.exports = withRouter(NavLeftList);
