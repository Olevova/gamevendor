import { EnumLanguage } from 'types/enums';

export const locales: EnumLanguage[] = [EnumLanguage.en, EnumLanguage.uk];

export const defaultLocale: { locale: EnumLanguage } = {
  locale: EnumLanguage.en,
};
