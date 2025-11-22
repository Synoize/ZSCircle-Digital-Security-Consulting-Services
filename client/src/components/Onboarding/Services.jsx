import React from "react";
import { Check, MoveRight } from 'lucide-react';
import { services } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import Service from "../Service";

const Services = () => {
  const { navigate } = useAppContext();

  return (
    <section className="container mx-auto mb-20 px-4 md:px-12 text-center space-y-12 text-black">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-special-red">
          We Serve Services
        </h3>

        <h1 className="text-2xl md:text-5xl max-w-4xl mx-auto font-light mt-4 px-4 leading-snug">
          We Provide Comprehensive Digital Solutions for Startups, Businesses & Individuals
        </h1>

        <p className="mt-4 max-w-5xl mx-auto leading-snug font-light md:text-xl">
          Our all-in-one digital agency delivers powerful solutions across web development,
          mobile apps, UI/UX design, branding, marketing, cybersecurity, and cloud services.
          We help businesses transform ideas into scalable, secure, and high-impact digital products.
        </p>
      </div>

      {/* services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((service, index) => (
          <Service key={index} service={service}/>
        ))}
      </div>

      {/* CTA Button */}
      <div onClick={() => { navigate('/services'); scrollTo(0, 0) }}
        className="inline-flex items-center justify-center px-6 py-3 bg-special-red/10 text-black rounded-md hover:bg-special-red/15 shadow-sm transition group cursor-pointer"
      >
        More services
        <span className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full text-sm group-hover:translate-x-2 transition-all duration-500">
          <MoveRight size={20} className="-rotate-45 group-hover:rotate-0 transition-all duration-500" />
        </span>
      </div>
    </section>
  );
};

export default Services;
