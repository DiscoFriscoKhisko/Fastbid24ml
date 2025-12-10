import React from 'react';

export const Nav = () => (
    <nav className="fixed top-0 w-full z-50 border-b border-stone-800 bg-stone-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blueprint flex items-center justify-center font-bold text-stone-950 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-stone-950"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-stone-950"></div>
                    <span className="font-black font-serif text-xl z-10">F</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-tight leading-none text-white font-serif">FASTBID24</span>
                    <span className="text-[10px] text-stone-500 font-mono tracking-widest">DIV.08 EXPERTS</span>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-xs font-mono text-stone-400">
                <a href="#services" className="hover:text-white transition-colors uppercase tracking-wider">Services</a>
                <a href="#why-us" className="hover:text-white transition-colors uppercase tracking-wider">Why Us</a>
                <a href="#process" className="hover:text-white transition-colors uppercase tracking-wider">Process</a>
                <a href="#pricing" className="hover:text-white transition-colors uppercase tracking-wider">Pricing</a>
            </div>
            <div className="flex items-center space-x-6">
                <span className="hidden md:inline-block text-xs font-mono text-stone-300">(672) 337-9455</span>
                <button className="bg-blueprint-dark hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold font-mono transition-all uppercase tracking-wide cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                    Get Estimate
                </button>
            </div>
        </div>
    </nav>
);
