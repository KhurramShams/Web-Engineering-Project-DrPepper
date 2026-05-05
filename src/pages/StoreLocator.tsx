import { motion } from 'motion/react';
import { MapPin, Navigation, Search, Store } from 'lucide-react';
import { useState } from 'react';

export function StoreLocator() {
  const [zip, setZip] = useState('');

  const mockStores = [
    { name: "Target Store", address: "123 Beverage Blvd, Flavor City, TX", distance: "0.8 miles", type: "Retail" },
    { name: "Walgreens Pharmacy", address: "555 Red Can Path, Sparkle Springs, TX", distance: "1.2 miles", type: "Pharmacy" },
    { name: "Waco Corner Market", address: "885 Alderton Ave, Waco, TX", distance: "2.4 miles", type: "Local" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen bg-drpepper-black"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
        {/* Left: Map UI Mock */}
        <div className="h-[600px] bg-drpepper-dark relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526778545894-6297aa496122?auto=format&fit=crop&q=80&w=1200" 
            alt="Map"
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-drpepper-black to-transparent" />
          
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-4">
              Find Your <br /> <span className="text-drpepper-red">Pepper</span>
            </h1>
            <p className="text-white/50 max-w-sm">Use our geo-locator to find where Dr Pepper is stocked near you.</p>
          </div>

          {/* Map Pins Mock */}
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-1/2 left-1/3 text-drpepper-red shadow-drpepper-red/50 shadow-xl rounded-full p-2 bg-drpepper-red/20 border border-drpepper-red/50">
            <MapPin size={32} fill="currentColor" />
          </motion.div>
        </div>

        {/* Right: Search UI */}
        <div className="bg-white/5 p-12 overflow-y-auto h-[600px] border-l border-white/5 backdrop-blur-2xl">
          <div className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter Zip Code or City" 
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-16 py-6 focus:outline-none focus:border-drpepper-red transition-all text-sm font-bold uppercase tracking-widest"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-drpepper-red p-3 rounded-xl hover:scale-110 transition-transform">
                <Navigation size={18} />
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {['All Stores', 'Grocery', 'Gas Station', 'Restaurant'].map((f) => (
                <button key={f} className="whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  {f}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {mockStores.map((store, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group pointer-events-auto"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-drpepper-red mb-1 block">{store.type}</span>
                      <h3 className="font-bold text-lg">{store.name}</h3>
                    </div>
                    <span className="text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">{store.distance}</span>
                  </div>
                  <p className="text-sm text-white/40 mb-6">{store.address}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all">Get Directions</button>
                    <button className="flex-1 bg-drpepper-red/20 text-drpepper-red py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-drpepper-red/20 hover:bg-drpepper-red/30 transition-all">Check Stock</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
