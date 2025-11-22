import React from 'react'
import Services from '../components/Onboarding/Services'
import Service from '../components/Service'
import { services } from '../assets/assets'

const ServicesPage = () => {
  return (
    <div className='container mx-auto mt-12 mb-20 px-4 md:px-12 text-center space-y-12 text-black'>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
  )
}

export default ServicesPage