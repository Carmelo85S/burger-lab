import { sidaData, Sida } from '../../types/types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Popcorn } from 'lucide-react'; // Icon imports

const getSidaIcon = (id: string) => {
  switch (id) {
    case 'pommes':
      return <Popcorn className="w-8 h-8 text-burger-sauce shrink-0" />;
    case 'sötpotatis':
      return <Popcorn className="w-8 h-8 text-burger-sauce shrink-0" />;
    case 'Ostiga Pommes':
      return <Popcorn className="w-8 h-8 text-burger-sauce shrink-0" />;
    default:
      return <Popcorn className="w-8 h-8 text-burger-sauce shrink-0" />;
  }
};

const VidSidaOm = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      id="vid-sida-om"
      aria-labelledby="sida-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left"
    >
      {/* Side items with icons */}
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
        className="relative z-10 -mt-6 sm:-mt-10 lg:-mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-burger-bun p-4 sm:p-6 rounded-2xl shadow-inner w-full lg:w-2/3"
      >
        {sidaData.map((item: Sida) => (
          <div
            key={item.id}
            className="flex items-start gap-4 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            {/* Icon */}
            {getSidaIcon(item.id)}
            {/* Content */}
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

      {/* Heading on the right */}
      <div className="relative z-0 w-full lg:w-[300px] flex flex-col items-center lg:items-end mx-auto lg:mx-0">
        <h2 className="font-title text-4xl sm:text-5xl font-extrabold text-burger-sauce tracking-wider mb-8">
          Vid sida
        </h2>
      </div>
    </section>
  );
};

export default VidSidaOm;
