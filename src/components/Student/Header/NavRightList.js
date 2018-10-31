import React from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import Menu from "material-ui/Menu";
import IconButton from "material-ui/IconButton/IconButton";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logoutAction } from "actions/auth";

import images from "assets/public/images";

const ImgIconButtonStyle = {
  width: "60px",
  height: "60px"
};

const listItemStyle = {
  paddingLeft: "50px" // 36 + 16, algin with sub list
};

const iconStyle = {
  color: "#BCBCCB"
};

const liStyle = {
  display: "flex",
  alignItems: "center"
};

const searchContainer = {
  borderBottom: "solid 1.5px #BCBCCB",
  paddingBottom: "2px",
  paddingTop: "2px",
  display: "flex",
  alignItems: "center",
  color: "#BCBCCB"
};

const searchInput = {
  outline: "none",
  border: "none"
};

class NavRightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: undefined
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    this.props.actions.logoutAction();
  }
  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  isTeacher() {
    const { me } = this.props;
    if (me != undefined && me.role == "teacher") {
      return true;
    }
    return false;
  }

  render() {
    const { me } = this.props;
    return (
      <ul className="list-unstyled float-right">
        {this.isTeacher() && (
          <li style={liStyle}>
            <a href="/teacher/appboard/classes" target="_blank">
              {" "}
              teacher dashboard{" "}
            </a>{" "}
            &nbsp;&nbsp;
          </li>
        )}
        <li style={liStyle} className="hide-search-on-mobile">
          <div style={searchContainer}>
            <i className="material-icons">search</i>
            <input type="text" style={searchInput} placeholder="Search" />
          </div>
        </li>
        <li style={liStyle}>
          <IconButton>
            <img src={images.bubble_chat} />
          </IconButton>
        </li>
        <li style={liStyle}>
          <IconButton style={iconStyle}>
            <div
              className="material-icons mdl-badge mdl-badge--overlap"
              data-badge=" "
            >
              notifications
            </div>
          </IconButton>
        </li>
        <li style={liStyle}>
          <IconButton style={iconStyle}>
            <i className="material-icons">add</i>
          </IconButton>
        </li>
        <li
          style={{
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            color: "#BCBCCB"
          }}
        >
          {me.name}
          <IconMenu
            iconButtonElement={
              <IconButton style={ImgIconButtonStyle}>
                <img
                  src="/assets/images/g1.jpg"
                  alt="John Doe"
                  className="rounded-circle img30_30"
                />
              </IconButton>
            }
            onChange={this.handleChange}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            targetOrigin={{ horizontal: "right", vertical: "top" }}
            menuStyle={{ minWidth: "150px" }}
          >
            <MenuItem
              disabled
              primaryText={"Signed in as " + me.name}
              style={{ fontSize: "14px", lineHeight: "48px" }}
              innerDivStyle={listItemStyle}
              leftIcon={<i className="material-icons">person_outline</i>}
            />
            <MenuItem
              value="/app/page/about"
              primaryText="About"
              innerDivStyle={listItemStyle}
              style={{ fontSize: "14px", lineHeight: "48px" }}
              leftIcon={<i className="material-icons">person_outline</i>}
            />
            <MenuItem
              value="/app/dashboard"
              primaryText="Account Settings"
              style={{ fontSize: "14px", lineHeight: "48px" }}
              innerDivStyle={listItemStyle}
              leftIcon={<i className="material-icons">home</i>}
            />
            <MenuItem
              value="/app/dashboard"
              primaryText="Help"
              style={{ fontSize: "14px", lineHeight: "48px" }}
              innerDivStyle={listItemStyle}
              leftIcon={<i className="material-icons">home</i>}
            />
            <MenuItem
              primaryText="Log Out"
              innerDivStyle={listItemStyle}
              style={{ fontSize: "14px", lineHeight: "48px" }}
              leftIcon={<i className="material-icons">forward</i>}
              onClick={this.handleLogOut}
            />
          </IconMenu>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    app: state.app,
    me: state.auth.me
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { logoutAction };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavRightList)
);
