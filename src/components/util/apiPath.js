export const COOKIE_NAME = "weather-app"
export const  base="http://localhost:8080/";
const api={

    weather:{
        get:base.concat("weather"),
    },
    user:{
        post:base.concat("user"),
        get:base.concat("user")
    },
    auth:{
        signup:base.concat("signup"),
        login:base.concat("login")
    }
    
   
}

export default api;