import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import loadable from "react-loadable";
import Header from "components/Teacher/Header";
import Sidenav from "components/Teacher/Sidenav";
import Footer from "components/Teacher/Footer";
import Customizer from "components/Teacher/Customizer";
import Appboard from "../routes/appboard";

import "styles/custom/student.scss";

class TeacherApp extends React.Component {
  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                <Switch>
                  <Route path={`/teacher/appboard`} component={Appboard} />
                  <Redirect from="/teacher" to="/teacher/appboard" />
                </Switch>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </section>

        {/* <Customizer /> */}
      </div>
    );
  }
}

module.exports = TeacherApp;
