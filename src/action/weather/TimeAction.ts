"use server"

interface Response {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    seconds: number
    milliSeconds: number
    dateTime: string
    date: string
    time: string
    timeZone: string
    dayOfWeek: string
    dstActive: boolean
}


export const getTime = async (timeZone: string): Promise<Response> => {
    const api = `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
    const res = await fetch(api
        , { next: { tags: ['time'] } }
    )

    if (!res.ok) throw new Error('시간 정보를 가져올 수 없습니다.')

    return res.json()
}