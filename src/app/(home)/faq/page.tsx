import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const FAQSection = () => {
  const faqItems = [
    { question: "Membuat akun invita", answer: "" },
    { question: "Membuat Undangan Online", answer: "" },
    { question: "Manfaat Dashboard untuk Mengelola Undangan Online", answer: "Untuk memudahkan pengelolaan dan pelacakan berbagai aspek undangan dengan lebih efisien. Dashboard menyediakan akses sentral ke semua informasi undangan, membantu mengatur informasi secara lengkap, menyesuaikan desain undangan secara instan. Selain itu, Anda dapat mengelola data tamu secara terorganisir, yang membantu menghemat waktu dan tenaga. Fitur-fitur dashboard ini memudahkan proses pengaturan, lebih praktis dan memungkinkan kontrol penuh di ujung jari Anda." },
    { question: "Publish undangan online", answer: "" },
    { question: "Sebarkan undangan online", answer: "" },
    { question: "Scan QR Code untuk Buku Tamu Online", answer: "" },
    { question: "Undang Tamu, Kirim QR Code dan Gift Registry", answer: "" },
  ];

  return (
    <>
      <Header />
      <div className='bg-surface mx-auto px-4 py-24'>
          <h2 className="text-5xl mb-8 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="bg-surface p-6 rounded-lg max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full shadow-none">
                  {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className='border-0'>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <p>
                          <span className='mr-2'>
                            &bull;
                          </span>
                          {item.question}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent>{item.answer || "No answer provided."}</AccordionContent>
                  </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQSection;