import { create } from 'zustand';

type AppState = {
    leftLanguage: string;
    rightLanguage: string;
    changeLanguage: () => void;
};

export const useUtilsStore = create<AppState>((set, get) => ({
    leftLanguage: 'Русский',
    rightLanguage: 'Английский',

    changeLanguage: () => {
        const { leftLanguage, rightLanguage } = get();
        set({
            leftLanguage: rightLanguage,
            rightLanguage: leftLanguage,
        });
    },
}));
