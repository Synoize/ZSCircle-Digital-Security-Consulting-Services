import { Check } from 'lucide-react'
import React from 'react'

const Service = ({service}) => {
    return (
        <div
            className="bg-special-red/10 overflow-hidden hover:shadow transition border-t-4 border-special-red rounded-t"
        >
            <img
                loading="lazy"
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-8">
                <h4 className="text-2xl">{service.title}</h4>
                <p className="font-light md:text-lg mt-2">{service.description}</p>
            </div>

            <div className="flex flex-col items-start px-8 mb-8 space-y-4">
                <h4 className="text-2xl">We help you:</h4>
                <ul className="space-y-4 font-light">
                    {service.helps.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-start">
                            <div><Check className="text-special-red" size={20} /></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Service