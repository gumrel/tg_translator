import { create } from 'zustand';

type Translation = {
    id: number;
    name: string;
    description: string;
    languageCode: string;
    isByUser: boolean;
};

type AppState = {
    selectedLanguage: number | null;
    setSelectedLanguage: (value: number) => void;

    leftLanguage: string;
    rightLanguage: Translation;
    setRightLanguage: (lang: Translation) => void;
};

export const useUtilsStore = create<AppState>((set) => ({
    leftLanguage: 'Русский',
    rightLanguage: {
        id: 1,
        name: 'skuf',
        description: 'skuf slang',
        languageCode: 'ru',
        isByUser: false,
    },
    selectedLanguage: 1,

    setSelectedLanguage: (value) => set({ selectedLanguage: value }),

    setRightLanguage: (lang) => set({ rightLanguage: lang }),
}));
