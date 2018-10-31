import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import "styles/custom/login.scss";
import images from "assets/public/images";

import Login from "./components/Login";

const PageLogin = () => (
  <QueueAnim
    type="alpha"
    duration={1000}
    className="ui-animate queue-animate-container"
  >
    <div className="login-container" key="1">
      <img src={images.public_page_side_img} className="side-image" />
      <div className="login-content">
        <Login />
      </div>
    </div>
  </QueueAnim>
);

export default PageLogin;
