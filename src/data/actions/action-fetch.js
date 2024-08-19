
import { cookies } from 'next/headers';
import api, { COOKIE_NAME } from './../../components/util/apiPath';
import { getCookie } from '@/data/actions/getCookie';
import { weatherData } from '@/lib/tags';

export async function fetchProfileData(){

    const cookieStore = cookies();

   let name = cookieStore.get(COOKIE_NAME).name;
   let value = cookieStore.get(COOKIE_NAME).value;

    const res = await fetch(api.user.get,{
        headers: {
            'Content-Type': 'application/json',
            'Cookie':`${name}=${value}`
          },
         
    }, { next: { tags: [weatherData] } })
    return res.json();

}


