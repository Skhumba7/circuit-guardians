import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechHub from '@/components/TechHub';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Expectations from '@/components/Expectations';
import CircuitBackground from '@/components/CircuitBackground';

export default function Home() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen">
      <CircuitBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Circuit Guardians',
            description: 'Device repairs, IT support, web development, and mobile app development.',
            telephone: '+27662774937',
            email: 'support@circuitguardians.co.za',
            areaServed: 'South Africa',
          }),
        }}
      />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <TechHub />
        <Portfolio />
        <Expectations />
        <Process />
        <About />
      </main>
      <Footer />
    </div>
  );
}
