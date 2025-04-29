import About from "./components/about/About";
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
    </div>
  )
}

export default App
