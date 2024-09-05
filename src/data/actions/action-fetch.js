
import api, { COOKIE_NAME } from './../../components/util/apiPath';
import { getCookie, getCookies, hasCookie } from '@/data/actions/getCookie';
import { weatherData } from '@/lib/tags';

export async function fetchProfileData(){

  

         const res = await fetch(api.user.get,{
             headers: {
                 'Content-Type': 'application/json',
                 'Cookie':getCookie()
               },
              
         }, { next: { tags: [weatherData] } })
         return res.json();

}


