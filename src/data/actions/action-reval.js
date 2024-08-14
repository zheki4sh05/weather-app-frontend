'use server'
 
import { weatherData } from '@/lib/tags'
import { revalidateTag } from 'next/cache'
 
export default async function actionReval(tagName) {

  switch(tagName){
    case weatherData:{
      revalidateTag(weatherData)
    }
  }

 
}