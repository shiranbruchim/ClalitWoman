interface I18nConfig {
  supportedLocales: {
    [key: string]: string;
  };
  fallbackLocale: string;
}
const i18nConfig: I18nConfig = {
  supportedLocales: {
    he: 'עברית',
    ar: 'عربي',
  },
  fallbackLocale: 'he',
};
export default i18nConfig;
