import React from "react";
import { assets } from "../../assets/assets";
import { Check } from "lucide-react";

const Solutions = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between bg-special-green container mx-auto mb-20">
      {/* Left Text Section */}
      <div className="w-full h-full md:w-1/2 p-12 space-y-12 text-start font-light text-black">
        <div>
          <h2 className="text-2xl md:text-5xl leading-snug">
            We provide comprehensive <br className="hidden md:block" /> digital
            solutions
          </h2>
          <p className="md:text-xl mt-6">
            that help startups and individuals build, launch, and scale their online presence.
            From web and app development to UI/UX design, branding, cybersecurity, and marketing —
            ZSCircle delivers everything you need under one roof.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-5xl mb-6">Our Value Proposition</h3>
          <ul className="space-y-4 md:text-xl grid grid-cols-1 md:grid-cols-2">
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Holistic Digital Transformation
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Comprehensive Services
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Affordable for You,
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Security-First Approach
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              AI & Automation Ready
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Long-Term Partnership
            </li>
            <li className="flex items-center gap-3 text-start">
              <Check className="text-special-red" size={20} />
              Reliable After-Delivery Support
            </li>
          </ul>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-full">
        <img
          loading="lazy"
          src={assets.solutions}
          alt="Solutions"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Solutions;
