import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import QueueAnim from "rc-queue-anim";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";

import { signupAction } from "actions/auth";

import APPCONFIG from "constants/Config";

import { isValidEmail } from "utils";

import images from "assets/public/images";
import colors from "styles/custom/colors";

const cStyle = {
  mWidthStyle: { minWidth: "100px" },
  signupStyle: {
    width: "45%",
    borderRadius: "18px"
  },
  linkContainer: {
    display: "flex",
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
    style: { borderRadius: "18px" },
    style: {
      width: "70%",
      borderRadius: "18px"
    },
    labelStyle: {
      color: "white",
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

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      username: "",
      email: "",
      password: "",
      agree: false,
      showWarn: false
    };
    this.handlePressSubmit = this.handlePressSubmit.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handleAgreeChanged = this.handleAgreeChanged.bind(this);
  }

  handleAgreeChanged(e) {
    this.setState({ agree: !this.state.agree });
  }

  handleUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChanged(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  checkValidity() {
    return (
      this.state.username !== "" &&
      this.state.password !== "" &&
      this.state.email !== "" &&
      this.state.agree === true &&
      isValidEmail(this.state.email) === true
    );
  }

  handlePressSubmit() {
    if (this.checkValidity() === false) {
      this.setState({ showWarn: true });
      return;
    }
    this.setState({ showWarn: false });
    const payload = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.username,
      role: "student"
    };
    this.props.actions.signupAction(payload);
  }

  render() {
    return (
      <QueueAnim type="alpha" className="ui-animate" duration={1000}>
        <div key="1">
          <p className="login-title-text text-center">
            <FormattedMessage id="signup.join" />{" "}
            <strong>
              <FormattedMessage id="app_name" />
            </strong>
          </p>
          <p className="login-welcome-text text-center">
            <FormattedMessage id="signup.the_best_way_to_learn_chinese" />
          </p>
          <div>
            <img alt="logo" src={images.signup.step1} className="signup-logo" />
          </div>
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
                <FormattedMessage id="email">
                  {txt => (
                    <TextField
                      floatingLabelText={txt}
                      fullWidth
                      value={this.state.email}
                      onChange={this.handleEmailChanged}
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
                    />
                  )}
                </FormattedMessage>
              </div>
            </fieldset>
          </form>
          <div style={cStyle.linkContainer}>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.agree}
                  onChange={this.handleAgreeChanged}
                />{" "}
                <FormattedMessage id="i_agree_with_terms_and_conditions" />
              </label>
            </div>
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
          <div className="text-center">
            {this.props.app.loading && (
              <CircleProgress
                style={{
                  ...cStyle.login.style,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            )}
            {!this.props.app.loading && (
              <FormattedMessage id="signup.create_an_account">
                {txt => (
                  <RaisedButton
                    style={cStyle.login.style}
                    overlayStyle={cStyle.login.overlayStyle}
                    buttonStyle={cStyle.login.buttonStyle}
                    rippleStyle={cStyle.login.rippleStyle}
                    labelColor={colors.yellow}
                    labelStyle={cStyle.login.labelStyle}
                    label={txt}
                    onMouseUp={this.handlePressSubmit}
                  />
                )}
              </FormattedMessage>
            )}
          </div>
          <div className="terms-pp-container text-center">
            <a>
              <label>
                <FormattedMessage id="terms_of_use_privacy_policy" />
              </label>
            </a>
          </div>
        </div>
      </QueueAnim>
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
    signupAction
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
