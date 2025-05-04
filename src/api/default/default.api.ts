import baseApi from '../baseApi';

export const defaultApi = async () => {
    const response = await baseApi.get('/languages');
    return response.data;
};
