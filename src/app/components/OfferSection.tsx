import { Tag, ArrowRight } from 'lucide-react';

export function OfferSection() {
  return (
    <section id="cara-order" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00A86B] to-[#008f5d]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: '#00A86B' }}
          ></div>
          <div 
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: '#00A86B' }}
          ></div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#FFF3CD' }}>
              <Tag className="w-5 h-5" style={{ color: '#00A86B' }} />
              <span style={{ color: '#00A86B', fontWeight: '600' }}>Promo Spesial!</span>
            </div>

            {/* Title */}
            <h2 
              className="mb-4" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#1A1A2E' 
              }}
            >
              Diskon <span style={{ color: '#00A86B' }}>Rp 50.000</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg mb-2">
              Untuk pembelian pertama Anda!
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Gunakan kode: <span className="font-bold" style={{ color: '#00A86B' }}>REGADGET50</span>
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <span className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>1</span>
                </div>
                <p className="text-gray-700 text-sm">Pilih produk yang Anda inginkan</p>
              </div>
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <span className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>2</span>
                </div>
                <p className="text-gray-700 text-sm">Hubungi via WhatsApp</p>
              </div>
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <span className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>3</span>
                </div>
                <p className="text-gray-700 text-sm">Gunakan kode promo saat order</p>
              </div>
            </div>

            {/* CTA */}
            <button 
              className="inline-flex items-center gap-3 px-10 py-4 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ backgroundColor: '#00A86B', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '18px' }}
            >
              Klaim Diskon Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Timer */}
            <p className="text-gray-500 text-sm mt-4">
              ⏰ Promo terbatas! Buruan order sebelum kehabisan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
