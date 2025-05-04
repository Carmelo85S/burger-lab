import heroBg from '../../assets/hero-bg.webp';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-0" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 sm:p-8 lg:p-10 flex flex-col items-start justify-center text-left max-w-2xl"
        >
          <h1 className="font-title font-bold text-burger-sauce leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
            The Burger You Deserve.
          </h1>

          <p className="font-body text-base/8 tracking-wide  sm:text-lg md:text-xl text-burger-light mt-4 mb-6 leading-relaxed">
            Sink your teeth into handcrafted burgers made with the freshest ingredients and a whole lot of love.
            At <span className="font-bold text-burger-sauce">BurgerLab</span>, every bite is a masterpiece.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-[150px] text-center bg-burger-sauce hover:bg-burger-meat text-white shadow-lg transition-transform hover:scale-105"
            >
              Book Now
            </Button>
            <Button
              onClick={() => scrollToSection('menu')}
              className="w-[150px] text-center text-burger-meat bg-burger-bun hover:bg-burger-meat hover:text-white shadow-lg transition-transform hover:scale-105"
            >
              See Menu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
