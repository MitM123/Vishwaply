import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { motion } from 'framer-motion';
import FAQs from '../assets/faqs.svg';

const FAQ = () => {
  const faqs = [
    { question: "Why should I choose Vishwaplyandhardware?", answer: "Because we focus on quality, authenticity, and expert guidance. We don't just sell products—we help you choose the right materials that last longer and perform better." },
    { question: "What makes Vishwaplyandhardware different from others?", answer: "Our biggest difference is trusted brands, complete product range, and honest advice. Customers rely on us for genuine products, fair pricing, and long-term reliability." },
    { question: "Do you sell only branded products?", answer: "Yes. We deal strictly in original, well-known brands to ensure durability, safety, and premium finish for every project." },
    { question: "Can you help me select the right plywood or hardware?", answer: "Absolutely. Our team provides professional guidance based on your usage, budget, and interior requirements, so you never overpay or compromise on quality." },
    { question: "Do you cater to builders, architects, and interior designers?", answer: "Yes. We regularly work with builders, architects, interior designers, carpenters, and homeowners, offering products suitable for both small and large projects." },
    { question: "Are your prices competitive?", answer: "Yes. We offer transparent and competitive pricing while maintaining high product quality—no fake discounts or hidden charges." }
  ];

  return (
    <>
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-8 h-8 md:w-16 md:h-16 border-2 border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-1/4 w-12 h-12 md:w-24 md:h-24 border-2 border-indigo-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-8 h-8 md:w-16 md:h-16 border-2 border-blue-300 rounded-full animate-ping"></div>
      </div> */}
      <div className="container mx-auto font-secondary px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10 mb-10 md:mb-20"
        >
          <h1 className="inline-block text-4xl md:text-5xl font-dm-sans font-bold text-slate-800 mb-4 md:mb-6 relative">
            FAQs
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-indigo-500/50 to-blue-500/0"></div>
          </h1>
          <div className="flex flex-col-reverse md:flex-row w-full">
            <div className="font-dm-sans w-full md:w-[60%] mx-auto space-y-4 p-4 md:p-7">
                {faqs.map((faq, index) => (
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem key={index} value={`item-${index}`} className="border-b mb-4 border-orange-200/50">
                    <AccordionTrigger
                      className="text-left py-4 px-4 md:px-6 bg-orange-50/50 hover:bg-orange-100/70 rounded-2xl data-[state=open]:rounded-b-none hover:no-underline transition-all duration-200"
                    >
                      <span className="text-base md:text-lg font-semibold text-slate-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 md:p-6 text-start bg-orange-50/30 rounded-b-2xl">
                      <p className="text-slate-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
              </Accordion>
                ))}
            </div>
            <div className="w-full md:w-[40%] flex justify-center p-5">
              <img src={FAQs} alt="FAQs" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FAQ;