import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";
import Pagination from "components/Pagination";

import { listTextStatItemsAction, studyTextAction } from "actions/texts";

import { getHHMM } from "utils";

import { push } from "react-router-redux";

const styles = {
  container: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  oneItemContainer: {
    fontSize: "14px",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  first: {
    width: "80%"
  },
  second: {
    fontSize: "10px",
    color: "#A5A4BF"
  },
  third: {
    marginLeft: "auto",
    width: "18px"
  },
  progress: {
    marginTop: "20%",
    marginBottom: "20%"
  },
  pagination: {
    textAlign: "right",
    marginBottom: "-20px"
  }
};

class Texts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 7
    };
  }
  componentDidMount() {
    this.props.actions.listTextStatItemsAction();
  }

  handleOnClickItem(value) {
    this.props.actions.push("/student/appboard/texts/" + value.text_sha1);
  }

  handleGoToPage(page) {
    this.setState({
      currentPage: page
    });
  }

  renderItem(value, index, length) {
    if (index < length - 1) {
      return (
        <div key={index}>
          <div
            style={styles.oneItemContainer}
            className="appboard-one-item-container"
            onClick={() => this.handleOnClickItem(value)}
          >
            <div style={styles.first}>{value.text_title}</div>
            <div style={styles.second}>{getHHMM(value.last_modified)}</div>
            <img src={images.common.checked} style={styles.third} />
          </div>
          <Divider />
        </div>
      );
    }
    return (
      <div
        style={styles.oneItemContainer}
        key={index}
        className="appboard-one-item-container"
        onClick={() => this.handleOnClickItem(value)}
      >
        <div style={styles.first}>{value.text_title}</div>
        <div style={styles.second}>{getHHMM(value.last_modified)}</div>
        <img src={images.common.checked} style={styles.third} />
      </div>
    );
  }

  render() {
    const { loading } = this.props.app;
    const { texts, textsInitialized } = this.props;

    const emptyRows =
      this.state.itemsPerPage -
      Math.min(
        this.state.itemsPerPage,
        texts.length - this.state.currentPage * this.state.itemsPerPage
      );

    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        {!textsInitialized ? (
          <CircleProgress style={styles.progress} />
        ) : (
          <div key="1">
            <div style={styles.container}>
              {texts
                .slice(
                  this.state.currentPage * this.state.itemsPerPage,
                  this.state.currentPage * this.state.itemsPerPage +
                    this.state.itemsPerPage
                )
                .map((value, index) =>
                  this.renderItem(value, index, texts.length)
                )}
              {emptyRows > 0 ? (
                <div style={{ height: 50 * emptyRows }} />
              ) : null}
              <div style={styles.pagination}>
                <Pagination
                  currentPage={this.state.currentPage}
                  totalItems={texts.length}
                  itemsPerPage={this.state.itemsPerPage}
                  onClick={page => this.handleGoToPage(page)}
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
    texts: state.texts.texts,
    textsInitialized: state.texts.textsInitialized
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { studyTextAction, listTextStatItemsAction, push };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Texts);
