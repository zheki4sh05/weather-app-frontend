'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function actionRevalSearch() {
  revalidateTag('weatherData')
}