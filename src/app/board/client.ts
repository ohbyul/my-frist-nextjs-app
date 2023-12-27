'use client'
import { useRouter } from "next/navigation";

const router = useRouter();

export async function getRouter() {
    return router;
}