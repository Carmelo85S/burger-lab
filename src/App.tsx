import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import './index.css';
import VegetarisSallad from "./components/menu/VegetariskSallad";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <VegetarisSallad />
    </div>
  )
}

export default App
