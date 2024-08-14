import { getAuthData } from "@/components/util/getAuthData";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const data = await getAuthData();
    const currentPath = request.nextUrl.pathname;
  
    if (currentPath.startsWith("/profile") && !data) {
  
      return NextResponse.redirect(new URL("/login", request.url));
     
    }

    // // if (currentPath.startsWith("/profile") && !data) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }


  
    return NextResponse.next();
  }