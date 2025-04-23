import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import './index.css';
import VegetarisSallad from "./components/menu/VegetariskSallad";
import SnackMenuList from "./components/menu/SnackMenuList";
import VidSidaOm from "./components/menu/SidaOm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <VegetarisSallad />
      <SnackMenuList />
      <VidSidaOm />
    </div>
  )
}

export default App
