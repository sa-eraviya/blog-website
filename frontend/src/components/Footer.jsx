import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-8 border-t border-white/5 mt-20 text-center bg-[#0a0a0c]">
            <div className="max-w-4xl mx-auto">
                <p className="text-slate-400 font-semibold tracking-wide flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} <span className="gradient-text font-bold">ModernBlog</span>
                </p>
                <p className="text-slate-500 text-sm mt-3 font-medium">
                    A premium experience built with <span className="text-indigo-400">React</span> & <span className="text-purple-400">FastAPI</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
