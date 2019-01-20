export class TranslationHelper {
    addTranslationsForActiveLanguage(props, file) {
        return new Promise((resolve, reject) => {
            try {
                const { activeLanguage } = props;
                if (!activeLanguage) {
                    reject(false);
                }
                import(`../translations/${activeLanguage.code}/${file}.json`).then(
                    translations => {
                        props.addTranslationForLanguage(translations, activeLanguage.code);
                        resolve(true);
                    }
                );
            } catch (err) {
                reject(false);
            }
        });

    }
}