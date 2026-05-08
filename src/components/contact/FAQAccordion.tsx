import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../../types";

interface Props {
  items: FaqItem[];
}

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ item, isOpen, onToggle, index }: AccordionItemProps) {
  const id = `faq-answer-${index}`;

  return (
    <div className="border-t border-brand-black/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 py-6 text-left hover:text-brand-red transition-colors duration-200"
      >
        <span className="font-black text-xl">{item.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div id={id} role="region" hidden={!isOpen} className="pb-6">
        <p className="text-brand-black/65 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
          index={index}
        />
      ))}
    </div>
  );
}
