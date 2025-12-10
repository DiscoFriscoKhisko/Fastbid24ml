import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const InteractiveDemo = () => {
    const [inputText, setInputText] = useState("Door 104 needs to be 90 min rated but it's an aluminum frame.");
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const analyzeText = async () => {
        setIsLoading(true);
        setError(null);
        setResponse(null);

        // Simulate network delay
        setTimeout(() => {
            // Mock response
            const mockResponse = {
                door_id: "104",
                rating_req: "90 MIN",
                material_detected: "Aluminum",
                compliance_status: "FAIL",
                audit_note: "Standard aluminum frames typically max out at 45-60 min ratings. A 90 min rating usually requires Hollow Metal (HM) or specific fire-rated aluminum systems. Potential NFPA 80 violation."
            };
            
            setResponse(mockResponse);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <section id="demo" className="bg-slate-900 py-20 border-y border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                        <Sparkles className="text-blueprint" /> Live Intelligence Demo
                    </h2>
                    <p className="text-slate-400 font-mono text-sm">&gt; TEST THE AUDIT ENGINE WITH RAW FIELD NOTES</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-slate-950 p-6 technical-border h-full flex flex-col">
                        <label className="text-xs font-mono text-slate-500 mb-2 block">&gt; INPUT FIELD NOTE</label>
                        <textarea 
                            className="w-full h-40 bg-slate-900 border border-slate-800 p-4 text-slate-300 font-mono text-sm focus:border-blueprint focus:ring-0 outline-none resize-none mb-4"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        ></textarea>
                        <button 
                            onClick={analyzeText}
                            disabled={isLoading}
                            className="mt-auto w-full bg-slate-800 hover:bg-slate-700 text-white py-3 font-mono text-xs flex items-center justify-center gap-2 transition-all border border-slate-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "ANALYZING..." : "RUN_AUDIT_PROTOCOL"} <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="bg-slate-950 p-6 technical-border min-h-[250px] relative">
                        <label className="text-xs font-mono text-slate-500 mb-2 block">&gt; SYSTEM_OUTPUT_JSON</label>
                        {error && <div className="text-red-500 font-mono text-xs p-4 border border-red-900/50 bg-red-900/10">{error}</div>}
                        
                        {response ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                                    <div>
                                        <div className="text-slate-500 text-[10px] font-mono">STATUS</div>
                                        <div className={`font-bold font-mono text-lg ${response.compliance_status === 'FAIL' ? 'text-red-500' : 'text-green-500'}`}>
                                            {response.compliance_status}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-slate-500 text-[10px] font-mono">DETECTED ID</div>
                                        <div className="font-mono text-white">DOOR #{response.door_id}</div>
                                    </div>
                                </div>
                                <div className="space-y-2 font-mono text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">REQUIREMENT:</span>
                                        <span className="text-blueprint">{response.rating_req} FIRE RATING</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">MATERIAL:</span>
                                        <span className="text-white">{response.material_detected}</span>
                                    </div>
                                </div>
                                <div className="bg-slate-900 p-3 text-xs text-slate-300 font-mono border-l-2 border-blueprint">
                                    "{response.audit_note}"
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-40 text-slate-600 font-mono text-xs">
                                WAITING_FOR_INPUT...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
