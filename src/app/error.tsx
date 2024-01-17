"use client"

import { useEffect } from "react"


type Props = {
    error: Error
    reset: () => void
}


// type은 모든 타입을 선언할 때 사용할 수 있고,  + 원시값
// interface는 객체에 대한 타입을 선언할 때만 사용할 수 있다.
// 확장 불가능한 타입을 선언하고 싶다면 type을 사용하면 되고, 
// 확장 가능한 타입을 선언하고 싶다면 interface를 사용하면 된다.

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
