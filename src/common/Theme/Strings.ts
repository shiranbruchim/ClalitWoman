import he from './localization/he';

export const Strings = (textKey: string) => {
  const languages = {
    he,
  };

  // define the current language using global state or static value
  const currentLanguage = 'he';

  const currentLanguageObj: {[key: string]: string | string} =
    languages[currentLanguage];

  return currentLanguageObj[textKey];
};
