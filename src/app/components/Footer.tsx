import { MessageCircle, Instagram, ShoppingBag, Mail, MapPin, Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#1A1A2E] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00A86B' }}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ReGadget.id
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Solusi terpercaya untuk HP dan aksesoris gadget bekas berkualitas dengan garansi dan harga terjangkau.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#beranda" className="hover:text-[#00A86B] transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#produk" className="hover:text-[#00A86B] transition-colors">Produk</a>
              </li>
              <li>
                <a href="#cara-order" className="hover:text-[#00A86B] transition-colors">Cara Order</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#00A86B] transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Hubungi Kami
            </h3>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/6289506585597" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A86B] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00A86B' }}>
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="font-semibold text-white">+62 895-0658-5597</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/regadget.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A86B] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00A86B' }}>
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Instagram</p>
                  <p className="font-semibold text-white">@regadget.id</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:hello@regadget.id" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A86B] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00A86B' }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-white">hello@regadget.id</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Marketplace Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-semibold text-lg mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Belanja di Marketplace
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" style={{ color: '#00A86B' }} />
              <span>Tokopedia</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" style={{ color: '#00A86B' }} />
              <span>Shopee</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" style={{ color: '#00A86B' }} />
              <span>Bukalapak</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© 2026 ReGadget.id. All rights reserved.</p>
          <p className="mt-2">HP & Aksesoris Bekas Terpercaya dengan Garansi</p>
        </div>
      </div>
    </footer>
  );
}
