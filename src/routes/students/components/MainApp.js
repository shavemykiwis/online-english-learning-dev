import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import loadable from "react-loadable";
import Header from "components/Student/Header";
import Sidenav from "components/Student/Sidenav";
import Footer from "components/Student/Footer";
import Customizer from "components/Student/Customizer";
import Appboard from "../routes/appboard";

import "styles/custom/student.scss";

class StudentApp extends React.Component {
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
                  <Route path={`/student/appboard`} component={Appboard} />
                  <Redirect from="/student" to="/student/appboard" />
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

module.exports = StudentApp;
