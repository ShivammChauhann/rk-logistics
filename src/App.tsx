import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RouteStrip from '@/components/RouteStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import Coverage from '@/components/Coverage';
import FreightEnquiry from '@/components/FreightEnquiry';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#071533] antialiased">
      <Header />
      <main>
        <Hero />
        <RouteStrip />
        <About />
        <Services />
        <Coverage />
        <FreightEnquiry />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
