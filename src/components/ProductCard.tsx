import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../constants/products';

export function ProductCard({ 
  product 
}: { 
  product: Product;
  key?: string | number;
}) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card group rounded-3xl overflow-hidden p-8 flex flex-col h-full relative"
    >
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-dp-maroon blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
      
      <div className="relative aspect-square mb-10 overflow-hidden rounded-2xl bg-dp-black/40">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="mt-auto relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-dp-maroon mb-3 block">
          {product.category}
        </span>
        <h3 className="text-3xl font-display leading-[0.9] mb-4">
          {product.name}
        </h3>
        <p className="text-dp-cream/40 text-xs uppercase tracking-widest leading-loose mb-8 line-clamp-2">
          {product.tagline}
        </p>

        <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5">
          <Link 
            to={`/products#${product.id}`}
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-dp-maroon transition-colors"
          >
            Details +
          </Link>
          <Link 
            to="/locator"
            className="text-dp-maroon text-[10px] font-black uppercase tracking-[0.2em] border-b border-dp-maroon pb-1"
          >
            Find Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
