import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import FlatButton from "material-ui/FlatButton";
import images from "assets/public/images";
import "jquery-slimscroll/jquery.slimscroll.min";

import "styles/custom/student.scss";

const styles = {
  menuContainer: {
    marginTop: "0px"
  },
  menuItem: {
    marginTop: "5px",
    marginBottom: "5px",
    height: "61px",
    borderLeft: "solid 5px transparent"
  },
  menuItemSelected: {
    height: "61px",
    marginTop: "5px",
    marginBottom: "5px",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderLeft: "solid 5px #F9614D"
  },
  menuItemIcon: {
    width: "30px"
  },
  menuItemText: {
    marginLeft: "20px",
    color: "white"
  },
  menuItemTextSelected: {
    marginLeft: "20px",
    color: "#F9614D"
  },
  link: {
    display: "flex",
    alignItems: "center"
  }
};

class SidebarContent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: "100%"
    });
  }

  isActive(link) {
    const pathname = this.props.location.pathname;
    return pathname.toLowerCase().includes(link.toLowerCase());
  }

  render() {
    return (
      <ul
        className="nav"
        ref={c => {
          this.nav = c;
        }}
        style={styles.menuContainer}
      >
        <li
          style={
            this.isActive("/teacher/appboard/classes")
              ? styles.menuItemSelected
              : styles.menuItem
          }
        >
          <NavLink to="/teacher/appboard/classes" style={styles.link}>
            <img
              src={
                this.isActive("/teacher/appboard/classes")
                  ? images.sidemenu.classes2
                  : images.sidemenu.classes1
              }
              style={styles.menuItemIcon}
            />
            <span
              className="nav-text"
              style={
                this.isActive("/teacher/appboard/classes")
                  ? styles.menuItemTextSelected
                  : styles.menuItemText
              }
            >
              <FormattedMessage id="classes" />
            </span>
          </NavLink>
        </li>
        <li
          style={
            this.isActive("/teacher/appboard/books")
              ? styles.menuItemSelected
              : styles.menuItem
          }
        >
          <NavLink to="/teacher/appboard/books" style={styles.link}>
            <img
              src={
                this.isActive("/teacher/appboard/books")
                  ? images.sidemenu.books2
                  : images.sidemenu.books1
              }
              style={styles.menuItemIcon}
            />
            <span
              className="nav-text"
              style={
                this.isActive("/teacher/appboard/books")
                  ? styles.menuItemTextSelected
                  : styles.menuItemText
              }
            >
              <FormattedMessage id="books" />
            </span>
          </NavLink>
        </li>
        <li
          style={
            this.isActive("/teacher/appboard/texts")
              ? styles.menuItemSelected
              : styles.menuItem
          }
        >
          <NavLink to="/teacher/appboard/texts" style={styles.link}>
            <img
              src={
                this.isActive("/teacher/appboard/texts")
                  ? images.sidemenu.texts2
                  : images.sidemenu.texts1
              }
              style={styles.menuItemIcon}
            />
            <span
              className="nav-text"
              style={
                this.isActive("/teacher/appboard/texts")
                  ? styles.menuItemTextSelected
                  : styles.menuItemText
              }
            >
              <FormattedMessage id="texts" />
            </span>
          </NavLink>
        </li>
        <li
          style={
            this.isActive("/teacher/appboard/notebooks")
              ? styles.menuItemSelected
              : styles.menuItem
          }
        >
          <NavLink to="/teacher/appboard/notebooks" style={styles.link}>
            <img
              src={
                this.isActive("/teacher/appboard/notebooks")
                  ? images.sidemenu.notebooks2
                  : images.sidemenu.notebooks1
              }
              style={styles.menuItemIcon}
            />
            <span
              className="nav-text"
              style={
                this.isActive("/teacher/appboard/notebooks")
                  ? styles.menuItemTextSelected
                  : styles.menuItemText
              }
            >
              <FormattedMessage id="notebooks" />
            </span>
          </NavLink>
        </li>
        <li
          style={
            this.isActive("/teacher/appboard/store")
              ? styles.menuItemSelected
              : styles.menuItem
          }
        >
          <NavLink to="/teacher/appboard/store" style={styles.link}>
            <img
              src={
                this.isActive("/teacher/appboard/store")
                  ? images.sidemenu.store2
                  : images.sidemenu.store1
              }
              style={styles.menuItemIcon}
            />
            <span
              className="nav-text"
              style={
                this.isActive("/teacher/appboard/store")
                  ? styles.menuItemTextSelected
                  : styles.menuItemText
              }
            >
              <FormattedMessage id="store" />
            </span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

module.exports = withRouter(SidebarContent);
