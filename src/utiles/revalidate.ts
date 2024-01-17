import { NEXT_PUBLIC_URL } from "./constants";

export default async function revalidate(tag: string) {

    const res = await fetch(`${NEXT_PUBLIC_URL}/api/revalidate?tag=${tag}`, {
        method: 'POST',
    })

    return res.json()
}
