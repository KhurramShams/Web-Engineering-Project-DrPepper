import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dp-black border-t border-white/10 pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-md">
            <div className="text-5xl font-display tracking-tighter text-dp-maroon uppercase mb-8">
              Dr Pepper
            </div>
            <p className="text-dp-cream/40 text-sm uppercase tracking-widest leading-loose">
              Established 1885 in Waco, Texas. The one-of-a-kind blend of 23 flavors. Still uncompromisingly original.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-dp-maroon mb-8">Navigation</h4>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-dp-cream/40">
                <li><Link to="/products" className="hover:text-dp-cream transition-colors">Products</Link></li>
                <li><Link to="/flavors" className="hover:text-dp-cream transition-colors">23 Flavors</Link></li>
                <li><Link to="/about" className="hover:text-dp-cream transition-colors">History</Link></li>
                <li><Link to="/locator" className="hover:text-dp-cream transition-colors">Locator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-dp-maroon mb-8">Social</h4>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-dp-cream/40">
                <li><a href="#" className="hover:text-dp-cream transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-dp-cream transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-dp-cream transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-dp-cream transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] font-black uppercase tracking-[0.5em] text-dp-cream/20">
          <div>© {currentYear} DR PEPPER/SEVEN UP, INC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
