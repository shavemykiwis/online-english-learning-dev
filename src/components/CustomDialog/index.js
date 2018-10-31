import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import { FormattedMessage } from "react-intl";
import FlatButton from 'material-ui/FlatButton';

class CustomDialog extends Component {

  render() {
    const { open, titleId, onConfirm, onCancel, loading, body } = this.props;
    const actions = [
      <FlatButton
        label={<FormattedMessage id="cancel" />}
        onClick={onCancel}
      />,
      <FlatButton
        label={<FormattedMessage id="confirm" />}
        icon={loading && <CircularProgress size={25} />}
        primary={true}
        onClick={onConfirm}
      />,
    ];
    return (
      <Dialog
        open={open}
        title={<div>{<FormattedMessage id={titleId} />}</div>}
        actions={actions}
      >
        {body}
      </Dialog>
    );
  }
}

CustomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  titleId: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  body: PropTypes.any.isRequired,
};

export default CustomDialog;
