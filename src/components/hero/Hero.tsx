import heroBg from '../../assets/hero-bg.webp';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-[1300px] mx-auto w-full px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-start justify-center text-left max-w-2xl">
          <h1 className="font-title font-bold text-burger-sauce leading-tight tracking-normal text-4xl xs:text-5xl md:text-6xl lg:text-7xl">
            The Burger You Deserve.
          </h1>

          <p className="font-body text-lg sm:text-xl text-burger-dark">
            Sink your teeth into handcrafted burgers made with the freshest ingredients and a whole lot of love. At Sonjas, every bite tells a story.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-[150px] text-center bg-burger-sauce hover:bg-burger-meat text-white"
            >
              Book Now
            </Button>
            <Button
              onClick={() => scrollToSection('menu')}
              className="w-[150px] text-center text-burger-meat bg-burger-bun hover:bg-burger-meat hover:text-white"
            >
              See Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
