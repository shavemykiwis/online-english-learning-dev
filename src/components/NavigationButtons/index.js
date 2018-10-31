import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import colors from "styles/custom/colors";

export default class NavigationButtons extends React.Component {
  render() {
    const navs = [
      "chevron_left",
      "expand_more",
      "expand_less",
      "chevron_right"
    ];
    const handlers = [
      this.props.onLeft,
      this.props.onBottom,
      this.props.onTop,
      this.props.onRight
    ];
    return (
      <div style={styles.navigations}>
        {navs.map((nav, index) => {
          const borderRadius =
            index === 0
              ? styles.navBtnBorderRadius[0]
              : index === navs.length - 1
                ? styles.navBtnBorderRadius[2]
                : styles.navBtnBorderRadius[1];
          return (
            <div
              style={{ ...styles.navigationBtn, ...borderRadius }}
              className="normal-cursor-pointer navigation-button"
              onClick={() => {
                const handler = handlers[navs.indexOf(nav)];
                if (handler !== undefined) {
                  handler();
                }
              }}
              key={index}
            >
              <i className="material-icons" style={styles.navigationIcon}>
                {nav}
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}

NavigationButtons.propTypes = {
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  onBottom: PropTypes.func,
  onTop: PropTypes.func
};
