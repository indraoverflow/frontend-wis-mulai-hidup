import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils/tailwind-util";
import { minervaModern } from "@/lib/fonts";

export default function page() {
  const faqItems = [
    {
      question: "Membuat akun Mulai Hidup",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Membuat Undangan Online",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Manfaat Dashboard untuk Mengelola Undangan Online",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Publish undangan online",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Sebarkan undangan online",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Scan QR Code untuk Buku Tamu Online",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
    {
      question: "Undang Tamu, Kirim QR Code dan Gift Registry",
      answer:
        "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda.",
    },
  ];

  return (
    <main className="relative flex flex-col items-center justify-start  md:gap-24 md:py-24  bg-surface flex-1">
      <h2
        className={cn(
          "uppercase text-3xl lg:text-5xl text-center py-4 md:py-6 px-12",
          minervaModern.className
        )}
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="bg-surface px-6 rounded-lg max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full shadow-none">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <p className="text-base md:text-[22px] font-normal pl-6 relative">
                  <span className="mr-2 absolute left-0">&bull;</span>
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-[22px] font-normal leading-tight text-justify md:pr-3">
                {item.answer || "No answer provided."}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
