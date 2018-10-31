import React from "react";
import QueueAnim from "rc-queue-anim";

import { FormattedMessage } from "react-intl";

import { NavLink } from "react-router-dom";

import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import IconButton from "material-ui/IconButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import HardwareTabletAndroid from "material-ui/svg-icons/hardware/tablet-android";

import images from "assets/public/images";

import colors from "styles/custom/colors";

import "styles/custom/welcome.scss";

import styles from "./styles";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const socials = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <QueueAnim
        type="alpha"
        duration={2000}
        className="ui-animate queue-animate-container"
      >
        <div className="custom-container" key="1">
          <div className="header">
            <div className="one-container text-center">
              <img src={images["logo"]} className="logo" />
            </div>
            <div className="one-container">
              <FormattedMessage id="students">
                {txt => (
                  <FlatButton
                    style={styles.mWidthStyle}
                    label={txt}
                    href="/students"
                    {...styles.flatRoundButton}
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="teachers">
                {txt => (
                  <FlatButton
                    style={styles.mWidthStyle}
                    label={txt}
                    {...styles.flatRoundButton}
                    href="/teachers"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="login">
                {txt => (
                  <FlatButton
                    style={styles.mWidthStyle}
                    label={txt}
                    {...styles.flatRoundButton}
                    onMouseUp={this.handleLogin}
                    href="/login"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="signup">
                {txt => (
                  <RaisedButton
                    style={styles.signupStyle}
                    overlayStyle={styles.raisedRoundButton.overlayStyle}
                    buttonStyle={styles.raisedRoundButton.buttonStyle}
                    rippleStyle={styles.raisedRoundButton.rippleStyle}
                    labelColor={colors.yellow}
                    labelStyle={styles.raisedRoundButton.labelStyle}
                    label={txt}
                    href="/sign-up"
                  />
                )}
              </FormattedMessage>
            </div>
          </div>

          <div style={styles.welcomeContainer}>
            <img src={images.welcome.welcome} className="welcome-image" />

            <div style={styles.welcomeTextContainer}>
              <span>
                <FormattedMessage id="welcome.full_chinese_is_the_fastest" />
                <br />
                <FormattedMessage id="welcome.way" />
                <br />
                <FormattedMessage id="welcome.to_learn_chinese" />
              </span>
            </div>

            <div style={styles.btnsContainer}>
              <a style={styles.storeBtn}>
                <img style={styles.macIcon} src={images.welcome.mac} />
                <span style={styles.storeLabel}>
                  <FormattedMessage id="welcome.get_on_ios" />
                </span>
              </a>
              <a style={styles.storeBtn}>
                <img style={styles.androidIcon} src={images.welcome.android} />
                <span style={styles.storeLabel}>
                  <FormattedMessage id="welcome.get_on_android" />
                </span>
              </a>
            </div>
          </div>

          <div className="body-content">
            <div style={styles.video1Container}>
              <img src={images.welcome.video1} style={styles.video1} />
            </div>
            <div style={styles.bodyContentBelowVideo1}>
              <div style={styles.subContainer1.style}>
                <p style={styles.subContainer1.p1}>
                  <FormattedMessage id="welcome.it_s_not_just_how_much_you_know_it_s_also_how_fast_you" />
                </p>
                <p style={styles.subContainer1.p2}>
                  <FormattedMessage id="welcome.become_a_super_fast" />, <br />
                  <strong>
                    <FormattedMessage id="black_belt" />
                  </strong>{" "}
                  <FormattedMessage id="welcome.learner" />
                </p>
                <img
                  src={images.welcome.tie2}
                  style={styles.subContainer1.img}
                />
                <p style={styles.subContainer1.p3}>
                  <FormattedMessage id="welcome.most_students_spend_years_learning_painfully_and_slowly_we_teach_you_the_skills_to_make" />
                  <br />
                  <FormattedMessage id="welcome.learning_much_faster_and_fun_it_takes_a_little_bit_of_time_but_you_will_see_results_the_first" />
                  <br />
                  <FormattedMessage id="welcome.week_if_you_accept_to_master_learning_skills_one_stp_at_a_time" />
                  .
                </p>
              </div>

              <div style={styles.beltsContainer.style}>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie6}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="white_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.this_is_most_people_starting_point" />
                    .{" "}
                    <FormattedMessage id="welcome.you_have_the_desire_maybe_some_experience_but_you_just_follow_instructions" />
                    .<br />
                    <FormattedMessage id="welcome.unfortunately_a_majority_of_students_in_language_stay_at_that_point_for_a_very_very_long_time" />
                    .
                  </span>
                </div>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie1}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="yellow_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.you_master_the_basic_study_habit_of_learning_and_retaining_new_material" />
                    .
                    <FormattedMessage id="welcome.this_is_the_most_important_skillset" />
                    . <FormattedMessage id="You" />
                    <br />
                    <FormattedMessage id="welcome.will_see_progress_immediately_and_you_will_never_forget_it" />
                    .
                  </span>
                </div>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie5}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="orange_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.you_can_now_master_skills_that_allow_you_to_navigate_efficiently_between_sound_and_text" />
                    .
                  </span>
                </div>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie4}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="green_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.you_will_master_how_to_learn_a_technique_that_allows_you_to_learn" />
                    .
                    <FormattedMessage id="welcome.retain_new_words_such_that_you_can_reuse" />
                    <br />
                    <FormattedMessage id="welcome.them_in_real_time" />.
                  </span>
                </div>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie3}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="blue_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.you_will_master_how_to_absorb_massive_reading_material_for_fun" />
                    .
                    <FormattedMessage id="welcome.the_skill_can_speed_up_your_initial_learning_speed" />
                    <br />
                    <FormattedMessage id="welcome.but_also_bring_you_to_full_literacy" />
                    .
                  </span>
                </div>
                <div style={styles.beltsContainer.oneBeltContainer}>
                  <img
                    src={images.welcome.tie2}
                    style={styles.beltsContainer.img}
                  />
                  <span style={styles.beltsContainer.span1}>
                    <FormattedMessage id="black_belt" />
                  </span>
                  <span style={styles.beltsContainer.span2}>
                    <FormattedMessage id="welcome.because_you_understand_all_the_learning_skills" />
                    ,
                    <FormattedMessage id="welcome.you_can_combine_them_in_a_way_that_s_most_effective_for_you" />
                    .<br />
                    <FormattedMessage id="welcome.however_you_cannot_skip_to_that_step_you_have_to_master_the_other_skills_first_otherwise_it_will_have_no_value_for" />
                    <br />
                    <FormattedMessage id="you" />.
                  </span>
                </div>
              </div>
              <div style={styles.video2Container.style}>
                <div style={styles.video2Container.left}>
                  <p style={styles.video2Container.span1}>
                    <FormattedMessage id="welcome.watch_video" /> >
                  </p>
                  <p style={styles.video2Container.span2}>
                    <FormattedMessage id="welcome.learn_more_about_the_belt_system" />
                  </p>
                </div>
                <div style={styles.video2Container.right}>
                  <img
                    src={images.welcome.video1}
                    style={styles.video2Container.video2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={styles.bottomContainer.style}>
            <div style={styles.bottomContainer.textDiv}>
              <p style={styles.bottomContainer.text1}>
                <FormattedMessage id="welcome.the_core_of_the_fullchinese" />
                <br />
                <FormattedMessage id="welcome.method" />
              </p>
              <div style={styles.bottomContainer.divider} />
              <p style={styles.bottomContainer.text2}>
                <FormattedMessage id="welcome.comment1" />
                <br />
                <FormattedMessage id="welcome.comment2" />
                <br />
                <FormattedMessage id="welcome.comment3" />
                <br />
                <FormattedMessage id="welcome.comment4" />
                <br />
                <FormattedMessage id="welcome.comment5" />
                <br />
                <FormattedMessage id="welcome.comment6" />
              </p>
            </div>
            <img
              src={images.welcome.backlogo}
              style={styles.bottomContainer.bottomLogo}
            />
            <a>
              <div style={styles.bottomContainer.btnContainer}>
                <img
                  src={images.welcome.rocket}
                  style={styles.bottomContainer.btnImg}
                />
                <FormattedMessage id="welcome.get_started" />
              </div>
            </a>
          </div>
          <div style={styles.footContainer.style}>
            <div style={styles.footContainer.left}>
              <FormattedMessage id="welcome.2018_full_chinese" />
            </div>
            <div style={styles.footContainer.right}>
              {socials.map((value, index) => (
                <img
                  src={images.welcome[`social${value}`]}
                  key={index}
                  style={styles.footContainer.img}
                />
              ))}
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

export default Welcome;
