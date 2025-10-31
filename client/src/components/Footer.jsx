import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="container mx-auto border-t border-gray-200">
            <div className="w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-10 text-gray-800">

                <div className="space-y-12">
                    <h2 className="text-2xl font-light leading-snug">
                        ZSCircle - Digital Security<br /> Consulting Services
                    </h2>
                    <div className="space-y-3">
                        <div className="font-medium leading-snug">
                            <h2> Address: </h2>
                            <p className="font-light">Santi Nagar, Kohka, Bhilai, IN</p>
                        </div>
                        <div className="font-medium leading-snug">
                            <h2> Phone: </h2>
                            <p className="font-light">+91 8269559082</p>
                        </div>
                        <div className="font-medium leading-snug">
                            <h2> Email: </h2>
                            <p className="font-light">business.zscircle@gmail.com</p>
                        </div>
                        <div className="font-medium leading-snug">
                            <h2> Hours: </h2>
                            <p className="font-light">Open today <br />
                                09:00 am – 10:00 pm</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-10 gap-y-2 text-xl font-light">
                    <div className="flex flex-col space-y-1">
                        <NavLink to="/" onClick={() => { scrollTo(0, 0) }} className="hover:underline">Home</NavLink>
                        <NavLink to="/about-us" onClick={() => { scrollTo(0, 0) }} className="hover:underline">About</NavLink>
                        <NavLink to="/services" onClick={() => { scrollTo(0, 0) }} className="hover:underline">Services</NavLink>
                        <NavLink to="/contact-us" onClick={() => { scrollTo(0, 0) }} className="hover:underline">Contact</NavLink>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <NavLink to="/careers" onClick={() => { scrollTo(0, 0) }} className="hover:underline">Careers</NavLink>
                        <NavLink to="./subscribe" onClick={() => { scrollTo(0, 0) }} className="hover:underline">Subscribe</NavLink>
                    </div>
                </div>

                <div className="space-y-4 text-2xl font-light leading-snug">
                    <h4>Follow Us</h4>
                    <div className="flex gap-6 text-gray-600 text-xl">
                        <a href="https://x.com/" target="_blank"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                            aria-label="X / Twitter">
                            <RiWhatsappLine size={22} />
                        </a>
                        <a href="https://facebook.com/_" target="_blank"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                            aria-label="Facebook">
                            <Facebook size={22} />
                        </a>
                        <a href="https://instagram.com/zs_circle" target="_blank"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                            aria-label="Instagram">
                            <Instagram size={22} />
                        </a>
                        <a href="https://youtube.com/zscircle" target="_blank"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                            aria-label="YouTube">
                            <Youtube size={22} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
                <p>Copyright © 2025 ZSCircle – All Rights Reserved.</p>
                <p>Powered by <span className="font-medium text-gray-700"><a href="https://instagram.com/zs_circle" target="_blank" aria-label="Instagram">ZSCircle Agency</a></span></p>
            </div>
        </footer>
    )
}

export default Footer