import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import zhLocaleData from "react-intl/locale-data/zh";

const DEFAULT_LOCALE = "en";

import enTranslationMessages from "./translations/en.json";
import zhTranslationMessages from "./translations/zh.json";

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

export const appLocals = ["en", "zh"];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages("en", enTranslationMessages),
  zh: formatTranslationMessages("zh", zhTranslationMessages)
};
