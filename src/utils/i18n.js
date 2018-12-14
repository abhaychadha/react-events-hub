import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import appConfig from "./config";

/**
 * i18N Configuration for getting localize content
 * @param  {string} fallbackLng -- Brand / Default  fallback locale
 * @param  {string} lng -- Default locale intialized
 * @param  {array} ns -- getting default name space for getting file name from public folder
 * @param  {string} keySeprator -- symbol used to seprate the key names.
 * @return {object} return i18n object and pass to i18n Store
 *
 */
const basePath = `./locales/`;

i18n.use(XHR).init({
  fallbackLng: appConfig.LOCALE || appConfig.DEFAULT_LOCALE,
  lng: appConfig.LOCALE || appConfig.DEFAULT_LOCALE,
  ns: [appConfig.DEFAULT_NAMESPACE, appConfig.COMMON_NAMESPACE], // common namespace used
  defaultNS: appConfig.DEFAULT_NAMESPACE,
  keySeparator: ".", // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },
  backend: {
    loadPath: basePath + "{{lng}}/{{ns}}.json" //path to load locale files.
  },
  react: {
    wait: true
  }
});

export default i18n;
