import { motion } from 'motion/react';
import { PRODUCTS } from '../constants/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, Droplets, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Quiz } from '../components/Quiz';

export function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-stretch border-b border-white/10 overflow-hidden">
        {/* Left Sidebar Detail */}
        <div className="hidden lg:flex w-24 border-r border-white/10 flex-col items-center justify-center relative">
          <span className="vertical-text text-[10px] font-black uppercase tracking-[0.8em] opacity-30 whitespace-nowrap">
            ESTABLISHED 1885 • WACO, TEXAS
          </span>
        </div>

        {/* Main Content Area */}
        <div className="grow flex flex-col relative overflow-hidden">
          {/* Top Background Element */}
          <div className="absolute top-0 right-0 p-12 lg:p-24 flex flex-col items-end opacity-5 pointer-events-none select-none">
            <span className="font-display text-[20rem] lg:text-[30rem] leading-none">23</span>
            <span className="text-xs font-black tracking-[1em] -mt-10 mr-4">FLAVORS OF INTRIGUE</span>
          </div>

          <div className="grow flex items-center px-8 lg:px-20 py-32 z-10">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-[15vw] lg:text-[10rem] font-display uppercase tracking-tighter leading-[0.85] mb-12">
                ONE OF A <br /> <span className="text-dp-maroon">KIND.</span>
              </h1>
              <p className="text-lg lg:text-xl text-dp-cream/60 max-w-lg leading-relaxed mb-12 font-light">
                Born in a drugstore. Crafted with 23 unique flavors. Not a cola, not a root beer—completely original. Are you brave enough for the blend?
              </p>
              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/flavors"
                  className="bg-dp-cream text-dp-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:scale-105"
                >
                  Explore The Mix
                </Link>
                <Link 
                  to="/products"
                  className="border border-white/30 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black"
                >
                  Find Your Flavor
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating Product Indicator (Editorial Overlay) */}
          <div className="hidden xl:block absolute right-24 bottom-24 glass-card p-10 rounded-3xl w-80">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center p-4">
                <div className="w-1.5 h-full bg-dp-maroon rounded-full" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-dp-maroon mb-1">Trending</p>
                <h3 className="text-lg leading-tight">Dr Pepper Classic</h3>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
              <span>Original Recipe</span>
              <Link to="/products" className="text-dp-maroon border-b border-dp-maroon pb-0.5">Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid-based Value Prop Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 bg-dp-black border-b border-white/10">
        {[
          { label: "01", title: "THE RECIPE", desc: "A guarded blend of 23 signature aromatic essences." },
          { label: "02", title: "THE LEGACY", desc: "Oldest major soft drink in the United States." },
          { label: "03", title: "THE TASTE", desc: "Complex, bold, and entirely without comparison." },
          { label: "04", title: "THE PACK", desc: "A collective of the unique and the uncompromising." },
        ].map((item, idx) => (
          <div key={idx} className="p-12 border-white/10 md:border-r border-b md:border-b-0 last:border-r-0">
            <span className="text-dp-maroon font-display text-4xl block mb-6">{item.label}</span>
            <h4 className="text-xl mb-4 tracking-tight">{item.title}</h4>
            <p className="text-xs text-dp-cream/40 leading-relaxed uppercase tracking-widest">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Product Showcase */}
      <section className="py-32 bg-drpepper-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black font-display uppercase tracking-tight mb-4">
                The <span className="text-drpepper-red">Family</span> Lineup
              </h2>
              <p className="text-white/50">From the original classic to the boldest new creations, there's a Dr Pepper for every personality.</p>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              View All Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Personality Quiz Teaser */}
      <section id="quiz-section" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-drpepper-dark/40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8 inline-flex p-4 rounded-full bg-drpepper-red/20 text-drpepper-red font-black uppercase text-xs tracking-widest">
              Interactive Experience
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-8">
              What's Your <br /> <span className="text-drpepper-red">Flavor Persona?</span>
            </h2>
          </div>
          
          {!showQuiz ? (
            <div className="text-center">
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Are you a Bold Original or a Smooth Sensation? Take our quick quiz to find your perfect match.
              </p>
              <button 
                onClick={() => setShowQuiz(true)}
                className="bg-white text-drpepper-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Start the Quiz
              </button>
            </div>
          ) : (
            <Quiz />
          )}
        </div>
      </section>

      {/* CTA Block / Email Signup */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-drpepper-red/10 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-12 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-drpepper-red blur-[120px] opacity-20" />
            
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black font-display uppercase leading-none mb-6">
                Be the first to <br /> taste the <span className="text-drpepper-red">unseen</span>
              </h2>
              <p className="text-white/60 mb-0">Join the Pepper Pack for exclusive drops, giveaways, and flavor secrets.</p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-drpepper-red transition-colors"
                />
                <button className="w-full bg-drpepper-red text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-drpepper-red/90 transition-all">
                  Join the Pack
                </button>
              </div>
              <p className="mt-4 text-[10px] text-white/30 text-center md:text-left uppercase tracking-widest">
                By signing up, you agree to our privacy policy and terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
