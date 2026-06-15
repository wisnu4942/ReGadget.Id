import { MessageCircle, Package } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="beranda" className="relative bg-gradient-to-br from-[#f0fdf7] to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Judul */}
          <h1 
            className="mb-6" 
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '48px', 
              fontWeight: '700', 
              color: '#1A1A2E',
              lineHeight: '1.2'
            }}
          >
            HP & Aksesoris Bekas <br />
            <span style={{ color: '#00A86B' }}>Kualitas Terjamin</span>
          </h1>

          {/* Subjudul dengan badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
              <span className="text-gray-700">Garansi 14 Hari</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
              <span className="text-gray-700">Foto Real</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
              <span className="text-gray-700">Cek Kondisi Transparan</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('produk')?.scrollIntoView({behavior: 'smooth'})}
              className="flex items-center justify-center gap-2 px-8 py-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ backgroundColor: '#00A86B' }}
            >
              <Package className="w-5 h-5" />
              <span style={{ fontWeight: '600' }}>Cek Stok Sekarang</span>
            </button>
            <button onClick={() => window.open('https://wa.me/6289506585597', '_blank')} 
              className="flex items-center justify-center gap-2 px-8 py-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ backgroundColor: '#00A86B' }}
            >
              <MessageCircle className="w-5 h-5" />
              <span style={{ fontWeight: '600' }}>Konsultasi Gratis</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
