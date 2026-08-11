import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Menu from "./components/Menu";
import OrderPlatforms from "./components/OrderPlatforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Menu />
        <OrderPlatforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
