import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center font-sans"
    style={{backgroundImage:"url('/stars_bg.jpg')"}}
    >
    <main className='flex-grow'>
      <Header />
      <Hero />
      <About />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


