import { cookies } from "next/headers";
import { COOKIE_NAME } from "./apiPath";

export async function getAuthData() {
    const cookieStore = cookies()
    return cookieStore.has()

}