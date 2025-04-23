import { create } from 'zustand';

type AppState = {
    selectedLanguage: number | null;
    setSelectedLanguage: (value: number) => void;

    leftLanguage: string;
    rightLanguage: string;
    changeLanguage: () => void;
};

export const useUtilsStore = create<AppState>((set, get) => ({
    leftLanguage: 'Русский',
    rightLanguage: 'Английский',
    selectedLanguage: null,

    setSelectedLanguage: (value) => set({ selectedLanguage: value }),

    changeLanguage: () => {
        const { leftLanguage, rightLanguage } = get();
        set({
            leftLanguage: rightLanguage,
            rightLanguage: leftLanguage,
        });
    },
}));
