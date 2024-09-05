"use server"
import { COOKIE_NAME } from '@/components/util/apiPath';
import { cookies } from 'next/headers';
const cookieStore = cookies();

export async function getCookie(){
    let name = cookieStore.get(COOKIE_NAME).name;
    let value = cookieStore.get(COOKIE_NAME).value;

    return `${name}=${value}`;
}
export async function getCookies(value){
    return {name :  cookieStore.get(value).name, value: cookieStore.get(value).value}
}
export async function hasCookie(value){
    return cookieStore.has(value)
}