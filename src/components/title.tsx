import { VideoLogo } from "./video-logo";
import { useTranslations } from "next-intl";
export default function Title() {
  const t = useTranslations("common");
  return (
    <div className="text-center pt-4 md:pt-0 md:pb-8 px-4">
      <div className="flex flex-col items-center pb-0 md:pb-6">
        <img
          src="/assets/fast-crypto-exchange-logo.png"
          alt="logo"
          className="w-80"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 pt-4 md:pt-0">
        {t("title")}
      </h1>
      <p className="text-gray-600 text-opacity-70 text-lg mt-2">
        {t("description")}
      </p>
    </div>
  );
}
