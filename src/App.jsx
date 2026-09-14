import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import AgentMascot from "./components/AgentMascot";
import Hud from "./components/Hud";
import TickerStrip from "./components/TickerStrip";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Preloader />
      <div className="noise-overlay" />
      <CursorGlow />
      <CustomCursor />
      <Hud />
      <AgentMascot />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TickerStrip />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
