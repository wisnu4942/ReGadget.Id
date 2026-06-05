import { Camera, Shield, MessageCircle, FileCheck } from 'lucide-react';

export function BenefitSection() {
  const benefits = [
    {
      icon: Camera,
      title: 'Foto & Video Real',
      description: 'Foto dan video kondisi asli barang, bukan dari internet atau katalog'
    },
    {
      icon: Shield,
      title: 'Garansi 14 Hari',
      description: 'Jaminan tukar atau uang kembali jika barang tidak sesuai'
    },
    {
      icon: MessageCircle,
      title: 'Fast Response WhatsApp',
      description: 'Konsultasi dan tanya jawab cepat via WhatsApp'
    },
    {
      icon: FileCheck,
      title: 'Laporan Cek Kondisi',
      description: 'Dapatkan checklist lengkap kondisi setiap item'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            Benefit Belanja di ReGadget.id
          </h2>
          <p className="text-gray-600 text-lg">
            Nikmati pengalaman belanja gadget bekas yang aman dan nyaman
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="mb-2" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: '600', 
                    color: '#1A1A2E',
                    fontSize: '18px'
                  }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
