import { schemaSearchInput } from "@/lib/schema";
import { makeDataRequest } from "../services/makeDataRequest";

export async function searchDataAction(data) {


    // const validatedFields = schemaSearchInput.safeParse({
    //   value: data,
    // });
  
    // if (!validatedFields.success) {
    //   return {
    //     zodErrors: validatedFields.error.flatten().fieldErrors,
    //     strapiErrors: null,
    //     message: "Enter city/country name!",
    //   };
    // }
  
    const responseData = await makeDataRequest(data);

    console.log("!!!!")

    console.log(responseData)
  
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