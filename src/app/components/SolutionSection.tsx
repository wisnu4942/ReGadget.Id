import { CheckCircle2, Shield, DollarSign } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: CheckCircle2,
      title: '100% Real Check',
      description: 'Setiap gadget dicek kondisi fisik dan fungsinya secara menyeluruh dengan foto & video asli'
    },
    {
      icon: Shield,
      title: 'Garansi 14 Hari',
      description: 'Jaminan uang kembali atau tukar barang jika ada masalah dalam 14 hari'
    },
    {
      icon: DollarSign,
      title: 'Harga Lebih Terjangkau',
      description: 'Dapatkan HP berkualitas dengan harga 30-50% lebih murah dari harga baru'
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
            Solusi dari <span style={{ color: '#00A86B' }}>ReGadget.id</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Kami memberikan kepastian dan keamanan dalam setiap transaksi
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#f0fdf7] to-white border-2 hover:shadow-lg transition-all"
                style={{ borderColor: '#00A86B' }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#00A86B' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="mb-3" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: '600', 
                    color: '#1A1A2E',
                    fontSize: '22px'
                  }}
                >
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
