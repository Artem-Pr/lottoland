import axios, {AxiosResponse} from 'axios';

import {EurojackpotResults} from './apiTypes';

const instance = axios.create({
    baseURL: '/api',
});

export const api = {
    euroJackpot(): Promise<AxiosResponse<EurojackpotResults>> {
        return instance.get('drawings/euroJackpot');
    },
};
