import api, { base } from "@/components/util/apiPath";

export async function getUserMeLoader() {
    
  
    const url = new URL(api.user.get, base);
    
    try {
      const response = await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        
        },
        cache: "no-cache",
      });
      const data = await response.json();
      if (data.error) return { ok: false, data: null, error: data.error };
      return { ok: true, data: data, error: null };
    } catch (error) {
      console.log(error);
      return { ok: false, data: null, error: error };
    }
  }