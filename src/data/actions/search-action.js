import { schemaSearchInput } from "@/lib/schema";
import { makeDataRequest } from "../services/makeDataRequest";
import api from "@/components/util/apiPath";

export async function searchDataAction(data) {
  
    const responseData = await makeDataRequest(data);
  
    if (!responseData) {
      return {
       
        apiErrors: null,
        zodErrors: null,
        message: "Ops! Something went wrong. Please try again.",
      };
    }
  
    if (responseData.error) {
      return {
      
        apiErrors: responseData.error,
        zodErrors: null,
        message: "Failed to request.",
      };
    }
  return responseData.json()
  
  }

  export async function fetchMoreWeatherData(value) {
    
    try {
      const response = await fetch(api.weather.more +"?"+ new URLSearchParams({
        value: value,
    }).toString(), { cache:"no-cache" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
     
    } catch (error) {
      console.error(error.message);
    }

  }


