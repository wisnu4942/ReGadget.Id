import { XCircle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      title: 'Kondisi Nggak Jelas',
      description: 'Beli HP bekas tapi kondisi fisik dan fungsi tidak dijelaskan detail'
    },
    {
      title: 'Tidak Ada Garansi',
      description: 'Kalau rusak atau bermasalah, penjual tidak bertanggung jawab'
    },
    {
      title: 'Foto dari Internet',
      description: 'Barang yang datang berbeda dengan foto yang ditampilkan'
    },
    {
      title: 'Barang Datang Rusak',
      description: 'Setelah sampai baru ketahuan ada kerusakan tersembunyi'
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
            Masalah Beli HP Bekas?
          </h2>
          <p className="text-gray-600 text-lg">
            Kami paham kekhawatiran Anda saat membeli gadget bekas
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 
                    className="mb-2" 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontWeight: '600', 
                      color: '#1A1A2E',
                      fontSize: '18px'
                    }}
                  >
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
