import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { to: '/pricing', label: 'Pricing' },
            { to: '/hear-it', label: 'Hear the AI' },
            { to: '/get-a-demo', label: 'Get a Demo' },
        ],
        company: [
            { to: '/about', label: 'About' },
            { to: '/testimonials', label: 'Testimonials' },
            { to: '/contact', label: 'Contact' },
        ],
        legal: [
            { to: '/terms', label: 'Terms' },
            { to: '/privacy', label: 'Privacy' },
        ],
    };

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 mb-6">
                            <img
                                src="/img/logo-mark.png"
                                alt="Optimized Entry"
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <img
                                src="/img/logo-text.png"
                                alt="Optimized Entry"
                                className="h-6 w-auto brightness-0 invert opacity-80"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                            AI-powered reception that turns every call into an opportunity.
                        </p>
                        <a 
                            href="mailto:hello@optimizedentry.com"
                            className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            hello@optimizedentry.com
                        </a>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {currentYear} Optimized Entry. All rights reserved.
                    </p>
                    
                    <a 
                        href="https://optimizedentryportal.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                        Client Portal
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
