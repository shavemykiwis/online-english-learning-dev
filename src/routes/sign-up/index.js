import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignUp1 from "./components/SignUp1";
import SignUp2 from "./components/SignUp2";

import QueueAnim from "rc-queue-anim";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "styles/custom/login.scss";
import images from "assets/public/images";

class PageSignUp extends React.Component {
  renderContent() {
    return (
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-up/1" component={SignUp1} />
        <Route exact path="/sign-up/2" component={SignUp2} />
      </Switch>
    );
  }
  render() {
    return (
      <QueueAnim
        type="alpha"
        duration={1000}
        className="ui-animate queue-animate-container"
      >
        <div className="login-container" key="1">
          <img src={images.public_page_side_img} className="side-image" />
          <div className="login-content">{this.renderContent()}</div>
        </div>
      </QueueAnim>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    route: state.route
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSignUp);
