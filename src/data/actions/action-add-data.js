"use server"
import { weatherData } from "@/lib/tags"
import actionReval from "./action-reval"
import api, { base, COOKIE_NAME } from "@/components/util/apiPath";
import { redirect } from 'next/navigation'
import { getCookie } from "@/data/actions/getCookie";
import { cookies } from "next/headers";


async function saveData(formData, cookie){

  let userData = {
    name:formData.get("city"),
    lon:formData.get("lon"),
    lat:formData.get("lat"),
}


  let response;

  response = await fetch(api.user.post, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie":`${cookie.name}=${cookie.value}`
    },
    body: JSON.stringify({ ...userData }),
    cache: "no-cache",
  }).then(actionReval(weatherData));

  return response;


}

export async function addWeatherData(prevState, formData){

    const cookieStore = cookies();

    if(cookieStore.has(COOKIE_NAME)){
      
      try {

       let response = await saveData(formData, cookieStore.get(COOKIE_NAME))

     } catch (error) {
    
     }
     
    }else{

      // need to add functionality capable for to redirect user from login
      // (with choosed data from main page) 
      //to profile and ofcourse save this data
      // for future: see Intercepting routes in nextjs offic. doc and portal react dom

     
      redirect("/login")

    }

 

    

    

}

