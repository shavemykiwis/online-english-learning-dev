import React from "react";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Divider from "material-ui/Divider";

const items = ["item1 ", "item2 ", "item3 ", "item4 "];

class NoteBooks extends React.Component {
  renderItem(value, index) {
    if (index < items.length - 1) {
      return (
        <div key={index}>
          <div
            style={styles.oneItemContainer}
            className="appboard-one-item-container"
            key={index}
          >
            <img
              src={images.common[`bookThumbnail${(index % 9) + 1}`]}
              style={styles.thumbnail}
            />
            <div style={styles.first}>
              <div>{value}</div>
              <div style={styles.second}>FullChinese</div>
            </div>
            <div style={styles.second}>01/02/2018</div>
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
        <img
          src={images.common[`bookThumbnail${(index % 9) + 1}`]}
          style={styles.thumbnail}
        />
        <div style={styles.first}>
          <div>{value}</div>
          <div style={styles.second}>FullChinese</div>
        </div>
        <div style={styles.second}>01/02/2018</div>
        <img src={images.common.right2} style={styles.third} />
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
    minHeight: "60px",
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex",
    alignItems: "center"
  },
  thumbnail: {
    width: "4vw",
    height: "5vw"
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
  }
};

module.exports = NoteBooks;
