"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({
  className,
  ref,
  onClick,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  const { theme, setTheme } = useTheme();

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
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <SunIcon className="h-full w-full" />
    </Button>
  );
}
