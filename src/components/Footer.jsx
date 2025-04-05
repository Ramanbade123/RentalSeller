import React from 'react';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white pt-12 pb-8 font-Poppins'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
                {/* Brand Column */}
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <img src="/logo.svg" alt="rentour" className='h-8 w-auto' />
                        <p className='font-bold text-white text-lg'>RenTour</p>
                    </div>
                    <p className='text-gray-300 text-sm leading-relaxed'>
                        Empowering students with affordable access to premium technology through our innovative rental platform.
                    </p>
                    <div className='flex items-center gap-1.5 text-gray-300 text-sm'>
                        <MdLocationOn className='text-gray-400 text-base' />
                        <span>Kathmandu, Nepal</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='space-y-4'>
                    <h3 className='font-semibold text-white text-lg border-b border-gray-700 pb-2'>Quick Links</h3>
                    <ul className='space-y-3'>
                        {['About us', 'Devices', 'Pricing', 'How it works', 'Testimonials', 'Blog'].map((item) => (
                            <li key={item}>
                                <a 
                                    href="#" 
                                    className='text-gray-300 hover:text-white text-sm transition-colors duration-200'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className='space-y-4'>
                    <h3 className='font-semibold text-white text-lg border-b border-gray-700 pb-2'>Support</h3>
                    <ul className='space-y-3'>
                        {['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Contact Us'].map((item) => (
                            <li key={item}>
                                <a 
                                    href="#" 
                                    className='text-gray-300 hover:text-white text-sm transition-colors duration-200'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social */}
                <div className='space-y-4'>
                    <h3 className='font-semibold text-white text-lg border-b border-gray-700 pb-2'>Contact Us</h3>
                    <div className='space-y-3'>
                        <div className='flex items-start gap-3 text-gray-300 text-sm'>
                            <MdEmail className='text-gray-400 mt-0.5 flex-shrink-0' />
                            <a href="mailto:support@rentour.com" className='hover:text-white transition-colors duration-200'>
                                support@rentour.com
                            </a>
                        </div>
                        <div className='flex items-start gap-3 text-gray-300 text-sm'>
                            <FaPhoneAlt className='text-gray-400 mt-0.5 flex-shrink-0' />
                            <a href="tel:+97799999999" className='hover:text-white transition-colors duration-200'>
                                +977 999-999-9999
                            </a>
                        </div>
                    </div>

                    <div className='pt-2'>
                        <h4 className='text-gray-300 text-sm mb-3'>Follow Us</h4>
                        <div className='flex gap-4'>
                            {[
                                { icon: <FaFacebook size={16} />, name: 'Facebook' },
                                { icon: <FaInstagram size={16} />, name: 'Instagram' },
                                { icon: <FaTwitter size={16} />, name: 'Twitter' },
                                { icon: <FaLinkedin size={16} />, name: 'LinkedIn' },
                                { icon: <FaYoutube size={16} />, name: 'YouTube' }
                            ].map((social) => (
                                <a 
                                    key={social.name}
                                    href="#" 
                                    className='text-gray-400 hover:text-white text-lg transition-colors duration-200'
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-800'>
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
                    <p>© 2025 RenTour. All rights reserved</p>
                    <div className='flex gap-4 mt-3 md:mt-0'>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Privacy Policy</a>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Terms of Service</a>
                        <a href="#" className='hover:text-white transition-colors duration-200'>Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;