import { burgerData, Burger } from '../../types/types';
import menu from '../../assets/menu.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Menu = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      id="menu"
      className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 sm:px-6 py-3 text-center lg:text-left"
    >
      {/* Menu image + heading */}
      <div className="relative z-0 w-full lg:w-[400px] flex flex-col items-center lg:items-start mx-auto lg:mx-0">
        <h2 className="font-title text-4xl sm:text-5xl pb-6 sm:pb-10 font-extrabold text-burger-sauce tracking-wider">
          Burgarna
        </h2>
        <img
          src={menu}
          alt="burger menu pic"
          className="w-full max-w-[400px] object-cover rounded-3xl shadow-[-10px_-10px_0px_#D2691E]"
        />
      </div>

      {/* Burger list */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
        className="relative w-full z-10 -mt-6 sm:-mt-10 lg:-mt-20 lg:-ml-16 flex-1 sm:grid sm:grid-cols-2 sm:gap-8 bg-burger-bun p-4 sm:p-6 rounded-2xl shadow-inner overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-4 sm:contents">
          {burgerData.map((burger: Burger) => (
            <div
              key={burger.id}
              className="min-w-[280px] sm:min-w-0 flex sm:flex-row flex-col items-start gap-4 bg-white rounded-2xl shadow-md p-4 overflow-hidden"
            >
              {/* Image */}
              <img
                src={burger.img}
                alt={burger.name}
                className="w-[80px] h-[80px] object-cover rounded-full shrink-0"
              />
              {/* Text content */}
              <div className="flex flex-col w-full min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-2 w-full">
                  <p className="text-base sm:text-lg font-bold text-burger-dark break-words">
                    {burger.name}
                  </p>
                  <p className="text-burger-sauce font-bold text-base sm:text-lg whitespace-nowrap">
                    Kr {burger.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-2 break-words w-full">
                  {burger.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Menu;
