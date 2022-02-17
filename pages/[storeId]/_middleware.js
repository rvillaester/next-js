import { NextResponse } from "next/server";
export const middleware = (req, ev) => {
  console.log(`middleware ${new Date()}`);
  const { isAuthenticated } = req.cookies;
  console.log(`authenticated details: ${isAuthenticated}`);
  // if(typeof isAuthenticated === 'undefined') {
  // if (!isAuthenticated) {
  //   return new Response("Auth required", {
  //     status: 401,
  //   });
  // }
  return NextResponse.next();

  // return new Response("Auth required", {
  //   status: 401,
  // });
}
