import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { goBack } from "react-router-redux";

import { getDictionaryEntryDataAction } from "actions/dictionary";

import CircleProgress from "components/CircleProgress";
import NavigationButtons from "components/NavigationButtons";

import colors from "styles/custom/colors";

import { mockup } from "./mockup";

import styles from "./styles";

class DictionaryEntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  componentDidMount() {
    this.props.actions.getDictionaryEntryDataAction({});
  }

  handleGoBack() {
    this.props.actions.goBack();
  }

  renderIcon() {
    return <img src={images.common.texts5} style={styles.icon} />;
  }

  renderSquare() {
    return <img src={images.common.square} style={styles.square} />;
  }

  renderHeader() {
    const { wordEntryData } = this.props;
    return (
      <div style={styles.header}>
        <FormattedMessage id="Back">
          {txt => (
            <RaisedButton
              style={styles.headerBtn.style}
              overlayStyle={styles.headerBtn.overlayStyle}
              buttonStyle={styles.headerBtn.buttonStyle}
              rippleStyle={styles.headerBtn.rippleStyle}
              labelColor={colors.yellow}
              labelStyle={styles.headerBtn.labelStyle}
              label={txt}
              onClick={this.handleGoBack}
            />
          )}
        </FormattedMessage>

        <span style={styles.headerTitle}>{wordEntryData.word}</span>

        <span />
      </div>
    );
  }

  renderWordBar() {
    const { wordEntryData } = this.props;
    return (
      <div style={styles.wordBar}>
        <div>
          <img
            src={images.common.star_outline}
            style={styles.wordBarImg}
            className="normal-cursor-pointer"
          />
        </div>
        <div style={styles.wordBarContent}>
          <div>
            <span style={styles.wordBarText1}>{wordEntryData.word}</span>
          </div>

          <div style={styles.wordBarContentDivider} />

          <div>
            <span style={styles.wordBarText1}>
              {wordEntryData.definitions[0].pronuncation}
            </span>
          </div>
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

  renderDefinition() {
    const { definitions } = this.props.wordEntryData;
    return (
      <div>
        <div style={styles.subtitle}>
          <FormattedMessage id="Definition" />
        </div>
        {definitions.map((definition, index) => (
          <div key={index} style={styles.oneGroup}>
            {definition.pronuncation}
            <br />
            {definition.meanings.map((meaning, i) => (
              <div style={styles.padding10} key={i}>
                {meaning}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  renderWordsContaining() {
    return (
      <div>
        <div style={styles.subtitle}>
          <FormattedMessage id="dictionary.entry.words_containing" />
        </div>
      </div>
    );
  }

  renderSentences() {
    const { sentences } = this.props.wordEntryData;
    return (
      <div>
        <div style={styles.subtitle}>
          <FormattedMessage id="sentences" />
        </div>
        {sentences.map((sentence, index) => (
          <div key={index} style={styles.oneGroup}>
            <div style={styles.mainText}>{sentence.sentence}</div>
            <div style={styles.comment}>{sentence.translation}</div>
          </div>
        ))}
      </div>
    );
  }

  renderWordComponents() {
    const { components } = this.props.wordEntryData;
    return (
      <div style={styles.wordComponentsContainer}>
        {components.map((component, index) => (
          <span style={styles.oneWord} key={index}>
            {component}
          </span>
        ))}
      </div>
    );
  }

  renderContent() {
    return (
      <div style={styles.content}>
        {this.renderWordComponents()}
        <hr />
        {this.renderDefinition()}
        <hr />
        {this.renderWordsContaining()}
        <hr />
        {this.renderSentences()}
        <hr />
      </div>
    );
  }

  render() {
    const { wordEntryData, wordEntryDataInitialized } = this.props;
    const loading = !wordEntryDataInitialized;
    return (
      <QueueAnim type="alpha" duration={0} className="ui-animate">
        <div key="1">
          <div style={styles.diver}>
            {this.renderIcon()}
            {this.renderSquare()}
            <div style={styles.container}>
              {loading && <CircleProgress style={styles.progress} />}
              {!loading && this.renderHeader()}
              {!loading && this.renderWordBar()}
              {!loading && this.renderContent()}
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    wordEntryDataInitialized: state.dictionary.wordEntryDataInitialized,
    wordEntryData: state.dictionary.wordEntryData
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getDictionaryEntryDataAction,
    goBack
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictionaryEntryPage);
