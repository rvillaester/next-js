import { NextResponse } from 'next/server'
export function middleware(req, ev) {
    console.log(`middleware ${new Date()}`);
    const { isAuthenticated } = req.cookies;
    console.log(`authenticated all: ${isAuthenticated}`);
    // if(!isAuthenticated) {
    //     return new Response('Auth required',
    //         {
    //             status: 401
    //         })
    // }
    return NextResponse.next();
}