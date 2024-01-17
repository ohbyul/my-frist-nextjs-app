"use client"

import revalidate from "@/utiles/revalidate";

type Props = {
    tag: string;
}

export default function RevalidateButton({ tag }: Props) {
    const handleClick = async () => {
        const res = await revalidate(tag)
        console.log(res);

    }
    return (
        <button onClick={handleClick}> 캐시 비우기</button>
    )
}
