/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { FlavorExperience } from './pages/FlavorExperience';
import { StoreLocator } from './pages/StoreLocator';
import { About } from './pages/About';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/flavors" element={<FlavorExperience />} />
              <Route path="/locator" element={<StoreLocator />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
