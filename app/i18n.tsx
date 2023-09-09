// @import Dependencies
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// @import Translations
import enLocales from '@translations/en.json' assert { type: 'json' };

const language: string =
	typeof window !== 'undefined'
		? window.localStorage.getItem('lang') ?? i18next.language
		: 'en';

i18next
	.use(LanguageDetector)
	.init({
		interpolation: { escapeValue: false },
		fallbackLng: language,
		lng: language,
		resources: {
			en: {
				translations: enLocales,
			},
		},
		ns: ['translations'],
		defaultNS: 'translations',
	})
	.then()
	.catch((error) => {
		console.log(error);
	});

export { i18next, language };
