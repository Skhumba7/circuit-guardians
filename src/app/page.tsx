import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechHub from '@/components/TechHub';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Hero />
      <TechHub />
      <Portfolio />
      <Process />
      <About />
      <Footer />
    </div>
  );
}
