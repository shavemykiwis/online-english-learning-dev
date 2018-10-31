import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Route, Switch, Redirect } from "react-router-dom";

import StudentApp from "routes/students/";
import TeacherApp from "routes/teachers/";
import Page404 from "routes/404/";
import Page500 from "routes/500/";
import PageConfirmEmail from "routes/confirm-email/";
import PageForgotPassword from "routes/forgot-password/";
import PageFullscreen from "routes/fullscreen/";
import PageLockScreen from "routes/lock-screen/";
import PageLogin from "routes/login/";
import PageSignUp from "routes/sign-up/";

import Welcome from "routes/welcome";

// = styles =
// 3rd
import "styles/bootstrap.scss";
// custom
import "styles/layout.scss";
import "styles/theme.scss";
import "styles/ui.scss";
import "styles/app.scss";

import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import grayTheme from "./themes/grayTheme";

class App extends Component {
  componentDidMount() {}

  render() {
    const {
      match,
      location,
      layoutBoxed,
      navCollapsed,
      navBehind,
      fixedHeader,
      sidebarWidth,
      theme,
      authenticated
    } = this.props;

    if (authenticated === false) {
      // return public pages
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
          <div id="app-inner">
            <div className="preloaderbar hide">
              <span className="bar" />
            </div>
            <Switch>
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/login" component={PageLogin} />
              <Route path="/sign-up" component={PageSignUp} />
              <Redirect from="/" to="/welcome" />
            </Switch>
          </div>
        </MuiThemeProvider>
      );
    }

    let materialUITheme;
    switch (theme) {
      case "gray":
        materialUITheme = grayTheme;
        break;
      case "dark":
        materialUITheme = darkTheme;
        break;
      default:
        materialUITheme = lightTheme;
    }

    const isRoot = location.pathname === "/";
    if (isRoot) {
      return <Redirect to={`/${this.props.role}/`} />;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
        <div id="app-inner">
          <div className="preloaderbar hide">
            <span className="bar" />
          </div>
          <div
            className={classnames("app-main full-height", {
              "fixed-header": fixedHeader,
              "nav-collapsed": navCollapsed,
              "nav-behind": navBehind,
              "layout-boxed": layoutBoxed,
              "theme-gray": theme === "gray",
              "theme-dark": theme === "dark",
              "sidebar-sm": sidebarWidth === "small",
              "sidebar-lg": sidebarWidth === "large"
            })}
          >
            <Switch>
              <Route exact path="/confirm-email" component={PageConfirmEmail} />
              <Route path="/student" component={StudentApp} />
              <Route path="/teacher" component={TeacherApp} />
              <Redirect from="/" to="/student" /> }
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
  authenticated: state.auth.authenticated,
  role: state.auth.me.role,
  route: state.route
});

module.exports = connect(mapStateToProps)(App);
