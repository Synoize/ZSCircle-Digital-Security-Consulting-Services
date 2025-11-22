import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { MoveRight } from "lucide-react";

const About = () => {
  const { navigate } = useAppContext();

  return (
    <section className="container mx-auto md:mb-20 mb-8 px-4 md:px-12 flex flex-col lg:flex-row items-start text-black">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2">
        <img
          loading="lazy"
          src={assets.about}
          alt="About"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 space-y-4 px-4 py-12 md:px-12">
        <h3 className="text-sm font-bold uppercase tracking-wide text-special-red">About Us</h3>
        <h2 className="text-2xl md:text-5xl font-light leading-snug">
          forward-thinking digital agency dedicated to crafting
        </h2>
        <p className="font-light md:text-xl">
           technology that inspires, empowers, and accelerates growth. We merge creativity with engineering to build digital products that don’t just work — they leave an impact.
        </p>
      
        <p className="font-light md:text-xl">
          Driven by innovation and guided by strategy, our team brings together developers, designers, and digital experts who believe in building technology that stands out — visually, technically, and functionally.
        </p>

        <div onClick={() => { navigate('/about-us'); scrollTo(0, 0) }}
          className="inline-flex items-center justify-center px-6 py-3 bg-special-red/10 text-black rounded-md hover:bg-special-red/15 shadow-sm transition mt-12 group cursor-pointer"
        >
          More Info
          <span className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full text-sm group-hover:translate-x-2 transition-all duration-500">
            <MoveRight size={20} className="-rotate-45 group-hover:rotate-0 transition-all duration-500" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
