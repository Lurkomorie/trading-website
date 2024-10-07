import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ChangeLanguage() {
  const lang = useLocale();
  return (
    <div className="flex flex-row gap-2">
      {["ru", "en"].map((lng) => {
        return (
          <Link href={`/${lng}`} locale={lng} key={lng}>
            <div
              className={`text-md md:text-md font-bold text-gray-900 ${
                lng === lang ? "text-blue-600" : "text-gray-900"
              }`}
            >
              {lng}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
