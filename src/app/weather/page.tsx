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
            <RevalidateButton tag={'time'} />
            <ul>
                {
                    data.map((item, idx) => {
                        return (
                            <Country path={item.path} name={item.name} location={item.location} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

type country = {
    // index: number
    path: string
    name: string
    location: string
}

const Country = async ({ path, name, location }: country) => {
    const res = await getCurrentWeather(location)
    const time = await getTime(res.location.tz_id)

    return (
        <li key={name}>
            <Link href={path} >
                {name} / {res.current.condition.text} / 현재 시각 : {time.hour}시 {time.minute}분 {time.seconds}초
            </Link>
        </li>
    )
}