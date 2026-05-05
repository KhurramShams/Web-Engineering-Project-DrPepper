import { motion } from 'motion/react';
import { PRODUCTS } from '../constants/products';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';
import { Filter, Search } from 'lucide-react';

export function Products() {
  const [filter, setFilter] = useState<'all' | 'classic' | 'zero' | 'cherry'>('all');
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black font-display uppercase tracking-tight mb-8">
            The <span className="text-drpepper-red">Collection</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Discover the full range of Dr Pepper flavors. From the classics that started it all to the boldest limited edition drops.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-white/5 p-6 rounded-[2rem] border border-white/10">
          <div className="flex flex-wrap gap-2">
            {(['all', 'classic', 'zero', 'cherry'] as const).map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === f 
                    ? 'bg-drpepper-red text-white' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Search Flavors..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-14 py-4 focus:outline-none focus:border-drpepper-red transition-colors text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/30 font-bold uppercase tracking-widest">No flavors found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
