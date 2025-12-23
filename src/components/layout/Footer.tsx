import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-slate-50 py-8 border-t border-slate-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="text-slate-500 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Optimized Entry. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <Link to="/terms" onClick={handleLinkClick} className="text-slate-400 hover:text-slate-600 text-xs transition-colors">
                        Terms of Service
                    </Link>
                    <Link to="/privacy" onClick={handleLinkClick} className="text-slate-400 hover:text-slate-600 text-xs transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
