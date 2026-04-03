import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import Infrastructure from './components/Infrastructure';
import IndustryLeaders from './components/IndustryLeaders';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBento />
        <Infrastructure />
        <IndustryLeaders />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
