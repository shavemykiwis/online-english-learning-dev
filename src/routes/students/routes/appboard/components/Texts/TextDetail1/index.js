import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";

import { studyTextAction, getTextDetailAction } from "actions/texts";
import CircleProgress from "components/CircleProgress";
import NavigationButtons from "components/NavigationButtons";

import colors from "styles/custom/colors";

import mockup from "./mockup";
import styles from "./styles";

class TextDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWord: undefined,
      html: ""
    };
    this.handleClickNavigation = this.handleClickNavigation.bind(this);
    this.handleClickWordBar = this.handleClickWordBar.bind(this);
  }
  componentDidMount() {
    const text_sha1 = this.props.match.params.sha1;
    const { text, textInitialized } = this.state;
    if (!textInitialized) {
      this.props.actions.getTextDetailAction(text_sha1);
    } else {
      const { text } = this.state;
      if (text && text.sha1 != text_sha1) {
        this.props.actions.getTextDetailAction(text_sha1);
      }
    }
    this.handleClickOnWord = this.handleClickOnWord.bind(this);
  }

  handleClickWordBar() {
    const { selectedWord } = this.state;
    if (selectedWord === undefined) {
      return;
    }
    this.props.actions.push(`/student/appboard/dictionary/${selectedWord.id}`);
  }

  handleClickNavigation(direction) {
    const { selectedWord } = this.state;
    const { text } = this.props;
    const spans = text.json_text.spans;
    if (selectedWord === undefined) {
      this.setState({
        selectedWord: spans[0]
      });
      return;
    }
    let selectedWordIndex = 0;
    for (let index = 0; index < spans.length; index++) {
      const element = spans[index];
      if (element.spanID === selectedWord.spanID) {
        selectedWordIndex = index;
        break;
      }
    }
    switch (direction) {
      case 0: // left
        selectedWordIndex =
          (selectedWordIndex - 1 + spans.length) % spans.length;
        this.setState({ selectedWord: spans[selectedWordIndex] });
        break;
      case 1: // down
      case 2: // top
      case 3: // right
        selectedWordIndex = (selectedWordIndex + 1) % spans.length;
        this.setState({ selectedWord: spans[selectedWordIndex] });
        break;
    }
  }

  handleClickOnWord(e) {
    const id = e.target.data;
    const { spans } = this.state.json_text;

    for (let index = 0; index < spans.length; index++) {
      const element = spans[index];

      if (Number(id) === Number(element.spanID)) {
        this.setState({
          selectedWord: element
        });

        return;
      }
    }
  }

  getHTMLForWord(word) {
    const { selectedWord } = this.state;
    if (selectedWord === undefined || span.spanID !== selectedWord.spanID) {
      return `<span class="texts-html-body-word" onclick="var elem = document.getElementById('div-for-text-word-click'); elem.data=${
        word.spanID
      }; elem.click()">${word.word}</span>`;
    } else {
      return `<span class="texts-html-body-word-selected">${word.word}</span>`;
    }
  }

  renderIcon() {
    return <img src={images.common.texts5} style={styles.icon} />;
  }

  renderSquare() {
    return <img src={images.common.square} style={styles.square} />;
  }

  renderHeader() {
    const { text } = this.props;
    return (
      <div style={styles.header}>
        <FormattedMessage id="texts.texts">
          {txt => (
            <RaisedButton
              style={styles.headerBtn.style}
              overlayStyle={styles.headerBtn.overlayStyle}
              buttonStyle={styles.headerBtn.buttonStyle}
              rippleStyle={styles.headerBtn.rippleStyle}
              labelColor={colors.yellow}
              labelStyle={styles.headerBtn.labelStyle}
              label={txt}
              icon={
                <i className="material-icons" style={styles.headerBtnIcon}>
                  keyboard_arrow_left
                </i>
              }
            />
          )}
        </FormattedMessage>

        <span style={styles.headerTitle}>{text.title}</span>

        <FormattedMessage id="More">
          {txt => (
            <RaisedButton
              style={styles.headerBtn.style}
              overlayStyle={styles.headerBtn.overlayStyle}
              buttonStyle={styles.headerBtn.buttonStyle}
              rippleStyle={styles.headerBtn.rippleStyle}
              labelColor={colors.yellow}
              labelStyle={styles.headerBtn.labelStyle}
              label={txt}
            />
          )}
        </FormattedMessage>
      </div>
    );
  }

  renderWordBar() {
    const { selectedWord } = this.state;
    var spanProperties = {};
    if (selectedWord == undefined) {
      this.handleClickNavigation(3);
    } else if (selectedWord.elements != undefined) {
      spanProperties = selectedWord.elements.reduce(function(obj, item) {
        obj[item.att] = item.val;
        return obj;
      }, {});
    }
    return (
      <div style={styles.wordBar}>
        <div>
          <img
            src={images.common.star_outline}
            style={styles.wordBarImg}
            className="normal-cursor-pointer"
          />
        </div>
        <div
          style={styles.wordBarContent}
          onClick={this.handleClickWordBar}
          className="normal-cursor-pointer"
        >
          {selectedWord !== undefined && (
            <div>
              <span style={styles.wordBarText1}>{spanProperties.trans}</span>
              &nbsp;&nbsp;
              <span style={styles.wordBarText2}>({spanProperties.phon})</span>
            </div>
          )}

          <div style={styles.wordBarContentDivider} />
          {selectedWord !== undefined && (
            <div>
              <span style={styles.wordBarText1}>{spanProperties.word}</span>
              &nbsp;&nbsp;
              <span style={styles.wordBarText2}>({spanProperties.root})</span>
            </div>
          )}
        </div>
        <div>
          <img
            src={images.common.talk_outline}
            style={styles.wordBarImg}
            className="normal-cursor-pointer"
          />
        </div>
      </div>
    );
  }

  getHTMLForContent() {
    const { text } = this.props;
    return (
      '<div class="texts-html-body-content">' +
      text.json_text.content +
      "</div>"
    );
  }

  renderNavigations() {
    return (
      <NavigationButtons
        onLeft={() => {
          this.handleClickNavigation(0);
        }}
        onBottom={() => {
          this.handleClickNavigation(1);
        }}
        onTop={() => {
          this.handleClickNavigation(2);
        }}
        onRight={() => {
          this.handleClickNavigation(3);
        }}
      />
    );
  }

  renderContent() {
    const html = this.getHTMLForContent();
    return (
      <div style={styles.content}>
        <div
          style={styles.htmlContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  render() {
    const { loading } = this.props.app;
    const { text, textInitialized } = this.props;

    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        {!textInitialized ? (
          <CircleProgress style={styles.progress} />
        ) : (
          <div key="1">
            <div style={styles.diver}>
              {this.renderIcon()}
              {this.renderSquare()}
              <div style={styles.container}>
                {loading && <CircleProgress style={styles.progress} />}
                {!loading && this.renderHeader()}
                {!loading && this.renderWordBar()}
                {!loading && this.renderNavigations()}
                {textInitialized && this.renderContent()}
                <div
                  style={styles.hidedDiv}
                  id="div-for-text-word-click"
                  onClick={this.handleClickOnWord}
                />
              </div>
            </div>
          </div>
        )}
      </QueueAnim>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    app: state.app,
    text: state.study.text,
    textstat: state.study.textstat,
    textInitialized: state.study.textInitialized
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { getTextDetailAction, push };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextDetail);
