import heroImg from '../../assets/hero.webp';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-6">
      <div className="max-w-[1300px] px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-start text-left space-y-6 max-w-xl">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-burger-sauce">
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
        <div className="w-full max-w-[450px]">
          <img
            src={heroImg}
            alt="Juicy burger on a plate"
            className="w-full h-auto object-cover rounded-3xl shadow-[-10px_-10px_0px_#D2691E]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;