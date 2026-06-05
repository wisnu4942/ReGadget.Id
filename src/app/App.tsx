import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitSection } from './components/BenefitSection';
import { ProductSection } from './components/ProductSection';
import { TestimonialSection } from './components/TestimonialSection';
import { TrustSection } from './components/TrustSection';
import { OfferSection } from './components/OfferSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitSection />
      <ProductSection />
      <TestimonialSection />
      <TrustSection />
      <OfferSection />
      <Footer />
    </div>
  );
}
