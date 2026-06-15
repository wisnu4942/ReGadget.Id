import { Smartphone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00A86B' }}>
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', color: '#1A1A2E' }}>
              ReGadget.id
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-gray-700 hover:text-[#00A86B] transition-colors">Beranda</a>
            <a href="#produk" className="text-gray-700 hover:text-[#00A86B] transition-colors">Produk</a>
            <a href="#cara-order" className="text-gray-700 hover:text-[#00A86B] transition-colors">Cara Order</a>
            <a href="#kontak" className="text-gray-700 hover:text-[#00A86B] transition-colors">Kontak</a>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {[
              { href: '#beranda', label: 'Beranda' },
              { href: '#produk', label: 'Produk' },
              { href: '#cara-order', label: 'Cara Order' },
              { href: '#kontak', label: 'Kontak' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="py-3 px-2 text-gray-700 hover:text-[#00A86B] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}