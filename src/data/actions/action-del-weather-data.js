"use server"
import { weatherData } from '@/lib/tags';
import api, { base, COOKIE_NAME } from './../../components/util/apiPath';
import actionReval from './action-reval';
import { cookies } from 'next/headers';
export async function deleteWeatherDataByid(prevState, formData){

    const cookieStore = cookies();
 
    let name = cookieStore.get(COOKIE_NAME).name;
    let value = cookieStore.get(COOKIE_NAME).value;

    let response;

    try {
    

         response = await fetch(api.user.delete+"?id="+formData.get("id"), {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Cookie":`${name}=${value}`
            },
            // body: JSON.stringify({ ...userData }),
            cache: "no-cache",
          }).then(actionReval(weatherData));


      } catch (error) {
        
      }


}