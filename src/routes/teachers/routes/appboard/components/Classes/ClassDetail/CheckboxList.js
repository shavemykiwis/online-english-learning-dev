import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list || []
    }
  }
  updateCheck = (key) => {
    const newList = this.state.list.map((item, i) => {
      if (i === key) {
        return {
          ...item,
          checked: !item.checked
        }
      }
      return item;
    });
    this.setState({ list: newList });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((item, i) => (
          <Checkbox
            key={i}
            label={item.label}
            checked={item.checked}
            style={styles.checkbox}
            onCheck={() => this.updateCheck(i)}
          />
        ))}
      </div>
    );
  }
}

CheckboxList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CheckboxList;
