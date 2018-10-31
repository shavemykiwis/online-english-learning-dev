import React from "react";

import { FormattedMessage } from "react-intl";

import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";
import Pagination from "components/Pagination";

import { listBookStatItemsAction } from "actions/books";

import { getMMDDYYYY } from "utils";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 6
    };
  }
  componentDidMount() {
    this.props.actions.listBookStatItemsAction();
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
            key={index}
          >
            <img
              src={images.common.thumbnailTemplate}
              style={styles.thumbnail}
            />
            <div style={styles.first}>
              <div>{value.book_title}</div>
              <div style={styles.second}>
                <FormattedMessage id="app_name" />
              </div>
            </div>
            <div style={styles.second}>{getMMDDYYYY(value.last_modified)}</div>
            <img src={images.common.right2} style={styles.third} />
          </div>
          <Divider />
        </div>
      );
    }
    return (
      <div
        style={styles.oneItemContainer}
        className="appboard-one-item-container"
        key={index}
      >
        <img src={images.common.thumbnailTemplate} style={styles.thumbnail} />
        <div style={styles.first}>
          <div>{value.book_title}</div>
          <div style={styles.second}>
            <FormattedMessage id="app_name" />
          </div>
        </div>
        <div style={styles.second}>{getMMDDYYYY(value.last_modified)}</div>
        <img src={images.common.right2} style={styles.third} />
      </div>
    );
  }
  render() {
    const { booksInitialized, books } = this.props;

    const emptyRows =
      this.state.itemsPerPage -
      Math.min(
        this.state.itemsPerPage,
        books.length - this.state.currentPage * this.state.itemsPerPage
      );
    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        {!booksInitialized ? (
          <CircleProgress style={styles.progress} />
        ) : (
          <div key="1">
            <div style={styles.container}>
              {books
                .slice(
                  this.state.currentPage * this.state.itemsPerPage,
                  this.state.currentPage * this.state.itemsPerPage +
                    this.state.itemsPerPage
                )
                .map((value, index) =>
                  this.renderItem(value, index, books.length)
                )}
              {emptyRows > 0 ? (
                <div style={{ height: 60 * emptyRows }} />
              ) : null}
              <div style={styles.pagination}>
                <Pagination
                  currentPage={this.state.currentPage}
                  totalItems={books.length}
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

const styles = {
  container: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  oneItemContainer: {
    fontSize: "14px",
    minHeight: "60px",
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex",
    alignItems: "center"
  },
  thumbnail: {
    width: "5vw",
    height: "4vw"
  },
  first: {
    width: "70%",
    paddingLeft: "1vw",
    paddingRight: "1vw"
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

function mapStateToProps(state, props) {
  return {
    app: state.app,
    books: state.books.books,
    booksInitialized: state.books.booksInitialized
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { listBookStatItemsAction };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
