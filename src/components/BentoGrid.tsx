import React from 'react';
import { FileText, Map, Layers, ClipboardCheck, FileCheck } from 'lucide-react';

export const BentoGrid = () => (
    <section id="deliverables" className="bg-stone-900 py-32 border-y border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-2 font-serif text-white">What We Deliver</h2>
                <p className="text-stone-400 font-mono text-xs tracking-widest">&gt; STANDARD DELIVERABLES PACKAGE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto min-h-[600px]">
                
                {/* Large Box: Door Schedule */}
                <div className="md:col-span-2 md:row-span-2 bg-stone-950 border border-stone-800 p-10 flex flex-col relative overflow-hidden group hover:border-blueprint transition-colors technical-border">
                    <div className="absolute top-4 right-4 text-xs font-mono text-stone-600 group-hover:text-blueprint transition-colors">01</div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="text-blueprint font-mono text-xs mb-4 tracking-widest">CORE OUTPUT</div>
                            <h3 className="text-4xl font-bold mb-6 font-serif text-white">Door Schedule<br/>(Excel + PDF)</h3>
                            <p className="text-stone-400 mb-8 text-lg font-light leading-relaxed max-w-md">
                                A complete, itemized door schedule formatted to your standards. Fully editable Excel file plus a clean PDF version for your records.
                            </p>
                        </div>
                        <div className="bg-stone-900 p-6 border border-stone-800 font-mono text-xs rounded-sm">
                            <div className="text-green-500 font-bold mb-2 flex items-center gap-2 tracking-wider">
                                <FileCheck size={14} /> VERIFIED ✓
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-2">
                                <div>
                                    <div className="text-stone-500 text-[10px] mb-1">TOTAL DOORS</div>
                                    <div className="text-2xl font-bold text-white">142</div>
                                </div>
                                <div>
                                    <div className="text-stone-500 text-[10px] mb-1">TOTAL VALUE</div>
                                    <div className="text-2xl font-bold text-white">$113,600</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medium Box: Hardware Sets */}
                <div className="md:col-span-2 bg-stone-950 border border-stone-800 p-10 hover:border-blueprint transition-colors flex flex-col justify-between technical-border group">
                    <div className="absolute top-4 right-4 text-xs font-mono text-stone-600 group-hover:text-blueprint transition-colors">02</div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                             <Layers size={20} className="text-blueprint" />
                             <h3 className="text-2xl font-bold font-serif text-white">Hardware Set Mapping</h3>
                        </div>
                        <p className="text-stone-400 text-base font-light leading-relaxed max-w-sm">
                            Detailed hardware sets mapped to every opening. We handle the complexity of complex sets.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-8">
                        <span className="px-3 py-1 bg-stone-900 border border-stone-700 text-[10px] text-stone-300 font-mono">SET 01</span>
                        <span className="px-3 py-1 bg-stone-900 border border-stone-700 text-[10px] text-stone-300 font-mono">SET 02.A</span>
                         <span className="px-3 py-1 bg-stone-900 border border-stone-700 text-[10px] text-stone-300 font-mono">SET 04</span>
                    </div>
                </div>

                {/* Small Box: Marked Plans */}
                <div className="md:col-span-1 bg-stone-950 border border-stone-800 p-8 flex flex-col justify-center hover:border-blueprint transition-colors technical-border group relative">
                    <div className="absolute top-4 right-4 text-xs font-mono text-stone-600 group-hover:text-blueprint transition-colors">03</div>
                    <div className="mb-4 text-blueprint group-hover:scale-110 transition-transform"><Map size={24} strokeWidth={1.5} /></div>
                    <h3 className="font-bold mb-2 text-lg text-stone-200 font-serif">Marked Plans</h3>
                    <p className="text-xs text-stone-500 font-mono leading-relaxed">
                        Visual verification of every opening on the drawings.
                    </p>
                </div>

                 {/* Small Box: QC */}
                 <div className="md:col-span-1 bg-stone-950 border border-stone-800 p-8 flex flex-col justify-center hover:border-blueprint transition-colors technical-border group relative">
                    <div className="absolute top-4 right-4 text-xs font-mono text-stone-600 group-hover:text-blueprint transition-colors">04</div>
                    <div className="mb-4 text-blueprint group-hover:scale-110 transition-transform"><ClipboardCheck size={24} strokeWidth={1.5} /></div>
                    <h3 className="font-bold mb-2 text-lg text-stone-200 font-serif">QC Verified</h3>
                    <p className="text-xs text-stone-500 font-mono leading-relaxed">
                        3-layer verification process included.
                    </p>
                </div>

            </div>
        </div>
    </section>
);
