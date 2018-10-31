import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormattedMessage } from "react-intl";

class NewClass extends Component {
  state = {
    name: '',
    description: '',
  }
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <TextField
          fullWidth
          floatingLabelText={<FormattedMessage id="class_name" />}
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <TextField
          fullWidth
          floatingLabelText={<FormattedMessage id="class_description" />}
          value={description}
          onChange={e => this.setState({ description: e.target.value })}
        />
      </div>
    );
  }
}

NewClass.propTypes = {

};

export default NewClass;
