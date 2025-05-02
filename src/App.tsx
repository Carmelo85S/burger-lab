import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Offert from "./components/offert/Offert";
import Testimonials from "./components/testimonials/Testimonials";
import './index.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offert />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
