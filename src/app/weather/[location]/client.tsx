"use client"

import { useRouter } from "next/navigation"

export const HomeButton = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/weather')
    }

    return (
        <button onClick={handleClick}>홈</button>
    )
}