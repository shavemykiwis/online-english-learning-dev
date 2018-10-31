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

import { getClassDetailAction } from "actions/classes";
import { listBookStatItemsAction } from "actions/books";

import CircleProgress from "components/CircleProgress";
import NavigationButtons from "components/NavigationButtons";
import CustomDialog from "components/CustomDialog";
import CheckboxList from './CheckboxList';

import colors from "styles/custom/colors";

import styles from "./styles";

class ClassDetailEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classEntry: null,
      classEntryInitialized: false
    };
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  componentDidMount() {
    const classID = this.props.match.params.id;
    const { classEntry, classEntryInitialized } = this.state;
    if (!classEntryInitialized) {
      this.props.actions.getClassDetailAction(classID);
    } else {
      if (classEntry && classEntry.id != classID) {
        this.props.actions.getClassDetailAction(classID);
      }
    }
    //  this.handleClickOnWord = this.handleClickOnWord.bind(this)
    //  this.props.actions.getClassDetailAction({})
    this.props.actions.listBookStatItemsAction();
  }

  handleGoBack() {
    this.props.actions.goBack();
  }

  renderDialog = () => {
    const { dialogOpen, dialogType } = this.state;
    const { app: { loading }, books } = this.props;
    const closeDialog = () => this.setState({ dialogOpen: false });
    let onConfirm, body;
    if (dialogType === 'add_books') {
      onConfirm = () => {
        const { list } = this.addBooks.state;
        console.log(list.filter(i => i.checked));
      }
      body = <CheckboxList ref={el => { this.addBooks = el }} list={books.map(i => ({ label: i.book_title, value: i.sha1 }))} />;
    }

    return dialogOpen && (
      <CustomDialog
        open={dialogOpen}
        titleId={dialogType}
        onConfirm={onConfirm}
        onCancel={closeDialog}
        loading={loading}
        body={body}
      />
    );
  }

  renderIcon() {
    return <img src={images.common.classes5} style={styles.icon} />;
  }

  renderSquare() {
    return <img src={images.common.square} style={styles.square} />;
  }

  renderHeader() {
    const { classEntry } = this.props;
    return (
      <div style={styles.header}>
        <FormattedMessage id="classes">
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

        <span style={styles.headerTitle}>{classEntry.name}</span>

        <span />
      </div>
    );
  }

  renderDescription = () => {
    const { description } = this.props.classEntry;
    return (
      <div style={styles.oneGroup}>
        <div style={styles.subtitle}>
          <FormattedMessage id="description" />
        </div>
        {description}
      </div>
    )
  }

  renderBooks() {
    const { books } = this.props.classEntry;
    return (
      <div>
        <div style={styles.subtitle}>
          <FormattedMessage id="books" />
          &nbsp;&nbsp;
          <img src={images.common.add} style={styles.addButton} onClick={() => this.setState({ dialogOpen: true, dialogType: 'add_books' })} />
        </div>
        {books.map((book, index) => (
          <div key={index} style={styles.oneGroup}>
            <div style={styles.mainText}>{book.title}</div>
            <div style={styles.comment}>{book.authors}</div>
          </div>
        ))}
      </div>
    );
  }

  renderTexts() {
    const { texts } = this.props.classEntry;
    return (
      <div>
        <div style={styles.subtitle}>
          <FormattedMessage id="texts" />
          &nbsp;&nbsp;
          <img src={images.common.add} style={styles.addButton} />
        </div>
        {texts.map((text, index) => (
          <div key={index} style={styles.oneGroup}>
            <div style={styles.mainText}>{text.title}</div>
          </div>
        ))}
      </div>
    );
  }
  renderContent() {
    return (
      <div style={styles.content}>
        {this.renderDescription()}
        <hr />
        {this.renderBooks()}
        <hr />
        {this.renderTexts()}
        <hr />
      </div>
    );
  }

  render() {
    const { classEntry, classEntryInitialized } = this.props;
    const loading = !classEntryInitialized;
    return (
      <QueueAnim type="alpha" duration={0} className="ui-animate">
        <div key="1">
          <div style={styles.diver}>
            {this.renderIcon()}
            {this.renderSquare()}
            <div style={styles.container}>
              {loading && <CircleProgress style={styles.progress} />}
              {!loading && this.renderHeader()}
              {!loading && this.renderContent()}
            </div>
            {this.renderDialog()}
          </div>
        </div>
      </QueueAnim>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    classEntryInitialized: state.classes.classEntryInitialized,
    classEntry: state.classes.classEntry,
    books: state.books.books,
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getClassDetailAction,
    goBack,
    listBookStatItemsAction,
  };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDetailEntry);
