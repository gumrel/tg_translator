import baseApi from '../baseApi';

type ISaveTransation = {
    languageId: number;
    srcText: string;
    translationText: string;
    userId: number;
};

export const getTranslation = async () => {
    const response = await baseApi.get('/translations/user');

    return response.data;
};

export const saveTransation = async (params: ISaveTransation) => {
    const response = await baseApi.post('/translations', params);

    return response.data;
};
