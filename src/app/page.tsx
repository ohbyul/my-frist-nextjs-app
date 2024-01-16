import { getCookie } from "@/utiles/cookie"
import { Button } from "flowbite-react";
import { Client, Input } from "./client";

export default function Home() {
    const user = getCookie('sb-access-token');
    console.log("user", user);

    return (
        <div>

            <div>
                <span>clean up </span>
                <div>
                    <Client />
                </div>
            </div>

            <div>
                <span>use Hooks input</span>
                <div>
                    <Input />
                </div>
            </div>

        </div>
    )
}
