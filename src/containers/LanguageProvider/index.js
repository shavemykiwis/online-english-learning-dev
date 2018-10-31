/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import APPCONFIG from "../../constants/Config";

const locale = APPCONFIG.locale;

class LanguageProvider extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={this.props.messages[locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};

export default LanguageProvider;
