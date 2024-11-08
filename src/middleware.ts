import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { auth } from "./next_auth/auth";
import { NextResponse } from "next/server";

const protectedPages = ["/profile", "/cms"];
const adminPages = ["/cms"];
const intlMiddleware = createMiddleware(routing);

export default auth(async (req) => {
  let shouldRedirect = false;

  const protectedPathnameRegex = RegExp(`^(/(${routing.locales.join("|")}))?(${protectedPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`, "i");

  const adminPathnameRegex = RegExp(`^(/(${routing.locales.join("|")}))?(${adminPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`, "i");

  const isLoggedIn = req.auth;
  const isProtectedPage = protectedPathnameRegex.test(req.nextUrl.pathname);
  const isAdminPage = adminPathnameRegex.test(req.nextUrl.pathname);

  if (isProtectedPage && !isLoggedIn) {
    shouldRedirect = true;
  }

  if (isAdminPage && !isLoggedIn) {
    shouldRedirect = true;
  }
  if (shouldRedirect) {
    const callbackUrl = `${req.nextUrl.origin}${req.nextUrl.pathname}${req.nextUrl.search}`;
    return NextResponse.redirect(new URL(`/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`, req.url));
  }
  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
