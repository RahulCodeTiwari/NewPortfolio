// frontend/src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto bg-base text-base min-h-screen relative overflow-x-hidden">

      {/* Premium Gradient Background Blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-52 -left-32 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-32 -right-40 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute  left-1/2  -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[120px]" />
      </div>

      <Navbar />

     <main className="pt-16  space-y-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Modern Floating Call Button */}
      <a
        href="tel:+917706987149"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full 
                   bg-gradient-to-r from-violet-600 to-cyan-500 
                   px-6 py-3 text-sm font-semibold text-white 
                   shadow-lg shadow-violet-500/30 
                   backdrop-blur-md 
                   transition-all duration-300 
                   hover:scale-110 hover:shadow-xl"
      >
        📞 Call Now
      </a>

    </div>
  );
}