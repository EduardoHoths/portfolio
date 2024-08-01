"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function LanguageSelector() {
  const t = useTranslations("LanguageSelector");
  const locale = useLocale();
  const router = useRouter();

  const onLanguageSelect = (value: string) => {
    router.replace(`/${value}`);
  };

  return (
    <div className="w-[200px]">
      <Select defaultValue={locale} onValueChange={onLanguageSelect}>
        <SelectTrigger className="border-gray-700 hover:opacity-85 transition-all">
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          align="start"
          className="border-gray-700 dark:bg-black bg-white DropdownMenuContent"
        >
          <SelectItem value="pt-br" className="hover:opacity-85 transition-all">{t("pt-br")}</SelectItem>
          <SelectItem value="en-us" className="hover:opacity-85 transition-all">{t("en-us")}</SelectItem>
          <SelectItem value="jp" className="hover:opacity-85 transition-all">{t("jp")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
