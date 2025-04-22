import { vegetariskSalladData, VegetariskSalladMenu } from '../../types/types';
import menuVeg from '../../assets/menuVeg.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const VegetariskSallad = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      id="veg-sallad"
      aria-labelledby="veg-sallad-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col-reverse lg:flex-row items-start gap-12"
    >
      {/* Menu Items */}
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
        className="relative z-10 -mt-6 sm:-mt-10 lg:-mt-20 lg:-mr-16 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-burger-bun p-4 sm:p-6 rounded-2xl shadow-inner"
      >
        {vegetariskSalladData.map((item: VegetariskSalladMenu) => (
          <div
          key={item.id}
          className="flex sm:flex-row flex-col items-start gap-4 bg-white rounded-2xl shadow-md p-4 overflow-hidden"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.name}
            className="w-[80px] h-[80px] object-cover rounded-full shrink-0"
          />
          {/* Text content */}
          <div className="flex flex-col w-full min-w-0">
            <div className="flex flex-wrap justify-between items-start gap-2 w-full">
              <p className="text-base sm:text-lg font-bold text-burger-dark break-words">
                {item.name}
              </p>
              <p className="text-burger-sauce font-bold text-base sm:text-lg whitespace-nowrap">
                Kr {item.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-2 break-words w-full">
              {item.description}
            </p>
          </div>
        </div>
        ))}
      </motion.div>

      {/* Image + Heading */}
      <div className="relative z-0 w-full lg:w-[400px] flex flex-col items-center lg:items-start mx-auto lg:mx-0 text-center lg:text-right">
        <h2 className="relative z-20 font-title text-4xl sm:text-5xl font-extrabold text-burger-sauce tracking-wider mb-8">
          Veg & Sallad
        </h2>
        {/* solo l'immagine ha il margine negativo */}
        <div className="relative -mb-6 sm:-mb-10 lg:mb-0">
          <img
            src={menuVeg}
            alt="Veg menu pic"
            className="w-full max-w-[500px] object-cover rounded-3xl shadow-[-10px_-10px_0px_#D2691E]"
          />
        </div>
      </div>
    </section>
  );
};

export default VegetariskSallad;
