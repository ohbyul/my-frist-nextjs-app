import { getTime } from "@/action/weather/TimeAction";
import { getCurrentWeather } from "@/action/weather/WeatherAction";
import RevalidateButton from "@/components/RevalidateButton";
import Link from "next/link";

const data = [
    { index: 0, path: '/weather/seoul?name=서울', name: '서울', location: 'Seoul' },
    { index: 1, path: '/weather/NYC?name=뉴욕', name: '뉴욕', location: 'NYC' },
    { index: 2, path: '/weather/london?name=런던', name: '런던', location: 'London' },
]


export default async function Weather() {
    return (
        <div>
            <h1>날씨앱 메인</h1>
            {/* <p>{time.dateTime}</p> */}
            <RevalidateButton tag={'time'} />
            <ul>
                {
                    data.map((item, idx) => {
                        return (
                            <Country item={item} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

type country = {
    index: number
    path: string
    name: string
    location: string
}

const Country = async ({ item }: country) => {
    const location: string = item.location
    const res = await getCurrentWeather(location)
    const time = await getTime(res.location.tz_id)

    return (
        <li>
            <Link href={item.path} key={item.name}>
                {item.name} / {res.current.condition.text} / {time.dateTime}
            </Link>
        </li>
    )
}