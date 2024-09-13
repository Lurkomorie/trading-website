import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="bg-[#f8f8f8] flex items-center justify-center p-4 text-gray-900">
      <div className="w-full max-w-md h-auto md:h-[578px] space-y-8 bg-white p-8 border border-gray-200 shadow-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What happens after I submit the form?
            </AccordionTrigger>
            <AccordionContent>
              Once you submit the form, our agent will contact you via your
              provided Telegram username to discuss the details and next steps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Why do I need to pass a compliance check?
            </AccordionTrigger>
            <AccordionContent>
              The compliance check ensures that your cryptocurrency wallet
              adheres to legal standards and is free from any illicit
              activities. This helps us maintain a secure trading environment
              for all users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long does the entire process take?
            </AccordionTrigger>
            <AccordionContent>
              The process typically takes less than 24 hours from the time you
              submit the form to the completion of the transaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is my personal information secure?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We prioritize your privacy and security. Your
              information will be kept confidential and used solely for
              facilitating the transaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Can I choose a different method of contact besides Telegram?
            </AccordionTrigger>
            <AccordionContent>
              Currently, we use Telegram as our primary means of communication
              due to its security features. If you have concerns, please mention
              them in the form's additional comments section.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
