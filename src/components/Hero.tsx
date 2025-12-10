import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 overflow-hidden bg-stone-950 blueprint-grid">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Text Content - Spans 7 columns */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="inline-flex items-center space-x-3 px-3 py-1 bg-stone-900 border border-stone-700 text-xs font-mono text-blueprint tracking-wider uppercase">
                        <span>:: DIVISION 8 EXPERTS ::</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95] font-serif text-stone-100">
                        Fast, Accurate<br />
                        <span className="text-stone-400 italic font-light ml-2">Takeoffs</span>
                    </h1>
                    
                    <div className="flex flex-col md:flex-row gap-8 md:items-start max-w-2xl">
                        <p className="text-xl text-stone-500 leading-relaxed font-light font-sans flex-1">
                            Delivered in 24 Hours. Division 8 estimation for subcontractors across the US. We turn messy plans into precise numbers.
                        </p>
                        
                        <div className="border-l-2 border-blueprint pl-6 space-y-3 text-sm font-mono text-stone-400 shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="text-blueprint">&gt;</span> 24-HOUR TURNAROUND
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blueprint">&gt;</span> QC-VERIFIED ACCURACY
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blueprint">&gt;</span> INDUSTRY-STANDARD OUTPUT
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <button className="h-auto px-10 py-5 bg-blueprint-dark hover:bg-blue-700 text-white font-bold text-sm transition-all whitespace-nowrap flex items-center justify-center gap-2 font-mono cursor-pointer group shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] border border-blueprint-dark">
                            SUBMIT A PROJECT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                        <button className="h-auto px-10 py-5 bg-transparent hover:bg-stone-900 border border-stone-600 text-stone-300 font-bold text-sm transition-all whitespace-nowrap flex items-center justify-center gap-2 font-mono cursor-pointer hover:border-stone-400">
                            VIEW PRICING
                        </button>
                    </div>

                    <div className="flex items-center gap-8 pt-8 text-xs font-mono text-stone-500 border-t border-stone-800/50 mt-8 max-w-md">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-green-500" />
                            <span>1500+ PROJECTS COMPLETED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-green-500" />
                            <span>TRUSTED BY 20+ TEAMS</span>
                        </div>
                    </div>
                </div>

                {/* Hero Graphic: The Scanner - Spans 5 columns */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                    {/* Main Document Interface */}
                    <div className="relative bg-stone-900 border border-stone-700 shadow-2xl z-10 overflow-hidden technical-border h-[400px]">
                        {/* Header Bar */}
                        <div className="bg-stone-950 border-b border-stone-800 p-2 flex justify-between items-center font-mono text-[10px] text-stone-500">
                            <div>SOURCE: A7.00_DOOR_SCHED.PDF</div>
                            <div>STATUS: PROCESSING</div>
                        </div>

                        {/* Content Area */}
                        <div className="relative h-full bg-stone-900 p-6 font-mono text-xs">
                            {/* Unscanned Content (Simulated Messy PDF) */}
                            <div className="absolute inset-0 p-8 text-stone-600 font-serif opacity-40">
                                <div className="border-b border-stone-700 pb-2 mb-4">DOOR SCHEDULE - LEVEL 1</div>
                                <div className="grid grid-cols-4 gap-y-6">
                                    <div>101A</div><div>HM</div><div>3070</div><div><span className="line-through text-red-500">REV</span> 45m</div>
                                    <div>102B</div><div>WD</div><div>3070</div><div>--</div>
                                    <div>103</div><div>ALUM</div><div>6070</div><div>--</div>
                                    <div>104A</div><div>HM</div><div>3070</div><div>90 MIN</div>
                                    <div>105</div><div>WD</div><div>3070</div><div>20 MIN</div>
                                </div>
                            </div>

                            {/* The Scanning Beam */}
                            <div className="absolute left-0 right-0 h-0.5 bg-blueprint shadow-[0_0_15px_rgba(59,130,246,1)] z-20 animate-scan"></div>

                            {/* Scanned Content (Clean Data) */}
                            <div className="absolute inset-0 bg-stone-900 p-8 animate-reveal">
                                <div className="font-mono text-xs text-green-500 mb-4">&gt; DATA VERIFIED_</div>
                                <div className="grid grid-cols-4 gap-y-4 text-stone-300 border-t border-stone-700 pt-4">
                                    <div className="text-blueprint">DOOR #</div><div className="text-blueprint">TYPE</div><div className="text-blueprint">SIZE</div><div className="text-blueprint">RATING</div>
                                    
                                    <div>101A</div><div>HM_SGL</div><div>3'-0" x 7'-0"</div><div className="bg-stone-800 inline px-1">45 MIN</div>
                                    <div>102B</div><div>WD_SGL</div><div>3'-0" x 7'-0"</div><div>NON-RATED</div>
                                    <div>103</div><div>AL_PAIR</div><div>6'-0" x 7'-0"</div><div>NON-RATED</div>
                                    <div className="text-white">104A</div><div>HM_SGL</div><div>3'-0" x 7'-0"</div><div className="text-white border border-green-500/50 px-1">90 MIN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-stone-700 opacity-50"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-stone-700 opacity-50"></div>
                </div>
            </div>
        </div>
    </section>
);
