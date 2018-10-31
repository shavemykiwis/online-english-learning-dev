import React from "react";
import { Route, Redirect } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import images from "assets/public/images";
import Header from "./components/Header";
import Texts from "./components/Texts/index";
import Books from "./components/Books";
import NoteBooks from "./components/NoteBooks";
import Decks from "./components/Decks";
import Dictionary from "./components/Dictionary/index";
import Sentences from "./components/Sentences";
import Store from "./components/Store";

import TextDetail from "./components/Texts/TextDetail1";
import DictionaryEntryPage from "./components/Dictionary/DictionaryEntryPage";

const items = [
  "texts",
  "books",
  "notebooks",
  "decks",
  "dictionary",
  "store",
  "sentences"
];

class Appboard extends React.Component {
  renderSquare() {
    const pathname = this.props.location.pathname.split("/")[3];
    const index = items.indexOf(pathname);
    if (index < 0) {
      return null;
    }
    const percent = 15 * index + 5;
    return (
      <img
        src={images.common.square}
        style={{ ...styles.square, left: `calc(${percent}% - 10px)` }}
      />
    );
  }
  isOther() {
    const pathname = this.props.location.pathname.toLowerCase().split("/")[3];

    return items.indexOf(pathname) < 0;
  }
  isDetailPage() {
    const subs = this.props.location.pathname.toLowerCase().split("/");
    const pathname = subs[3];
    return items.indexOf(pathname) >= 0 && subs.length > 4;
  }
  render() {
    const url = this.props.match.url.toLowerCase();
    const pathname = this.props.location.pathname.toLowerCase();

    if (this.isOther()) {
      return <Redirect to={`${url}/texts`} />;
    }

    return (
      <div
        className="container-fluid no-breadcrumbs page-dashboard"
        style={styles.whole}
      >
        <QueueAnim type="alpha" duration={1000} className="ui-animate">
          <div style={styles.container} key="1">
            {!this.isDetailPage() && (
              <div style={styles.header}>
                <Header location={pathname} />
              </div>
            )}
            {!this.isDetailPage() && (
              <div style={styles.content}>
                {this.renderSquare()}
                <Route exact path={`${url}/texts`} component={Texts} />
                <Route exact path={`${url}/notebooks`} component={NoteBooks} />
                <Route
                  exact
                  path={`${url}/dictionary`}
                  component={Dictionary}
                />
                <Route exact path={`${url}/store`} component={Store} />
                <Route exact path={`${url}/sentences`} component={Sentences} />
                <Route exact path={`${url}/decks`} component={Decks} />
                <Route exact path={`${url}/books`} component={Books} />
              </div>
            )}
            {this.isDetailPage() && (
              <div style={styles.detailContent}>
                <Route
                  exact
                  path={`${url}/texts/:sha1`}
                  component={TextDetail}
                />
                <Route
                  exact
                  path={`${url}/dictionary/:id`}
                  component={DictionaryEntryPage}
                />
              </div>
            )}
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const styles = {
  whole: {
    backgroundColor: "#EFEFEF"
  },
  container: {
    width: "100%",
    // height: 'calc(100vh - 150px)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // overflow: 'auto'
  },
  header: {
    width: "80%"
  },
  content: {
    width: "80%",

    backgroundColor: "white",
    borderRadius: "10px",
    position: "relative",
    padding: "20px"
    // minHeight: '60%'
  },
  detailContent: {
    width: "100%",
    // position: 'relative',
    padding: "20px"
  },
  square: {
    position: "absolute",
    top: "-8px",
    width: "20px"
  }
};

export default Appboard;
