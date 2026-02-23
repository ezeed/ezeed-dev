"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0D3OBmLhvnupuleXk2xCiQRreieT2mAF3eXkVQjVsJBGK8MGEdlKH5NilN82QPztKFhSW8tONN?gv=true";

export default function BookCall() {
  const t = useTranslations("booking");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 cursor-pointer">
          <CalendarDays className="size-4" />
          {t("trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <div className="w-full h-150">
          <iframe
            src={CALENDAR_URL}
            className="w-full h-full border-0"
            title="Book a meeting"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
