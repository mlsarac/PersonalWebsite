import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Timeline } from './components/sections/Timeline.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { CurrentFocus } from './components/sections/CurrentFocus.jsx';
import { BeyondSoftware } from './components/sections/BeyondSoftware.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div
          className="bg-grid bg-grid-drift absolute inset-0 opacity-[0.22]"
          style={{ willChange: 'background-position' }}
        />
        <div
          className="bg-glow-drift-a absolute left-[15%] top-[-10%] h-[70vmin] w-[70vmin] rounded-full bg-sky-600/20 blur-[100px]"
          style={{ willChange: 'transform, opacity' }}
        />
        <div
          className="bg-glow-drift-b absolute bottom-[-15%] right-[-5%] h-[65vmin] w-[65vmin] rounded-full bg-blue-950/50 blur-[95px]"
          style={{ willChange: 'transform, opacity' }}
        />
        <div
          className="ambient-glow-pulse absolute left-1/2 top-1/3 h-[38vmin] w-[38vmin] -translate-x-1/2 rounded-full bg-indigo-950/35 blur-[80px]"
          style={{ willChange: 'opacity, filter' }}
        />

        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <CurrentFocus />
        <BeyondSoftware />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
