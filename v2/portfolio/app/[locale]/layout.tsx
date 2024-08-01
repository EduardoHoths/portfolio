import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Hoths - Desenvolvedor FullStack",
  description:
    "Portfólio de Eduardo Hoths, um desenvolvedor FullStack com experiência em NextJS, Vue.js, Typescript, React Native, NodeJS, MySQL, MongoDB e PHP com Laravel. Veja meus projetos e entre em contato para colaborações inovadoras.",
  keywords:
    "Eduardo Hoths, desenvolvedor FullStack, NextJS, Vue.js, Typescript, React Native, NodeJS, MySQL, MongoDB, PHP, Laravel, portfólio de desenvolvedor",
  openGraph: {
    title: "Eduardo Hoths - Desenvolvedor FullStack",
    description:
      "Portfólio de Eduardo Hoths, desenvolvedor com experiência em tecnologias modernas e projetos inovadores.",
    url: "https://www.seuportfolio.com", // substitua pela URL do seu site
    images: "https://www.seuportfolio.com/imagem.png", // substitua pela URL de uma imagem representativa do seu portfólio
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-[800px] px-4 py-2 mx-auto">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
