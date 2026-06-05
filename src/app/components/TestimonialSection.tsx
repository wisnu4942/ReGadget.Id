import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote } from 'lucide-react';

export function TestimonialSection() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pembeli iPhone 11',
      image: 'https://images.unsplash.com/photo-1645380113813-9c2282bd3e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWwlMjBwZXJzb258ZW58MXx8fHwxNzc5MjU5NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Barang sesuai foto, fast respon, garansi jelas. Puas banget belanja di ReGadget.id!'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf7] to-white">
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
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 text-lg">
            Testimoni dari customer yang puas
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div 
              className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#00A86B' }}
            >
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p 
              className="text-center mb-8" 
              style={{ 
                fontSize: '20px', 
                color: '#1A1A2E',
                lineHeight: '1.8'
              }}
            >
              "{testimonials[0].text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#00A86B]/20">
                <ImageWithFallback 
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: '600', 
                    color: '#1A1A2E',
                    fontSize: '18px'
                  }}
                >
                  {testimonials[0].name}
                </p>
                <p className="text-gray-600 text-sm">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#00A86B' 
              }}
            >
              500+
            </div>
            <p className="text-gray-600">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <div 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#00A86B' 
              }}
            >
              4.9/5
            </div>
            <p className="text-gray-600">Rating Kepuasan</p>
          </div>
          <div className="text-center">
            <div 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#00A86B' 
              }}
            >
              98%
            </div>
            <p className="text-gray-600">Repeat Order</p>
          </div>
        </div>
      </div>
    </section>
  );
}
