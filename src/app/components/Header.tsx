import { Smartphone } from 'lucide-react';

export function Header() {
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Beranda
            </a>
            <a href="#produk" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Produk
            </a>
            <a href="#cara-order" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Cara Order
            </a>
            <a href="#kontak" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              Kontak
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
