import baseApi from '../baseApi';

export const login = async (params: { initData: string }) => {
    const response = await baseApi.post('/auth', params);
    return response.data;
};
