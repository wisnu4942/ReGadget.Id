import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: '#00A86B' }}
    >
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: '#00A86B' }}
    >
      <ChevronLeft className="w-5 h-5 text-white" />
    </button>
  );
}

export function ProductSection() {
  const products = [
    {
      name: 'iPhone 12 64GB',
      condition: 'Mulus 95%',
      price: 'Rp 5.499.000',
      images: [
        'https://images.unsplash.com/photo-1636494653548-aaecb99798ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxMiUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzc5MjU5NDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1619462571903-1ca33f7a946a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzc5MjYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1761906975728-2d8a600a0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2xvc2UlMjB1cCUyMGRldGFpbHxlbnwxfHx8fDE3NzkyNjA0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1758682663495-69b525734f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lJTIwY2FtZXJhJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzc5MjYwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      specs: ['Face ID Normal', 'Baterai 85%', 'Fullset']
    },
    {
      name: 'Samsung Galaxy A53',
      condition: 'Mulus 90%',
      price: 'Rp 3.299.000',
      images: [
        'https://images.unsplash.com/photo-1627609834360-74948f361335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1zdW5nJTIwR2FsYXh5JTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzkyNTk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzc5MjYwNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzc5MjYwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1758348844306-5a0ba556db03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lJTIwY2xvc2UlMjB1cCUyMGRldGFpbHxlbnwxfHx8fDE3NzkyNjA0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      specs: ['RAM 8GB', 'Baterai 88%', 'Normal Jaya']
    },
    {
      name: 'Powerbank 10.000mAh',
      condition: 'Seperti Baru',
      price: 'Rp 129.000',
      images: [
        'https://images.unsplash.com/photo-1766639215211-4c7091869f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHBvd2VyYmFuayUyMGNoYXJnZXJ8ZW58MXx8fHwxNzc5MjU5NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1581104678033-ce6e95d27f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlcmJhbmslMjBwb3J0YWJsZSUyMGNoYXJnZXIlMjBhbmdsZXxlbnwxfHx8fDE3NzkyNjAzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1707167144682-5de04050ad18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwb3dlcmJhbmslMjBwb3J0YWJsZSUyMGNoYXJnZXIlMjBhbmdsZXxlbnwxfHx8fDE3NzkyNjAzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1632156751475-b519c6f3b5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwb3dlcmJhbmslMjBwb3J0YWJsZSUyMGNoYXJnZXIlMjBhbmdsZXxlbnwxfHx8fDE3NzkyNjAzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      specs: ['Fast Charging', 'USB-C & USB-A', 'Garansi 7 Hari']
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#00A86B] transition-colors"></div>
    )
  };

  return (
    <section id="produk" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            Produk Unggulan
          </h2>
          <p className="text-gray-600 text-lg">
            Pilihan terbaik HP dan aksesoris bekas berkualitas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Product Image Carousel */}
              <div className="relative h-64 bg-gray-100 overflow-hidden product-slider">
                <Slider {...sliderSettings}>
                  {product.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="h-64">
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} - Angle ${imgIndex + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm z-20"
                  style={{ backgroundColor: '#00A86B', fontWeight: '600' }}
                >
                  {product.condition}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 
                  className="mb-2" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: '600', 
                    color: '#1A1A2E',
                    fontSize: '20px'
                  }}
                >
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="mb-4 space-y-1">
                  {product.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '24px', 
                      fontWeight: '700', 
                      color: '#00A86B' 
                    }}
                  >
                    {product.price}
                  </span>
                </div>

                {/* CTA Button */}
                <button onClick={() => window.open(`https://wa.me/6289506585599?text=Halo, saya mau pesan ${product.name}`, '_blank')}
                  className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-lg transition-all transform hover:scale-105"
                  style={{ backgroundColor: '#00A86B', fontWeight: '600' }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
