type Key = { [key: string]: string };

export const translations_en: Key = {
  'header.logo.alt': 'Logo',
  'header.logo.title': 'Home',
  'recipe.title.text': 'Select Your Recipes',
  'recipe.subTitle.text':
    'Choose from an ever-changing mix of meat, fish, Beyond Meat™ and health-conscious offerings.',
  'errorboundry.error.text': 'Something went wrong, contact support',
};

const translations_ar: Key = {
  'header.logo.alt': 'Logo',
};

export const translate = (key: keyof typeof translations_en, locale?: 'en' | 'ar'): string => {
  if (locale) {
    switch (locale) {
      case 'en':
        return translations_en[key];
        break;
      case 'ar':
        return translations_ar[key];
        break;
      default:
        throw new Error('There is no locale by with this value');
    }
  }
  return translations_en[key];
};
