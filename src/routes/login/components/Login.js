import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { NavLink, withRouter } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";

import { loginAction } from "actions/auth";

import APPCONFIG from "constants/Config";

import images from "assets/public/images";
import colors from "styles/custom/colors";

const cStyle = {
  mWidthStyle: { minWidth: "100px" },
  signupStyle: {
    width: "45%",
    borderRadius: "18px"
  },
  twoContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
    marginTop: "10px"
  },
  login: {
    overlayStyle: { borderRadius: "18px" },
    buttonStyle: {
      borderRadius: "18px",
      backgroundImage: `linear-gradient(to top, #fe8543, #f75451)`
    },
    rippleStyle: { borderRadius: "18px" },
    style: {
      width: "45%",
      borderRadius: "18px"
    },
    labelStyle: {
      color: "white",
      fontWeight: 300
    }
  },
  signup: {
    overlayStyle: { borderRadius: "18px" },
    buttonStyle: { borderRadius: "18px" },
    rippleStyle: { borderRadius: "18px" },
    style: { borderRadius: "18px" },
    style: {
      width: "45%",
      borderRadius: "18px",
      boxShadow: "0 1px 4px #fd7a46"
    },
    labelStyle: {
      fontWeight: 300
    }
  },
  formContainer: {
    marginBottom: "30px"
  },
  formGroup: {
    marginBottom: "0"
  },
  warn: {
    color: "red",
    marginBottom: "20px"
  }
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      username: "alice@email.com",
      password: "pass",
      showWarn: false
    };
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handlePressLogin = this.handlePressLogin.bind(this);
  }

  handleUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  checkValidity() {
    return this.state.username !== "" && this.state.password !== "";
  }

  handlePressLogin() {
    if (this.checkValidity() === false) {
      this.setState({ showWarn: true });
      return;
    }
    this.setState({ showWarn: false });

    const search = this.props.location.search;
    const redirect =
      search === undefined || search === ""
        ? ""
        : decodeURIComponent(search.replace("?redirect=", ""));

    const payload = {
      email: this.state.username,
      password: this.state.password,
      redirect
    };
    this.props.actions.loginAction(payload);
  }

  render() {
    return (
      <div>
        <img alt="logo" src={images.logo} className="login-logo" />
        <p className="login-welcome-text text-center">
          <FormattedMessage id="login.welcome_login_to_fullchinese" />
        </p>
        <form className="form-horizontal" style={cStyle.formContainer}>
          <fieldset>
            <div className="form-group" style={cStyle.formGroup}>
              <FormattedMessage id="username">
                {txt => (
                  <TextField
                    floatingLabelText={txt}
                    fullWidth
                    value={this.state.username}
                    onChange={this.handleUsernameChanged}
                  />
                )}
              </FormattedMessage>
            </div>
            <div className="form-group" style={cStyle.formGroup}>
              <FormattedMessage id="password">
                {txt => (
                  <TextField
                    floatingLabelText={txt}
                    type="password"
                    fullWidth
                    value={this.state.password}
                    onChange={this.handlePasswordChanged}
                    required
                  />
                )}
              </FormattedMessage>
            </div>
          </fieldset>

          <div style={cStyle.linkContainer}>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> <FormattedMessage id="remember_me" />
              </label>
            </div>
            <NavLink to="/forgot-password">
              <FormattedMessage id="forgot_password" />
            </NavLink>
          </div>

          {this.state.showWarn &&
            this.checkValidity() === false && (
              <label style={cStyle.warn}>
                <FormattedMessage id="form.all_fields_are_required" />
              </label>
            )}

          {this.props.app.error && (
            <label style={cStyle.warn}>{this.props.app.errorMessage}</label>
          )}

          <div style={cStyle.twoContainer}>
            {this.props.app.loading && (
              <CircleProgress style={cStyle.login.style} />
            )}
            {!this.props.app.loading && (
              <FormattedMessage id="login">
                {txt => (
                  <RaisedButton
                    style={cStyle.login.style}
                    overlayStyle={cStyle.login.overlayStyle}
                    buttonStyle={cStyle.login.buttonStyle}
                    rippleStyle={cStyle.login.rippleStyle}
                    labelColor={colors.yellow}
                    labelStyle={cStyle.login.labelStyle}
                    label={txt}
                    onClick={this.handlePressLogin}
                  />
                )}
              </FormattedMessage>
            )}
            <FormattedMessage id="signup">
              {txt => (
                <RaisedButton
                  style={cStyle.signup.style}
                  overlayStyle={cStyle.signup.overlayStyle}
                  buttonStyle={cStyle.signup.buttonStyle}
                  rippleStyle={cStyle.signup.rippleStyle}
                  labelColor={colors.yellow}
                  label={txt}
                  href="/sign-up"
                  labelStyle={cStyle.signup.labelStyle}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="terms-pp-container text-center">
            <a>
              <label>
                <FormattedMessage id="terms_of_use_privacy_policy" />
              </label>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    loginAction
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
