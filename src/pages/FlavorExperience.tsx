import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Info } from 'lucide-react';

export function FlavorExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 0.1]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-drpepper-black min-h-screen relative"
    >
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
        <motion.img 
          style={{ scale: backgroundScale, opacity: backgroundOpacity }}
          src="https://images.unsplash.com/photo-1556742521-9713bf2728be?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-drpepper-black/80 via-drpepper-black to-drpepper-black" />
      </div>

      <div className="relative z-10 pt-40 pb-40 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-40">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-drpepper-red/30 text-drpepper-red text-xs font-black uppercase tracking-[0.4em] mb-8"
          >
            <Sparkles size={14} /> The Secret Sauce
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black font-display uppercase tracking-tighter leading-none mb-12">
            23 <br /> <span className="text-drpepper-red">Flavors</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
            A secret guarded since 1885. A recipe known only to a few. A taste that stands alone in the world.
          </p>
        </div>

        {/* Scroll Content Sections */}
        {[
          {
            title: "The Mystery",
            content: "Charles Alderton, a pharmacist in Waco, Texas, spent months experimenting with different syrups to create a flavor that didn't just taste like one fruit—but everything at once.",
            icon: "01"
          },
          {
            title: "The Complexity",
            content: "The 23 flavors are a delicate balance of spices, fruits, and unique essences. Some say it's vanilla, cherry, licorice, and almond. Others taste clove and ginger. The truth? It's better as a mystery.",
            icon: "23"
          },
          {
            title: "The Legacy",
            content: "Today, we keep that same spirit of bold experimentation alive. Every drop of Dr Pepper is bottled with the same uncompromising standards set over a century ago.",
            icon: "85"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-12 items-center mb-60 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <span className="text-8xl font-black text-white/5 font-display mb-4 block leading-none">{item.icon}</span>
              <h2 className="text-4xl font-black font-display uppercase mb-6">{item.title}</h2>
              <p className="text-lg text-white/50 leading-relaxed">{item.content}</p>
            </div>
            <div className="flex-1 w-full bg-drpepper-red/10 rounded-[3rem] aspect-video border border-white/5 flex items-center justify-center p-12">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-dashed border-drpepper-red rounded-full flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-drpepper-red rounded-full blur-xl opacity-50" />
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div className="text-center py-20 bg-drpepper-red/10 rounded-[4rem] border border-white/5">
          <h2 className="text-4xl font-black font-display uppercase mb-4 px-6">Ready to Find Yours?</h2>
          <p className="text-white/50 mb-10 text-sm tracking-widest uppercase px-6">The 23 flavors are waiting for you.</p>
          <button className="bg-drpepper-red text-white px-12 py-6 rounded-full font-black uppercase tracking-widest">
            Find Near You
          </button>
        </div>
      </div>
    </motion.div>
  );
}
