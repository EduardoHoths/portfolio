import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { redirect, RedirectType } from "next/navigation";


export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
    redirect("/pt-br")
  }
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
