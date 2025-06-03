import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

import FooterWidget from './FooterWidget';
import logo from './../../assets/logo/mini-white-logo-removebg.png';

const Footer = () => {
    const { t } = useTranslation();

    const footerWidgets = [
        {
            title: t('footer.quickLinks'),
            links: [
                { to: "/", label: t('footer.home') },
                { to: "/about", label: t('footer.about') },
                { to: "#", label: t('footer.service') },
                { to: "#", label: t('footer.testimonial') },
                { to: "/contact", label: t('footer.contact') }
            ]
        },
        {
            title: t('footer.services'),
            links: [
                { to: "#", label: t('footer.webDesign') },
                { to: "#", label: t('footer.webDevelopment') },
                { to: "#", label: t('footer.seoOptimization') },
                { to: "#", label: t('footer.blogWriting') }
            ]
        },
        {
            title: t('footer.helpSupport'),
            links: [
                { to: "#", label: t('footer.supportCenter') },
                { to: "#", label: t('footer.liveChat') },
                { to: "#", label: t('footer.faq') },
                { to: "#", label: t('footer.termsConditions') }
            ]
        }
    ];

    const socialLinks = [
        { href: "#", icon: <IoLogoFacebook size={24} /> },
        { href: "#", icon: <IoLogoTwitter size={24} /> },
        { href: "#", icon: <IoLogoInstagram size={24} /> },
        { href: "#", icon: <IoLogoLinkedin size={24} /> }
    ];

    return (
        <footer className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {footerWidgets.map(({ title, links }, index) => (
                        <FooterWidget key={index} title={title}>
                            {links.map(({ to, label }, i) => (
                                <li key={i}><Link to={to}>{label}</Link></li>
                            ))}
                        </FooterWidget>
                    ))}

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BIRLIK QAZAQ STUDENTTER BIRLESTIGI</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600"></label>
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Стать волонтёром
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                            Станьте волонтёром, примите участие в наших проектах или сделайте пожертвование.
                            <br className="lg:block hidden" />Вместе мы можем больше!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">
                            <img className='w-28' src={logo} alt="logo" />
                        </span>
                    </Link>
                    <a href='https://www.linkedin.com/in/turan-yahya-gazizuly-b21056261/' className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                        Design and Developed by <div className='font-bold text-gray-700 hover:text-black hover:underline'>Turan-Yahya Gazizuly</div> © 2025 - 2026
                    </a>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {socialLinks.map(({ href, icon }, index) => (
                            <Link key={index} to={href} className="ml-3 text-gray-500">
                                {icon}
                            </Link>
                        ))}
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
