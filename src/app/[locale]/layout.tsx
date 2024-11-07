import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/next_auth/auth";
import localFont from "next/font/local";

const fontKa = localFont({ src: "../../assets/fonts/firago.ttf" });

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<any> }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const session = await auth();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${locale === "ka" ? fontKa.className : fontKa.className}`}>
        <SessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
