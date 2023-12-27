import { getCookie } from './cookie';
import { NEXT_PUBLIC_URL } from '@/utiles/constants';

import axios, { AxiosRequestConfig } from 'axios'

interface APIResponse<T> {
    statusCode: number
    errorCode: number
    message: string
    result: T
    access_token: string
}

const axiosInterceptorInstance = axios.create({
    baseURL: `${NEXT_PUBLIC_URL}/api`
});


// Request
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // if (getCookie('token')) {
        //     const accessToken = JSON.parse(getCookie('token') ?? '');
        //     if (config.headers) config.headers.token = accessToken;
        // }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Response
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data 

        return response;
    },
    (error) => {
        // Handle response errors 

        return Promise.reject(error);
    }
);

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.get<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.post<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const putData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.put<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.delete<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};
export default axiosInterceptorInstance; 