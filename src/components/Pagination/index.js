import React from "react";
import FlatButton from "material-ui/FlatButton";

const styles = {
  container: {
    margin: "10px"
  },
  item: {
    width: "30px",
    height: "36px",
    minWidth: "36px",
    borderRadius: "5px",
    margin: "2px"
  },
  label: {},
  text: {
    color: "#5E5655",
    lineHeight: "25px",
    paddingLeft: "0",
    paddingRight: "0"
  },
  textSelected: {
    color: "#F9614D",
    lineHeight: "25px",
    paddingLeft: "0",
    paddingRight: "0"
  },
  icon: {
    color: "#5E5655"
  },
  iconDisabled: {
    color: "#888888"
  }
};

export default class Pagination extends React.Component {
  renderFirst() {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    return (
      <FlatButton
        onClick={() => this.props.onClick(0)}
        style={styles.item}
        disabled={currentPage === 0}
        icon={
          <i
            className="material-icons"
            style={currentPage === 0 ? styles.iconDisabled : styles.icon}
          >
            first_page
          </i>
        }
      />
    );
  }
  renderLast() {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    const t = Math.floor(totalItems / itemsPerPage);
    const totalPages = t * itemsPerPage === totalItems ? t : t + 1;
    return (
      <FlatButton
        onClick={() => this.props.onClick(totalPages - 1)}
        style={styles.item}
        disabled={currentPage === totalPages - 1}
        icon={
          <i
            className="material-icons"
            style={
              currentPage === totalPages - 1 ? styles.iconDisabled : styles.icon
            }
          >
            last_page
          </i>
        }
      />
    );
  }
  renderPrevious() {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    return (
      <FlatButton
        style={styles.item}
        disabled={currentPage === 0}
        onClick={() => this.props.onClick(currentPage - 1)}
        icon={
          <i
            className="material-icons"
            style={currentPage === 0 ? styles.iconDisabled : styles.icon}
          >
            chevron_left
          </i>
        }
      />
    );
  }
  renderNext() {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    const t = Math.floor(totalItems / itemsPerPage);
    const totalPages = t * itemsPerPage === totalItems ? t : t + 1;
    return (
      <FlatButton
        style={styles.item}
        disabled={currentPage === totalPages - 1}
        onClick={() => this.props.onClick(currentPage + 1)}
        icon={
          <i
            className="material-icons"
            style={
              currentPage === totalPages - 1 ? styles.iconDisabled : styles.icon
            }
          >
            chevron_right
          </i>
        }
      />
    );
  }

  renderItem(page) {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    const t = Math.floor(totalItems / itemsPerPage);
    const totalPages = t * itemsPerPage === totalItems ? t : t + 1;
    if (page < 0 || page > totalPages - 1) {
      return null;
    }
    return (
      <FlatButton
        style={styles.item}
        labelStyle={page === currentPage ? styles.textSelected : styles.text}
        label={page + 1}
        onClick={() => this.props.onClick(page)}
      />
    );
  }

  render() {
    const { currentPage, itemsPerPage, totalItems } = this.props;
    return (
      <div style={styles.container}>
        {this.renderFirst()}
        {this.renderPrevious()}
        {this.renderItem(currentPage - 2)}
        {this.renderItem(currentPage - 1)}
        {this.renderItem(currentPage)}
        {this.renderItem(currentPage + 1)}
        {this.renderItem(currentPage + 2)}
        {this.renderNext()}
        {this.renderLast()}
      </div>
    );
  }
}
