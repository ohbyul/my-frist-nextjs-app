"use client"

import { useEffect } from "react"


type Props = {
    error: Error
    reset: () => void
}

// Error 컴포넌트는 반드시 uc 여야 한다.
export default function Error({ error, reset }: Props) {

    useEffect(() => {
        console.log('--------', error.message);

    }, [])
    return (
        <div>
            error page 입니다.
            <button onClick={() => { reset() }}>새로고침</button>
        </div>
    )
}
