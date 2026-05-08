import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Timeline } from './components/sections/Timeline.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { BeyondSoftware } from './components/sections/BeyondSoftware.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <BeyondSoftware />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
