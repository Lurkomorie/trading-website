import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <div className="bg-[#f8f8f8] flex items-center justify-center p-4 text-gray-900">
      <div className="w-full max-w-md h-auto md:h-[578px] space-y-8 bg-white p-8 border border-gray-200 shadow-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              {t("item1.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item1.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              {t("item2.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item2.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              {t("item3.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item3.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              {t("item4.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item4.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              {t("item5.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item5.answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              {t("item6.question")}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {t("item6.answer")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
