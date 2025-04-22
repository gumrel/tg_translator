import { create } from 'zustand';

type AppState = {
    leftLanguage: string;
    rightLanguage: string;
    changeLanguage: () => void;

    selectLanguageOpen: boolean;
    setLanguageOpen: (bool: boolean) => void;
};

export const useUtilsStore = create<AppState>((set, get) => ({
    leftLanguage: 'Русский',
    rightLanguage: 'Английский',
    selectLanguageOpen: false,

    changeLanguage: () => {
        const { leftLanguage, rightLanguage } = get();
        set({
            leftLanguage: rightLanguage,
            rightLanguage: leftLanguage,
        });
    },

    setLanguageOpen: (bool: boolean) => {
        set({ selectLanguageOpen: bool });
    },
}));
