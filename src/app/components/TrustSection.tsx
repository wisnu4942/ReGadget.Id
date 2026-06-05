import { Shield, FileCheck, CreditCard } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: 'Garansi 14 Hari',
      description: 'Jaminan uang kembali atau tukar barang jika ada masalah'
    },
    {
      icon: FileCheck,
      title: 'Laporan Pengecekan',
      description: 'Checklist lengkap kondisi fisik dan fungsi setiap produk'
    },
    {
      icon: CreditCard,
      title: 'Pembayaran Aman',
      description: 'Transfer bank, COD, dan marketplace official terpercaya'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="mb-4" 
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '36px', 
              fontWeight: '700', 
              color: '#1A1A2E' 
            }}
          >
            Kenapa Harus <span style={{ color: '#00A86B' }}>Percaya</span> Kami?
          </h2>
          <p className="text-gray-600 text-lg">
            Keamanan dan kepercayaan Anda adalah prioritas kami
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 shadow-md hover:shadow-xl transition-all"
                style={{ borderColor: '#00A86B' }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 
                    className="mb-2" 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontWeight: '600', 
                      color: '#1A1A2E',
                      fontSize: '20px'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#00A86B' }}
                  >
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
