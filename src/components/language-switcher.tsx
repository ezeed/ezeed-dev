"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher({
  className,
  ref,
  onClick,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      ref={ref}
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        handleToggle();
      }}
    >
      <span className="text-xs font-semibold uppercase">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </Button>
  );
}
