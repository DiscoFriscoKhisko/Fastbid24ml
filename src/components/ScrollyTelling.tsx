import React from 'react';
import uploadImg from 'figma:asset/cb74f19768846761f05e133c80d4531b5552443a.png';
import dataImg from 'figma:asset/1ce7547990e43015caec6fe27207318f93b44ddf.png';
import pricingImg from 'figma:asset/b202a1a7fd0c9ac93f6a2846756456bca77bc810.png';
import proposalImg from 'figma:asset/63ebaa9f678d837a4bddcbebc3229fb369e014c7.png';

export const ScrollyTelling = () => {
    const steps = [
        {
            title: "Upload Plans",
            desc: "Submit your project files through our secure portal. We accept PDF plans and specs of any size.",
            highlight: "STEP 01",
            image: uploadImg,
            tag: "UPLOAD_INTERFACE"
        },
        {
            title: "Quantity Take-off",
            desc: "Expert estimation. Our system extracts every door, frame, and hardware set with precision.",
            highlight: "STEP 02",
            image: dataImg,
            tag: "EXTRACTION_GRID"
        },
        {
            title: "QC Verification",
            desc: "3-layer quality check. Every item is verified against the spec book and building codes.",
            highlight: "STEP 03",
            image: pricingImg,
            tag: "QC_VERIFICATION_LAYER"
        },
        {
            title: "Delivery",
            desc: "Receive your complete package in 24 hours. Excel door schedule, marked plans, and hardware mapping.",
            highlight: "STEP 04",
            image: proposalImg,
            tag: "FINAL_DELIVERABLE_PACKAGE"
        }
    ];

    return (
        <section id="process" className="py-32 max-w-[1400px] mx-auto px-6">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-white">How It Works</h2>
                    <p className="text-stone-400 font-mono text-sm tracking-wide">{'>'} FROM PDF TO ESTIMATE IN 4 STEPS</p>
                </div>
                <div className="text-stone-500 font-light max-w-md text-right hidden md:block">
                    Streamlined workflow designed for speed and accuracy. No more waiting weeks for quotes.
                </div>
            </div>

            <div className="flex flex-col gap-32">
                {steps.map((step, index) => (
                    <div key={index} className="grid lg:grid-cols-2 gap-16 items-center group">
                        {/* Text Side - Alternating Layout */}
                        <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                             <div className="flex items-center gap-4 mb-6">
                                <span className="text-xs font-mono text-blueprint tracking-widest border border-blueprint px-2 py-1 rounded-sm">{step.highlight}</span>
                                <div className="h-px flex-1 bg-stone-800"></div>
                             </div>
                             
                             <h3 className="text-4xl font-bold mb-6 font-serif text-white">{step.title}</h3>
                             <p className="text-stone-400 leading-relaxed font-light text-xl mb-8 max-w-lg">
                                {step.desc}
                            </p>
                            
                            <ul className="space-y-3 font-mono text-xs text-stone-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blueprint rounded-full"></span>
                                    <span>SYSTEM STATUS: ONLINE</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                                    <span>VERIFIED OUTPUT</span>
                                </li>
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                             <div className="w-full aspect-[16/10] bg-stone-950 border border-stone-800 overflow-hidden technical-border relative group-hover:border-blueprint/50 transition-colors shadow-2xl">
                                {/* Window Chrome */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-stone-900 border-b border-stone-800 flex justify-between items-center px-4 z-10">
                                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">{'>'} {step.tag}</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-stone-700"></div>
                                        <div className="w-2 h-2 rounded-full bg-stone-700"></div>
                                        <div className="w-2 h-2 rounded-full bg-stone-700"></div>
                                    </div>
                                </div>
                                
                                {/* Image Container */}
                                <div className="h-full w-full pt-8 bg-stone-900/50 p-6 flex items-center justify-center">
                                    <div className="w-full h-full relative">
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-full h-full object-contain"
                                        />
                                        {/* Scanline Effect */}
                                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Corner Decors */}
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-l border-t border-stone-800 bg-stone-900 z-20"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
