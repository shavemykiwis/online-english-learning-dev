import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "material-ui/Checkbox";
import QueueAnim from "rc-queue-anim";
import { FormattedMessage } from "react-intl";
import APPCONFIG from "constants/Config";
import PRORILECONFIG from "constants/ProfileConfig";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";

import { updateProfileAction, createProfileAction } from "actions/profile";

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
    style: { borderRadius: "18px" },
    style: {
      width: "45%",
      borderRadius: "18px",
      marginTop: "20px"
    },
    labelStyle: {
      color: "white",
      fontWeight: 300
    }
  },
  group: {
    marginTop: 10
  },
  groupTitle: {
    fontWeight: "bold",
    color: "#43425D",
    fontSize: 12,
    marginBottom: 0
  },
  groupContent: {
    display: "flex"
  },
  groupItem: {
    style: { width: "50%" },
    labelStyle: {
      fontSize: 11,
      fontFamily: "Lato",
      marginBottom: 0,
      color: "#43425D"
    }
  },
  textField: {
    color: "#BCBCBC",
    fontSize: 11,
    fontFamily: "Lato",
    width: "100%",
    border: "none",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#E9E9F0",
    outline: "none"
  },
  warn: {
    color: "red",
    marginBottom: "5px",
    marginTop: "5px"
  }
};

class SignUp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      level: this.props.profile.level,
      study_months: this.props.profile.study_months,
      study_reason: this.props.profile.study_reason,
      most_interested: this.props.profile.most_interested,
      showWarn: false
    };

    this.handleLevelChanged = this.handleLevelChanged.bind(this);
    this.handleStudyMonthsChanged = this.handleStudyMonthsChanged.bind(this);
    this.handleStudyReasonChanged = this.handleStudyReasonChanged.bind(this);
    this.handleMostInterestedChanged = this.handleMostInterestedChanged.bind(
      this
    );
    this.handlePressSubmit = this.handlePressSubmit.bind(this);
  }

  checkValidity() {
    return !(
      this.state.level === "" ||
      this.state.study_months === "" ||
      this.state.study_reason === "" ||
      this.state.most_interested === ""
    );
  }

  handlePressSubmit() {
    if (this.checkValidity() === false) {
      this.setState({ showWarn: true });
      return;
    }
    this.setState({ showWarn: false });
    this.props.actions.updateProfileAction({
      level: this.state.level,
      study_months: this.state.study_months,
      study_reason: this.state.study_reason,
      most_interested: this.state.most_interested
    });
    this.props.actions.createProfileAction();
  }

  handleLevelChanged(e) {
    this.setState({ level: e.target.value });
  }

  handleStudyMonthsChanged(e) {
    this.setState({ study_months: e.target.value });
  }

  handleStudyReasonChanged(e) {
    this.setState({ study_reason: e.target.value });
  }

  handleMostInterestedChanged(e) {
    this.setState({ most_interested: e.target.value });
  }

  render() {
    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        <div key="1">
          <p className="login-title-text text-center">
            <FormattedMessage id="signup.welcome_to" />{" "}
            <strong>
              <FormattedMessage id="app_name" />
            </strong>
          </p>
          <p className="login-welcome-text text-center">
            <FormattedMessage id="signup.you_ll_find_endless_opportunity_to_learn_code" />
            <br /> <FormattedMessage id="signup.and_create" />,{" "}
            <FormattedMessage id="@username" />
          </p>
          <div>
            <img alt="logo" src={images.signup.step3} className="signup-logo" />
          </div>

          <div style={cStyle.group}>
            <p style={cStyle.groupTitle}>
              <FormattedMessage id="signup.how_wold_you_describe_your_level" />
            </p>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.beginner" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={this.state.level === PRORILECONFIG.levels[0]}
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({ level: PRORILECONFIG.levels[0] });
                  } else {
                    this.setState({ level: "" });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.high_intermediate" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={this.state.level === PRORILECONFIG.levels[1]}
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({ level: PRORILECONFIG.levels[1] });
                  } else {
                    this.setState({ level: "" });
                  }
                }}
              />
            </div>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.low_intermediate" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={this.state.level === PRORILECONFIG.levels[2]}
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({ level: PRORILECONFIG.levels[2] });
                  } else {
                    this.setState({ level: "" });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.advanced" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={this.state.level === PRORILECONFIG.levels[3]}
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({ level: PRORILECONFIG.levels[3] });
                  } else {
                    this.setState({ level: "" });
                  }
                }}
              />
            </div>
          </div>

          <div style={cStyle.group}>
            <p style={cStyle.groupTitle}>
              <FormattedMessage id="signup.how_long_have_you_been_studying_chinese" />
            </p>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.just_started" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[0]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[0]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.two_years" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[1]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[1]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
            </div>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.less_than_six_months" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[2]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[2]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.more_than_three_years" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[3]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[3]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
            </div>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.one_year" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[4]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[4]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.more_than_ten_years" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_months === PRORILECONFIG.study_months[5]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_months: PRORILECONFIG.study_months[5]
                    });
                  } else {
                    this.setState({ study_months: -1 });
                  }
                }}
              />
            </div>
          </div>

          <div style={cStyle.group}>
            <p style={cStyle.groupTitle}>
              <FormattedMessage id="signup.why_are_you_studying_chinese" />
            </p>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.for_fun" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[0]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[0]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.travel" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[1]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[1]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
            </div>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.studying_at_school" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[2]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[2]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.work" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[3]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[3]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
            </div>
            <div style={cStyle.groupContent}>
              <Checkbox
                label={<FormattedMessage id="signup.love" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[4]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[4]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
              <Checkbox
                label={<FormattedMessage id="signup.other" />}
                style={cStyle.groupItem.style}
                labelStyle={cStyle.groupItem.labelStyle}
                checked={
                  this.state.study_reason === PRORILECONFIG.study_reasons[5]
                }
                onCheck={(e, checked) => {
                  if (checked === true) {
                    this.setState({
                      study_reason: PRORILECONFIG.study_reasons[5]
                    });
                  } else {
                    this.setState({ study_reason: -1 });
                  }
                }}
              />
            </div>
          </div>

          <div style={cStyle.group}>
            <p style={cStyle.groupTitle}>
              <FormattedMessage id="signup.about_you_and_what_you_are_most_interesting_in_learning" />
            </p>
            <FormattedMessage id="signup.eg_fullchinese_app_is_making_learning_chinese_very_and_fun">
              {txt => (
                <input
                  type="text"
                  style={cStyle.textField}
                  placeholder={txt}
                  value={this.state.most_interested}
                  onChange={this.handleMostInterestedChanged}
                />
              )}
            </FormattedMessage>
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
              <RaisedButton
                style={cStyle.login.style}
                overlayStyle={cStyle.login.overlayStyle}
                buttonStyle={cStyle.login.buttonStyle}
                rippleStyle={cStyle.login.rippleStyle}
                labelColor={colors.yellow}
                labelStyle={cStyle.login.labelStyle}
                label={<FormattedMessage id="signup.submit" />}
                onMouseUp={this.handlePressSubmit}
              />
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
    app: state.app,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    updateProfileAction,
    createProfileAction
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp2);
