"use server"
import { cookies } from 'next/headers';

export async function getCookie(){
    const cookieStore = cookies();
    let name = cookieStore.get(COOKIE_NAME).name;
    let value = cookieStore.get(COOKIE_NAME).value;

    return `${name}=${value}`;
}