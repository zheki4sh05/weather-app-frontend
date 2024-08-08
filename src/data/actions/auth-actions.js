
"use server";

import { schemaRegister } from "@/lib/schema";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import { registerUserService } from "../services/auth-service";
import { COOKIE_NAME } from "@/components/util/apiPath";

const config = {
  maxAge: 60 * 60 * 24, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(prevState, formData) {


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

  cookies().set(COOKIE_NAME, "", config);
  redirect("/profile");

}


export async function logoutAction() {

  cookies().getAll().map((cookie) => {
    cookies().delete(cookie.name)
  })

  redirect("/");
}