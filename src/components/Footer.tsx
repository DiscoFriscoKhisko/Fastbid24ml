import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-stone-950 border-t border-stone-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight font-serif">Ready to Get Started?</h2>
                    <p className="text-base text-stone-400 mb-8 max-w-md font-light">
                        Upload plans and specs — receive your DFH takeoff within 24 hours. Join 20+ construction teams getting lightning-fast estimates.
                    </p>
                    <button className="bg-blueprint-dark hover:bg-blue-700 text-white px-8 py-4 font-bold text-sm transition-all whitespace-nowrap font-mono cursor-pointer flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        START SUBMISSION
                    </button>
                    <div className="flex gap-6 mt-6 text-[10px] font-mono text-stone-500">
                        <span>SECURE UPLOAD</span>
                        <span>24HR GUARANTEED</span>
                        <span>5-STAR RATED</span>
                    </div>
                </div>
                
                <div className="bg-stone-900 border border-stone-800 p-8 technical-border">
                    <h3 className="text-white font-bold mb-6 font-serif text-xl">Contact Us</h3>
                    <div className="space-y-4 font-mono text-sm text-stone-400">
                        <div className="flex items-center gap-3">
                            <Mail size={16} className="text-blueprint" />
                            <a href="mailto:harsha@fastbid24.com" className="hover:text-white transition-colors">harsha@fastbid24.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={16} className="text-blueprint" />
                            <a href="mailto:estimates@fastbid24.com" className="hover:text-white transition-colors">estimates@fastbid24.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={16} className="text-blueprint" />
                            <a href="tel:+16723379455" className="hover:text-white transition-colors">+1 (672) 337-9455</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 font-mono border-t border-stone-900 pt-8">
                <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                    <span className="font-bold text-stone-500">FASTBID24</span>
                    <span>DIVISION 8 ESTIMATION</span>
                </div>
                <div>&copy; 2025 FastBid24. All rights reserved.</div>
            </div>
        </div>
    </footer>
);
