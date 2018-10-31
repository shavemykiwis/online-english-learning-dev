import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";

const items = [
  "item1 contentjaiwhgjiowethwerk",
  "item2 aweryrtyrtyfghfgh",
  "item3 nvcbsertyrtyrt",
  "item4 awerhrtrty"
];

class Dictionary extends React.Component {
  renderItem(value, index) {
    if (index < items.length - 1) {
      return (
        <div>
          <div style={styles.oneItemContainer}>
            <div style={styles.first}>{value}</div>
            <div style={styles.second}>13:38</div>
            <img src={images.common.checked} style={styles.third} />
          </div>
          <Divider />
        </div>
      );
    }
    return (
      <div style={styles.oneItemContainer}>
        <div style={styles.first}>{value}</div>
        <div style={styles.second}>13:38</div>
        <img src={images.common.checked} style={styles.third} />
      </div>
    );
  }
  render() {
    return (
      <QueueAnim type="alpha" duration={1000} className="ui-animate">
        <div key="1">
          <div style={styles.container}>
            {items.map((value, index) => this.renderItem(value, index))}
          </div>
        </div>
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
    minHeight: "50px",
    display: "flex",
    alignItems: "center"
  },
  first: {
    width: "80%"
  },
  second: {
    fontSize: "12px",
    color: "#A5A4BF"
  },
  third: {
    marginLeft: "auto",
    width: "18px"
  }
};

module.exports = Dictionary;
