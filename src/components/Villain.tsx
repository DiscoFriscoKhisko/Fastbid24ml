import React from 'react';
import { ShieldCheck, Clock, Users, Database, Layers, CheckSquare } from 'lucide-react';

export const Villain = () => (
    <section id="why-us" className="bg-stone-900 py-32 border-y border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
                
                {/* Sticky Header Section */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-32">
                        <div className="mb-8">
                            <div className="text-blueprint font-mono text-xs mb-4 tracking-widest uppercase">:: Why Choose Us ::</div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tighter text-white leading-none">
                                Precision<br/>
                                Meets<br/>
                                <span className="text-stone-500 italic">Velocity</span>
                            </h2>
                            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
                                We've rebuilt the estimation process from the ground up, combining human expertise with industrial-grade workflows to deliver bids faster than anyone else.
                            </p>
                        </div>
                        <div className="hidden lg:block h-px w-24 bg-blueprint mb-8"></div>
                        <div className="hidden lg:flex flex-col gap-4 font-mono text-xs text-stone-500">
                            <div>&gt; EST. 2023</div>
                            <div>&gt; BASED IN USA</div>
                            <div>&gt; 99.8% ACCURACY</div>
                        </div>
                    </div>
                </div>

                {/* Grid Content Section */}
                <div className="lg:col-span-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <Users size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">Division 8 Specialists</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">Expert estimators focused exclusively on doors, frames, and hardware. We know the code.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <Layers size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">3-Layer QC System</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">Triple verification process ensures 99.8% accuracy rate on every project we deliver.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <Clock size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">24-Hour Turnaround</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">Fast, consistent delivery without compromising quality. Get your bid out on time.</p>
                        </div>

                         {/* Feature 4 */}
                         <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">Reliable Communication</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">Dedicated project managers keep you updated throughout the entire process.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <Database size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">Scalable Solutions</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">From small renovations to major commercial projects, we handle it all.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-stone-950 border border-stone-800 p-8 technical-border hover:border-blueprint transition-colors group">
                            <div className="w-12 h-12 bg-stone-900 flex items-center justify-center mb-6 text-blueprint group-hover:scale-110 transition-transform duration-300">
                                <CheckSquare size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">Industry Standards</h3>
                            <p className="text-base text-stone-400 font-light leading-relaxed">Compliant formatting that integrates seamlessly with your existing workflow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
