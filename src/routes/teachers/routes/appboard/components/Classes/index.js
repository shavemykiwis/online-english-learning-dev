import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircleProgress from "components/CircleProgress";
import Pagination from "components/Pagination";
import CustomDialog from "components/CustomDialog";

import NewClass from './NewClass';

import * as classesActions from "actions/classes";

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
    paddingBottom: "5px",
    paddingRight: 5,
  },
  first: {
    width: "80%",
    cursor: 'pointer',
  },
  second: {
    fontSize: "10px",
    color: "#A5A4BF"
  },
  third: {
    marginLeft: "auto",
    width: "18px",
    cursor: 'pointer',
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

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 7,
      dialogOpen: false,
      dialogType: 'new_class',
      deletingClass: '',
    };
  }
  componentDidMount() {
    this.props.actions.listClassesAction();
  }

  handleOnClickItem(value) {
    this.props.actions.push("/teacher/appboard/classes/" + value.id);
  }

  handleGoToPage(page) {
    this.setState({
      currentPage: page
    });
  }

  openAddDialog = () => {
    this.setState({ dialogOpen: true, dialogType: 'new_class', });
  }

  openDeleteDialog = (value) => {
    this.setState({ dialogOpen: true, dialogType: 'delete_class', deletingClass: value });
  }

  renderDialog = () => {
    const { dialogOpen, dialogType, deletingClass } = this.state;
    const { loading } = this.props.app;
    const closeDialog = () => this.setState({ dialogOpen: false });
    let onConfirm, body;
    if (dialogType === 'new_class') {
      onConfirm = () => {
        const { name, description } = this.newClass.state;
        this.props.actions.createClassAction({ name, description, closeDialog });
      }
      body = <NewClass ref={el => { this.newClass = el }} />;
    }
    if (dialogType === 'delete_class') {
      onConfirm = () => this.props.actions.deleteClassAction({ class_id: deletingClass.id, closeDialog });
      body = (<div>Do you really want to delete {deletingClass.name} ?</div>);
    }

    return (
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

  renderItem(value, index, length) {
    return (
      <div
        style={styles.oneItemContainer}
        key={index}
        className="appboard-one-item-container"
      >
        <div style={styles.first} onClick={() => this.handleOnClickItem(value)}>{value.name}</div>
        <div style={styles.second}>{getHHMM(value.last_modified)}</div>
        <img src={images.common.remove} style={styles.third} onClick={() => this.openDeleteDialog(value)} />
      </div>
    );
  }

  render() {
    const { classes, current_class, classesInitialized } = this.props;

    const emptyRows =
      this.state.itemsPerPage -
      Math.min(
        this.state.itemsPerPage,
        classes.length - this.state.currentPage * this.state.itemsPerPage
      );

    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        {!classesInitialized ? (
          <CircleProgress style={styles.progress} />
        ) : (
            <div key="1">
              {this.renderDialog()}
              <div style={styles.container}>
                <div
                  style={styles.oneItemContainer}
                  onClick={this.openAddDialog}
                >
                  <img src={images.common.add} style={styles.third} />
                </div>
                {classes
                  .slice(
                    this.state.currentPage * this.state.itemsPerPage,
                    this.state.currentPage * this.state.itemsPerPage +
                    this.state.itemsPerPage
                  )
                  .map((value, index) =>
                    this.renderItem(value, index, classes.length)
                  )}
                {emptyRows > 0 ? (
                  <div style={{ height: 50 * emptyRows }} />
                ) : null}
                <div style={styles.pagination}>
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalItems={classes.length}
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
    classes: state.classes.classes,
    classesInitialized: state.classes.classesInitialized
  };
}

function mapDispatchToProps(dispatch) {
  const actions = { ...classesActions, push };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Classes);
