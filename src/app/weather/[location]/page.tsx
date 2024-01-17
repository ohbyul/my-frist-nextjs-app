import { getForecastWeather } from "@/action/weather/WeatherAction"
import { HomeButton } from "./client"

type Props = {
    params: {
        location: string
    },
    searchParams: {
        name: string
    }
}


// 동적 메타데이터 설정
export function generateMetadata({ searchParams }: Props) {
    return {
        title: `b-Weather-${searchParams.name}`,
        description: `${searchParams.name} 날씨를 알려드립니다.`
    }
}

export default async function WeatherDetail({ params, searchParams }: Props) {
    const location = params.location
    const name = searchParams.name
    const res = await getForecastWeather(location)

    return (
        <div>
            <h1>상세</h1>
            <p>
                <HomeButton />
            </p>
            {name}의 날씨
            <div>
                {
                    res.forecast.forecastday.map((day, index) => {
                        return (
                            <div key={index}>
                                <p>{day.date} / {day.day.avgtemp_c}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
