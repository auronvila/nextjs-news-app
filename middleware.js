import {NextResponse} from "next/server";

export function middleware(request) {
  return NextResponse.next()
}


// used to filter the middleware. Ex. apply the middleware just to /news route
export const matcher = {
  matcher: ['/news']
}
