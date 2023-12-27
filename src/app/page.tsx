import { getCookie } from "@/utiles/cookie"
import { Button } from "flowbite-react";

export default function Home() {

  const user = getCookie('sb-access-token');
  console.log("user", user);

  return (
    <div>
      123
    </div>
  )
}
