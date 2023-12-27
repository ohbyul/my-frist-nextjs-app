'use server'

import { getData } from "@/utiles/axiosInstance"
import { AxiosRequestConfig } from "axios"

export async function actionGetDtxNotices() {
    const url: string = `/board/public/${'NOTICE'}`
    const data: AxiosRequestConfig = {
        params: {
            page: 1,
            pageLength: 10
        }
    }
    const result = getData(url, data)
    return result;

}
