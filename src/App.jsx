import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
