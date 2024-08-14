"use server";
import { schemaRegister } from "@/lib/schema";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import { loginUserService, registerUserService } from "../services/auth-service";
import { COOKIE_NAME, COOKIE_USER_EMAIL } from "@/components/util/apiPath";

import setCookie from "set-cookie-parser"

const config = {
  maxAge: 60 * 60 * 24, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
};

function validate(formData) {
  const validatedFields = schemaRegister.safeParse({
    password: formData.get("password"),
    email: formData.get("email"),
  });



  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  return validatedFields;
}



function setCookiesAndRedirectToProfile(response){

  const cookie = setCookie.parse(response.headers.getSetCookie(),{map:true});

 cookies().set(COOKIE_NAME,cookie[COOKIE_NAME].value,config)
 cookies().set(COOKIE_USER_EMAIL,cookie[COOKIE_USER_EMAIL].value,config)
 
  redirect("/profile");
}



export async function registerUserAction(prevState, formData) {
  let validatedFields = validate(formData);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Register.",
    };
  }
  setCookiesAndRedirectToProfile(response)
}

export async function logoutAction() {
  cookies()
    .getAll()
    .map((cookie) => {
      cookies().delete(cookie.name);
    });

  redirect("/");
}

export async function loginUserAction(prevState, formData) {

  let validatedFields = validate(formData);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Register.",
    };
  }

  setCookiesAndRedirectToProfile(responseData)
}


