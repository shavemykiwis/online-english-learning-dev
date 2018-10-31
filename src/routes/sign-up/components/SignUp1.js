import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import QueueAnim from "rc-queue-anim";
import { FormattedMessage } from "react-intl";
import Checkbox from "material-ui/Checkbox";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateProfileAction } from "actions/profile";
import { push } from "react-router-redux";

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
      width: "45%",
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
  checkbox: {
    width: "100%",
    marginBottom: 0
  },
  radioButton: {
    marginBottom: 20,
    borderBottomStyle: "groove",
    borderBottomWidth: 2,
    borderBottomColor: "#E9E9F0"
  },
  radioButton1: {
    marginBottom: 0,
    borderBottomStyle: "groove",
    borderBottomWidth: 2,
    borderBottomColor: "#E9E9F0"
  },
  radioLabelStyle: {
    fontSize: 11,
    fontFamily: "Lato"
  },
  radioContainer: {
    marginTop: 30
  },
  label: {
    fontSize: 10,
    color: "#BCBCBC",
    marginLeft: 40,
    fontFamily: "Lato"
  },
  link: {
    color: "#FA694B",
    fontSize: 11,
    cursor: "Pointer",
    fontFamily: "Lato"
  }
};

class SignUp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      plan: this.props.profile.plan,
      updates: false
    };
    this.handlePressSubmit = this.handlePressSubmit.bind(this);
    this.handlePlanChanged = this.handlePlanChanged.bind(this);
    this.handleUpdateChanged = this.handleUpdateChanged.bind(this);
  }

  handlePlanChanged(e) {
    this.setState({ plan: e.target.value });
  }

  handleUpdateChanged(e, checked) {
    this.setState({ updates: checked });
  }

  handlePressSubmit() {
    if (this.state.plan === "") {
      return;
    }
    this.props.actions.updateProfileAction({ plan: this.state.plan });
    this.props.actions.push("/sign-up/2");
  }

  render() {
    return (
      <QueueAnim type="alpha" duration={1000}>
        <div key="a">
          <p className="login-title-text text-center">
            <FormattedMessage id="signup.welcome_to" />
            <strong>
              <FormattedMessage id="full_chinese" />
            </strong>
          </p>
          <p className="login-welcome-text text-center">
            <FormattedMessage id="signup.you_ve_taken_your_first_step_into_a_larger_world" />
            , <br />
            <strong>
              <FormattedMessage id="@username" />
            </strong>
          </p>
          <div>
            <img alt="logo" src={images.signup.step2} className="signup-logo" />
          </div>

          <div style={cStyle.radioContainer}>
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="free"
              valueSelected={this.state.plan}
              onChange={this.handlePlanChanged}
            >
              <RadioButton
                value="free"
                label={
                  <FormattedMessage id="signup.unlimited_public_repositories_for_free" />
                }
                style={cStyle.radioButton}
                labelStyle={cStyle.radioLabelStyle}
              />
              <RadioButton
                value="paid"
                label={
                  <FormattedMessage id="signup.unlimited_private_repositories_for_7_month" />
                }
                style={cStyle.radioButton1}
                labelStyle={cStyle.radioLabelStyle}
              />
            </RadioButtonGroup>
            <label style={cStyle.label}>
              <FormattedMessage id="signup.don_t_worry_you_can_cancel_or_upgrade_at_any_time" />
            </label>
          </div>

          <div style={cStyle.linkContainer}>
            <FormattedMessage id="signup.send_me_updates_on_fullchinese_news_and_events">
              {txt => (
                <Checkbox
                  label={txt}
                  style={cStyle.checkbox}
                  labelStyle={cStyle.radioLabelStyle}
                  checked={this.state.updates}
                  onCheck={this.handleUpdateChanged}
                />
              )}
            </FormattedMessage>

            <label style={cStyle.label}>
              <FormattedMessage id="signup.unsubscribe_anytime_in_your_email_preferences" />
              .
              <a style={cStyle.link}>
                <FormattedMessage id="signup.learn_more" />
              </a>
            </label>
          </div>
          <div className="text-center">
            <FormattedMessage id="continue">
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
    app: state.app,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    updateProfileAction,
    push
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp1);
