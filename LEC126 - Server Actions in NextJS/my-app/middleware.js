import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.json({message: 'behen ke bhai ki beti ke bhatije'})
//   return NextResponse.redirect(new URL('/', request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

//same3 can be edone using if else
export function middleware(request){
  if(request.nextUrl.pathname.startsWith('/about')){
    return NextResponse.rewrite(new URL('/', request.url))
  }
  if(request.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL('/about2', request.url))
  }
}