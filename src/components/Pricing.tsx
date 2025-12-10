import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
    const tiers = [
        {
            name: "Small Project",
            price: "$395",
            desc: "Up to 40 openings",
            features: [
                "Door schedule",
                "Marked plans",
                "Summary sheet",
                "QC check"
            ]
        },
        {
            name: "Medium Project",
            price: "$695",
            desc: "Up to 120 openings",
            popular: true,
            features: [
                "Full takeoff",
                "Hardware mapping",
                "File clean-up",
                "3-layer QC",
                "Addenda handled"
            ]
        },
        {
            name: "Large Project",
            price: "$1,095",
            desc: "Up to 250 openings",
            features: [
                "Full DFH package",
                "Markups + hardware mapping",
                "QC lead review",
                "Priority delivery"
            ]
        },
        {
            name: "XL Project",
            price: "$1,895",
            desc: "More than 250 openings",
            features: [
                "Dedicated estimator",
                "Complex hardware sets",
                "Multiple addenda",
                "Priority support",
                "Extended QC"
            ]
        }
    ];

    return (
        <section id="pricing" className="bg-stone-950 py-32 border-t border-stone-800 relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-white">Transparent Pricing</h2>
                    <p className="text-stone-400 font-light text-xl">Simple, straightforward pricing based on project size</p>
                </div>

                {/* First Project Promo */}
                <div className="max-w-4xl mx-auto mb-20">
                     <div className="bg-gradient-to-r from-stone-900 to-stone-950 border border-blueprint/50 p-8 relative overflow-hidden group technical-border">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blueprint"></div>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
                            <div>
                                <div className="text-blueprint font-bold text-xl mb-2 flex items-center justify-center md:justify-start gap-2 font-serif">
                                    <span className="text-2xl">⭐</span> First Project (New Clients Only)
                                </div>
                                <p className="text-stone-300 font-light text-base">Flat rate for any project under 120 openings. Experience the difference.</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-bold text-white font-serif">$295</span>
                                <button className="bg-blueprint-dark hover:bg-blue-700 text-white px-8 py-3 text-sm font-bold transition-all whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                                    Get Started
                                </button>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`relative bg-stone-950 p-10 flex flex-col hover:border-blueprint transition-colors technical-border group ${tier.popular ? 'border-blueprint lg:scale-105 lg:z-10 shadow-2xl shadow-black/50' : ''}`}>
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blueprint text-stone-900 text-[10px] font-bold px-4 py-1.5 uppercase tracking-wider shadow-sm whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-stone-200 font-bold mb-3 font-serif text-2xl">{tier.name}</h3>
                                <div className="text-4xl font-bold text-white mb-3 font-serif tracking-tighter">{tier.price}</div>
                                <p className="text-stone-500 text-xs font-mono uppercase tracking-wide">{tier.desc}</p>
                            </div>
                            <ul className="space-y-5 mb-10 flex-1">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-400 font-light">
                                        <Check size={16} className="text-blueprint mt-0.5 shrink-0" strokeWidth={2} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 text-sm font-bold transition-all border ${tier.popular ? 'bg-blueprint-dark border-blueprint-dark text-white hover:bg-blue-700' : 'bg-transparent border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white'} shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] group-hover:shadow-none group-hover:translate-x-[1px] group-hover:translate-y-[1px]`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Subscription */}
                <div className="mt-20 bg-stone-950 p-10 md:p-16 relative overflow-hidden technical-border">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] z-0"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blueprint/5 rounded-bl-full z-0"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div>
                            <div className="text-blueprint font-mono text-xs mb-3 tracking-widest uppercase">BEST VALUE FOR TEAMS</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Monthly Subscription</h3>
                            <p className="text-stone-400 mb-0 max-w-xl text-lg font-light leading-relaxed">
                                Up to 12 projects/month • Effective cost per project: $246.<br/>
                                Perfect for contractors with consistent volume. Additional projects: $245 each.
                            </p>
                        </div>
                        <div className="text-center md:text-right shrink-0">
                            <div className="text-4xl font-bold text-white mb-3 font-serif">$2,950<span className="text-xl text-stone-500 font-normal font-sans">/mo</span></div>
                            <button className="bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 px-10 py-4 text-sm font-bold transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <p className="text-stone-500 italic font-serif text-lg">"If you don't like the first takeoff, you don't pay."</p>
                </div>
            </div>
        </section>
    );
};
