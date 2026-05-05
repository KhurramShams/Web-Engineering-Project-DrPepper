import { motion } from 'motion/react';
import { History, Target, Users } from 'lucide-react';

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-32 bg-drpepper-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-9xl font-black font-display uppercase tracking-tighter leading-none mb-12">
              The <span className="text-drpepper-red">Legacy</span> <br /> of 1885
            </h1>
            <p className="text-2xl text-white/60 leading-relaxed">
              Dr Pepper is the oldest major soft drink in the United States. Born in a Waco pharmacy, it has grown from a local secret to a global phenomenon.
            </p>
          </div>
        </header>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            {
              icon: History,
              title: "Ancient Roots",
              content: "Created by pharmacist Charles Alderton at Morrison's Old Corner Drug Store in Waco, Texas. He wanted a drink that smelled like the unique aroma of the pharmacy itself."
            },
            {
              icon: Target,
              title: "One of a Kind",
              content: "Our mission has never changed: to provide a flavor experience that can't be found anywhere else. 23 flavors, one signature taste."
            },
            {
              icon: Users,
              title: "The Pepper Pack",
              content: "From the early '10-2-4' days to today's cult following, our fans are as unique as our drink. We don't just make soda; we fuel a community."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 group"
            >
              <div className="w-16 h-16 bg-drpepper-red rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Width Image / Stat Section */}
        <div className="relative rounded-[4rem] overflow-hidden aspect-video md:aspect-[21/9] mb-40">
          <img 
            src="https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=2000" 
            alt="Dr Pepper History"
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-drpepper-red/20 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-8">
              Still Authentic. <br /> Still <span className="text-drpepper-red">Waco.</span>
            </h2>
            <div className="flex gap-12 flex-wrap justify-center font-bold uppercase tracking-[0.4em] text-xs">
              <div className="flex flex-col gap-2">
                <span className="text-4xl text-drpepper-red">1885</span>
                <span>Born</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl text-drpepper-red">23</span>
                <span>Flavors</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl text-drpepper-red">135Y+</span>
                <span>Legacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Culture CTA */}
        <div className="bg-drpepper-red p-12 md:p-24 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase leading-none mb-6">
              Join the <br /> <span className="text-white/60">Community</span>
            </h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Follow us for real-time drops and events.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-drpepper-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">Instagram</button>
            <button className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:border-white transition-all">YouTube</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
