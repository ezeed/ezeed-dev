import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getResumeData } from "@/lib/redis";
import type { Metadata } from "next";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getResumeData();

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.name,
      template: `%s | ${data.name}`,
    },
    description: data.description?.en,
    openGraph: {
      title: data.name,
      description: data.description?.en,
      url: data.url,
      siteName: data.name,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: data.name,
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, data] = await Promise.all([
    getMessages(),
    getResumeData(),
  ]);

  return (
    <NextIntlClientProvider messages={messages}>
      <TooltipProvider delayDuration={0}>
        <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
          {children}
        </div>
        <Navbar navbar={data.navbar} contact={data.contact} />
      </TooltipProvider>
    </NextIntlClientProvider>
  );
}
