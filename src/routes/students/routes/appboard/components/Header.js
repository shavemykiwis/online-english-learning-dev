import React from "react";
import { FormattedMessage } from "react-intl";
import images from "assets/public/images";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";

const items = [
  "texts",
  "books",
  "notebooks",
  "decks",
  "dictionary",
  "store",
  "sentences"
];

class Header extends React.Component {
  navigateToPage(item) {
    this.props.actions.push(`/student/appboard/${item}`);
  }
  isSelected(value) {
    const location = this.props.location;
    const lastPath = location.split("/")[3];
    return value === lastPath;
  }
  isEnabled(value) {
    return value.length % 2 === 0;
  }
  renderItem(value, index) {
    if (this.isSelected(value)) {
      return (
        <div style={styles.oneItem} key={index}>
          <img
            src={images.common[`${value}1`]}
            className="main-page-header-img-selected"
          />
          <div style={styles.textSelected}>
            <FormattedMessage id={value} />
          </div>
        </div>
      );
    }
    // if (this.isEnabled(value)) {
    return (
      <div style={styles.oneItem} key={index}>
        <img
          src={images.common[`${value}1`]}
          className="main-page-header-img"
          onClick={() => {
            this.navigateToPage(value);
          }}
        />
        <div style={styles.textEnabled}>
          <FormattedMessage id={value} />
        </div>
      </div>
    );
    // }
    // return (
    //     <div style={styles.oneItem} key={index}>
    //         <img src={images.common[`${value}4`]} style={styles.oneImg} />
    //         <div style={styles.textDisabled}>
    //             <FormattedMessage id={value} />
    //         </div>
    //     </div>
    // )
  }
  render() {
    return (
      <div style={styles.container}>
        {items.map((value, index) => this.renderItem(value, index))}
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2vw",
    marginBottom: "5px"
  },
  oneItem: {
    width: "10%",
    textAlign: "center",
    marginTop: "auto"
  },
  oneImgSelected: {
    width: "100%"
  },
  oneImg: {
    width: "80%"
  },
  textSelected: {
    color: "#FA694B",
    fontSize: "11px",
    fontWeight: "100"
  },
  textEnabled: {
    color: "#5E5655",
    fontSize: "11px",
    fontWeight: "100"
  },
  textDisabled: {
    color: "#B7B7B7",
    fontSize: "11px",
    fontWeight: "100"
  }
};

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const actions = { push };
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
