import { snackMenuData, SnackMenu } from '../../types/types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Drumstick, Flame, Torus, Smile } from 'lucide-react';

const getSnackIcon = (id: string) => {
  switch (id) {
    case 'kycklingvingar':
      return <Drumstick className="text-burger-meat w-6 h-6" />;
    case 'mozzarella-sticks':
      return <Smile className="text-burger-cheese w-6 h-6" />;
    case 'lokringar':
      return <Torus className="text-burger-cheese w-6 h-6" />; 
    case 'jalapeno-poppers':
      return <Flame className="text-burger-sauce w-6 h-6" />;
    default:
      return null;
  }
};

const SnacksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      id="snacks"
      aria-labelledby="snacks-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col items-center lg:flex-row lg:items-start gap-12 text-center lg:text-left"
    >
      {/* Heading */}
      <div className="w-full lg:w-[300px] flex flex-col items-center lg:items-start">
        <h2 className="font-title text-4xl sm:text-5xl font-extrabold text-burger-sauce tracking-wider mb-8">
          Snacks & Förrätter
        </h2>
      </div>

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
        className="w-full relative z-10 -mt-6 sm:-mt-10 lg:-mt-20 lg:-mr-4 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-burger-bun p-4 sm:p-6 rounded-2xl shadow-inner"
      >
        {snackMenuData.map((item: SnackMenu) => (
          <div
            key={item.id}
            className="flex sm:flex-row flex-col items-start gap-4 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out overflow-hidden"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-burger-light rounded-full shadow-inner shrink-0">
              {getSnackIcon(item.id)}
            </div>

            {/* Content */}
            <div className="flex items-center flex-col w-full min-w-0">
              <div className="flex flex-wrap justify-between items-start gap-2 w-full">
                <p className="text-base sm:text-lg font-bold text-burger-dark break-words">
                  {item.name}
                </p>
                <div className="text-burger-sauce font-bold text-sm sm:text-base whitespace-nowrap text-right">
                  {Array.isArray(item.price)
                    ? item.price.map((p, i) => (
                        <p key={i}>
                          {p.quantity}st - {p.price}kr
                        </p>
                      ))
                    : `Kr ${item.price.toFixed(2)}`}
                </div>
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 mt-2 break-words w-full">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SnacksSection;
