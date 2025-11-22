import React, { useState } from "react";
import { ChevronUp, ChevronDown, MoveRight } from 'lucide-react';
import { useAppContext } from "../../context/AppContext";

const FAQ = () => {
  const { navigate } = useAppContext();

 const faqs = [
  {
    question: "What services does ZSCircle provide?",
    answer: `ZSCircle offers complete digital solutions for startups, businesses, and individuals. 
    Our services cover everything from designing digital experiences to developing full-scale products.`,
    list: [
      "Web Development",
      "App Development (Android, iOS, Hybrid)",
      "UI/UX Design",
      "Branding & Creative Services",
      "Digital Marketing",
      "Cybersecurity Solutions",
      "Cloud & Deployment Services",
      "Custom Software Development",
    ],
  },
  {
    question: "What technologies does ZSCircle use?",
    answer: `We work with modern and industry-standard technologies to ensure fast, scalable, and secure solutions.`,
    list: [
      "React, Next.js, Vue.js (Frontend Development)",
      "Node.js, Express.js, PHP, Laravel (Backend Development)",
      "MongoDB, MySQL, PostgreSQL (Databases)",
      "React Native & Flutter (Mobile App Development)",
      "Figma & Adobe XD (UI/UX Design)",
      "AWS, Google Cloud, DigitalOcean (Cloud Hosting)",
      "Docker, GitHub, CI/CD (DevOps & Deployment)",
    ],
  },
  {
    question: "Who can benefit from ZSCircle’s services?",
    answer: `We work with clients across various domains, helping them build, scale, and secure their digital presence.`,
    list: [
      "Startups looking to launch digital products",
      "Businesses needing modern websites or apps",
      "Individuals wanting portfolio or personal platforms",
      "Enterprises seeking custom software or cloud solutions",
      "Brands needing UI/UX, marketing, or identity design",
    ],
  },
  {
    question: "Why choose ZSCircle for your digital project?",
    answer: "Here’s what makes us a reliable and growth-focused digital partner:",
    list: [
      "End-to-End Digital Solutions under one roof",
      "Startup-friendly, scalable development approach",
      "Security-first product building",
      "On-time delivery with transparent communication",
      "Modern tech stack and industry best practices",
      "Dedicated post-launch support & maintenance",
    ],
  },
  {
    question: "How can we get started with ZSCircle?",
    answer: `Contact us with your idea or requirements. 
    We will discuss your goals, create a project plan, share a quotation, and start development once approved.`,
    highlight: true,
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto mb-20 px-4 md:px-12 text-center space-y-12 text-black">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-special-red">
          Frequently Asked Questions
        </h3>
        <h1 className="text-2xl md:text-5xl max-w-4xl mx-auto font-light mt-4 px-4 leading-snug">
          Commonly asked questions about the services we provide at ZSCircle.
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto p-4 md:p-0 space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`faq-item font-light hover:border border-gray-200 md:text-lg cursor-pointer transition-all rounded-md p-4 ${faq.highlight ? "bg-gray-400" : ""
              }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="w-5/6 font-normal">{faq.question}</h3>
              <button className="toggle bg-special-red/10 w-8 h-8 flex items-center justify-center rounded-full">
                {openIndex === index ? <ChevronDown className="text-special-red" size={22}/> : <ChevronUp className="text-special-red" size={22}/>}
              </button>
            </div>

            {/* Answer Section */}
            {openIndex === index && (
              <div className="mt-3 space-y-2 animate-fadeIn">
                <p>{faq.answer}</p>
                {faq.list && (
                  <ul className="list-disc list-inside space-y-1">
                    {faq.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* More FAQs Button */}
      <div onClick={() => { navigate('/faqs'); scrollTo(0, 0) }}
        className="inline-flex items-center justify-center px-6 py-3 bg-special-red/10 text-black rounded-md hover:bg-special-red/15 shadow-sm transition group cursor-pointer"
      >
        More FAQ's
        <span className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full text-sm group-hover:translate-x[10px] transition-all duration-500">
          <MoveRight size={20} className="-rotate-45 group-hover:rotate-0 transition-all duration-500"/>
        </span>
      </div>
    </section>
  );
};

export default FAQ;
