/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Camera, 
  Download, 
  ExternalLink, 
  Sparkles, 
  AlertTriangle,
  ChevronRight,
  Monitor,
  Brain,
  Facebook,
  ShoppingBag,
  Image as ImageIcon,
  Video,
  Lock
} from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    version: "V3 [Latest]",
    title: "Affiliate Marketing x UGC",
    description: "The most accurate, organized, and easy-to-use AI tool that combines affiliate marketing with high-converting UGC. It fully generates complete photorealistic images and videos — ready to use instantly.",
    features: ["Simple • Accurate", "Built for Real Results", "Full Photorealism"],
    link: "https://docs.google.com/document/d/1lboADTMibRFbtuZiuNjWcXYPpwaO8aRl2vrxRmNJC64/edit?usp=sharing",
    accent: "from-blue-500 to-cyan-500",
    badge: "LATEST",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    version: "V2",
    title: "No-Sheet UGC Workflow",
    description: "No character sheet needed — just upload your product image, fill in your details, and let your 7-scene UGC video do the selling.",
    features: ["Upload • Fill • Post", "7-Scene Sequencing", "Instant Logic"],
    link: "https://docs.google.com/document/d/1ec5_EmjdGQdGpHK3WmAYzEe2YPw28wjKnRSOq8XlHtY/edit?usp=sharing",
    accent: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    version: "V1.1",
    title: "Refined 3-Scene Suite",
    description: "Improved and polished version after V1. Features an added video generator with 3 different scenes for better performance.",
    features: ["Polished Logic", "3-Scene Precision", "Stable Output"],
    link: "https://docs.google.com/document/d/1AcktBK-7rzjW4L-pVMKXmMkXtjDm0Hm_7WLuJktA_Vg/edit?usp=sharing",
    accent: "from-teal-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    version: "V1",
    title: "The OG Foundation",
    description: "This is where it all started. The foundation that built everything you see now. Simple, linear, and effective.",
    features: ["Foundation Deck", "OG Logic", "Heritage Mode"],
    link: "https://docs.google.com/document/d/1gq-LSZisAtOCQTcbZmvs32FHfeWZ8SK3f7GwPVvMYFQ/edit?usp=sharing",
    accent: "from-slate-500 to-slate-700",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop"
  }
];

const resourceBundles = [
  { title: "Presets", icon: Zap },
  { title: "Backgrounds", icon: Monitor },
  { title: "POV Collection", icon: Video },
  { title: "Prompts", icon: ImageIcon }
];

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#030303] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.8)_100%)] pointer-events-none" />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/[0.05] bg-black/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg border border-white/20 transition-transform group-hover:scale-105">
                <Brain className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tighter text-2xl leading-none text-white">PONS AI</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-blue-400 uppercase font-black">Node_Network_Active</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://ganknow.com/ponsai" 
              target="_blank"
              className="bg-emerald-500 text-black px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10"
            >
              ASSET EXCHANGE
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Badass Hero Section */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase italic">
                Welcome to Your <br/>
                <span className="gradient-text">Private Hub</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
                Thank you for purchasing the Affiliate Marketing x UGC Bundle!<br/>
                <span className="text-white">You now have lifetime access to all workflow versions.</span>
              </p>
              
              {/* Feature Badge Grid */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-24 font-mono text-[10px] text-blue-400/60 uppercase tracking-[0.3em]">
                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"><Zap className="w-3 h-3" /> SIMPLE</div>
                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"><Target className="w-3 h-3 text-emerald-400" /> ACCURATE</div>
                <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"><Sparkles className="w-3 h-3 text-purple-400" /> RESULTS-DRIVEN</div>
              </div>

              {/* Main Asset Exchange Highlight */}
              <div className="max-w-5xl mx-auto mb-32">
                <a 
                  href="https://ganknow.com/ponsai"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex flex-col md:flex-row items-center gap-10 bg-emerald-500/[0.03] border-2 border-emerald-500/20 p-10 md:p-14 rounded-[3rem] text-left hover:border-emerald-500/50 transition-all duration-700 shadow-2xl"
                >
                  <div className="absolute top-0 right-0 px-8 py-3 bg-emerald-500 text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-bl-[2rem] glow-emerald animate-pulse">
                    Primary_Storefront
                  </div>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-500 text-black rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl shadow-emerald-500/20">
                    <ShoppingBag className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">Asset Exchange</h2>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                      Purchase verified PONS AI modules, custom UGC training sets, and premium neural assets directly via Gank.
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                      Initialize_Store_Protocol <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Workflow Nodes */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {products.map((p, idx) => (
                <motion.a
                  key={idx}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative glass-card rounded-[3rem] overflow-hidden flex flex-col hover:border-blue-500/40 transition-all duration-700"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
                    <div className="absolute top-8 left-8">
                      {p.version.includes('V3') ? (
                        <div className="bg-emerald-500 px-5 py-2 rounded-full text-[10px] font-black text-black uppercase tracking-widest border border-emerald-400 glow-emerald animate-pulse">
                          NODE_{p.version}
                        </div>
                      ) : (
                        <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
                          NODE_{p.version}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-12 -mt-16 relative z-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-base font-medium italic opacity-80 leading-relaxed mb-10 flex-grow">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {p.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-black text-blue-500 uppercase tracking-widest">Get your access here</span>
                      <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:rotate-12 transition-all" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Restoration Hub */}
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8">Mastered Photo Restoration</h2>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
                    Simple: Upload → Generate → Nice results. Clean, realistic, and nostalgic restored photos with surgical accuracy.
                  </p>
                  <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" /> Execute via Magnific Spaces
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {[
                      "Precise damage repair",
                      "Natural skin tones and faces",
                      "Original faces preserved",
                      "Detailed recovery",
                      "4K upscale",
                      "Vintage feel preserved"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 group-hover/item:bg-blue-500/40 transition-colors">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="https://docs.google.com/document/d/1W4LPWb2Ahl7EkI6zStvdrQx7V-UE_XTOaD0eHhsD4RE/edit?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center gap-6 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl active:scale-95"
                  >
                    Get your access here <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 px-5 py-2 glass-card rounded-full text-[10px] font-black text-blue-400">RESTORE_ACTIVE_NODE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* External Distribution Nodes */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* FACEBOOK - SOLO */}
              <a 
                href="https://www.facebook.com/bussiness.ponsAI" 
                target="_blank"
                className="group relative glass-card p-10 rounded-[3rem] flex flex-col gap-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Facebook className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-3">Solo Workspace</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Follow my personal solo node for workflow progress, system logs, and direct strategy drops on Facebook.</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                  Connect_Link <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>

              {/* CLOUD DRIVE */}
              <a 
                href="https://drive.google.com/drive/folders/1xPf4NxKu2iCb7EnSaFbKdC3DwhQzNU4J?usp=sharing" 
                target="_blank"
                className="group relative glass-card p-10 rounded-[3rem] flex flex-col gap-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Download className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-3">Cloud Directory</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Access unified PRESETS, BACKGROUND collections, and POV production assets instantly.</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                  Initialize_Download <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>

              {/* MAGNIFIC */}
              <a 
                href="https://referral.magnific.com/mzRdg6F" 
                target="_blank"
                className="group relative glass-card p-10 rounded-[3rem] flex flex-col gap-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 border-2 border-purple-500/10"
              >
                <div className="absolute top-0 right-0 px-5 py-2 bg-purple-600 text-[9px] font-black uppercase tracking-widest text-white rounded-bl-2xl">
                  Referral_Node
                </div>
                <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-3">Magnific Uplink</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Required referral uplink for high-fidelity execution. <span className="text-purple-400">All workflow nodes must be deployed inside Magnific Spaces for optimal results.</span></p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-purple-400 uppercase tracking-widest">
                  Initialize_Spaces <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Security Warning */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-600/5 border-2 border-red-500/20 rounded-[3rem] p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-40" />
              <div className="inline-flex items-center gap-4 text-red-500 mb-8">
                <AlertTriangle className="w-12 h-12" />
                <h4 className="text-4xl font-black uppercase italic tracking-tighter">Access Warning</h4>
              </div>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                Remember that sharing your access to this workflow is strictly prohibited. The workflow creator has the ability to revoke access at any time — so if you share it, it becomes useless. <br/><br/>
                <span className="text-red-500 font-black uppercase tracking-widest">You will lose access to all workflows and get permanently banned.</span>
              </p>
              <div className="flex justify-center gap-4 font-mono text-[9px] text-red-500/40 uppercase tracking-[0.3em]">
                <span>TRACE_ACTIVE</span>
                <span>UID_ENFORCE</span>
                <span>GLOBAL_BAN_PROTO</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tighter text-2xl text-white uppercase italic">PONS AI</span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-slate-600 uppercase">Universal_Access_Module</span>
            </div>
          </div>
          <p className="text-slate-700 text-[10px] font-mono uppercase tracking-widest">© 2026 PONS AI GLOBAL NETWORKS // PRIVATE ECOSYSTEM</p>
          <div className="flex items-center gap-6">
            <Lock className="w-4 h-4 text-slate-800" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Missing component for UI grid
function Target({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
