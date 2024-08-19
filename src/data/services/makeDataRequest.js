import api from "@/components/util/apiPath";

export async function makeDataRequest(data) {
//     try {
     
//       const response = await fetch(api.weather.get +"?"+ new URLSearchParams({
//     city: data,
// }).toString(), { next: { tags: ['weatherData'] } });
//     console.log("@@@@")
//     console.log(response.json());
//       return JSON.stringify(response.json());
//     } catch (error) {
//       console.error("Failed to request:", error);
//       if (error instanceof Error) return { error: { message: error.message } };
//       return { data: null, error: { message: "Unknown error" } };
//     }



    try {
      const response = await fetch(api.weather.get +"?"+ new URLSearchParams({
        city: data,
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