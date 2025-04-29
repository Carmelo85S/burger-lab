import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Offert from "./components/offert/Offert";
import './index.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offert />
      <Gallery />
    </div>
  )
}

export default App
