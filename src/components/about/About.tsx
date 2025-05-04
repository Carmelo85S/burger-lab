import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../../assets/about.webp';
import { Utensils, ConciergeBell } from 'lucide-react';
import { Button } from '../ui/Button';

const About: React.FC = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="w-full py-12 lg:min-h-screen flex items-center justify-center">
      <div className="max-w-[1300px] px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Image with animation trigger */}
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          src={aboutImg}
          className="w-[600px] h-auto object-cover mx-auto rounded-3xl shadow-[-10px_-10px_0px_#D2691E]"
          alt="about pic"
        />

        {/* Text Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-start justify-center gap-2"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="font-body font-bold border-b-4 border-burger-tomato text-text-lg sm:text-xl text-burger-dark"
            >
              EXPERIENCE BURGERLAB
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="font-title text-2xl sm:text-5xl md:text-6xl font-bold text-burger-sauce"
            >
              Best in Saltsjö-Boo
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
              transition={{ delay: 0.4 }}
              className="font-body text-lg sm:text-xl text-burger-dark mt-2"
            >
              At BurgerLab, we believe that every bite should be a celebration of flavor and quality. 
              Our burgers are crafted with the finest ingredients, ensuring that each mouthful is a delightful experience.
              From the first crunch of our perfectly toasted buns to the last juicy bite of our hand-formed patties,
              we take pride in serving you the best burgers in Saltsjö-Boo.
            </motion.p>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 30 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-between w-full gap-8 p-4 rounded-2xl"
          >
            <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
              <div className="flex items-center gap-2">
                <Utensils className="text-burger-sauce" size={28} />
                <h3 className="font-title text-2xl font-bold text-burger-sauce tracking-widest">
                  Dine with us
                </h3>
              </div>
              <p className="font-body text-sm text-burger-dark">
                Enjoy a clean and inviting atmosphere with indoor and seasonal outdoor seating.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
              <div className="flex items-center gap-2">
                <ConciergeBell className="text-burger-sauce" size={28} />
                <h3 className="font-title text-2xl font-bold text-burger-sauce tracking-widest">
                  Our service
                </h3>
              </div>
              <p className="font-body text-sm text-burger-dark">
                Experience friendly and efficient service that creates a welcoming environment for all guests.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.95 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="w-[150px] text-center text-burger-meat bg-burger-bun hover:bg-burger-meat hover:text-white">
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
