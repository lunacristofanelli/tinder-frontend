export { default } from "next-auth/middleware";

export const config = { matcher: ["/administrador/:path*", "/likes/:path*", "/matches/:path*", "/personas/:path*", "/mensajes/:path*"] }

