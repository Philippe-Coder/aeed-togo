import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Missions from './components/Missions';
import Vision from './components/Vision';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Missions />
        <Vision />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
