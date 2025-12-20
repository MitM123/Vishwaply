import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Why should I choose Vishwaplyandhardware?",
      answer:
        "Because we focus on quality, authenticity, and expert guidance. We don't just sell products—we help you choose the right materials that last longer and perform better.",
    },
    {
      question: "What makes Vishwaplyandhardware different from others?",
      answer:
        "Our biggest difference is trusted brands, complete product range, and honest advice. Customers rely on us for genuine products, fair pricing, and long-term reliability.",
    },
    {
      question: "Do you sell only branded products?",
      answer:
        "Yes. We deal strictly in original, well-known brands to ensure durability, safety, and premium finish for every project.",
    },
    {
      question: "Can you help me select the right plywood or hardware?",
      answer:
        "Absolutely. Our team provides professional guidance based on your usage, budget, and interior requirements, so you never overpay or compromise on quality.",
    },
    {
      question: "Do you cater to builders, architects, and interior designers?",
      answer:
        "Yes. We regularly work with builders, architects, interior designers, carpenters, and homeowners, offering products suitable for both small and large projects.",
    },
    {
      question: "Are your prices competitive?",
      answer:
        "Yes. We offer transparent and competitive pricing while maintaining high product quality—no fake discounts or hidden charges.",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-[#FAF9F6] font-secondary py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Left Title */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                Common Questions
              </span>
              <div className="h-[1px] w-12 bg-gray-400" />
            </div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              Frequently
              <br />
              Asked.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to know about our products and services.
            </motion.p>
          </div>

          {/* Right FAQ List */}
          <div className="lg:w-2/3 w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left py-6 text-xl font-medium text-gray-900 hover:text-gray-600 hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-lg text-gray-600 leading-relaxed font-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
