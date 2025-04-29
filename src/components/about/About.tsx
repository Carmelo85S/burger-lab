import React from 'react';
import aboutImg from '../../assets/about.webp';
import { Utensils, ConciergeBell } from 'lucide-react';
import { Button } from '../ui/Button';


const About: React.FC = () => {
    return (
        <section id="about" className="w-full min-h-screen py-12 flex items-center justify-center">
            <div className="max-w-[1300px] px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <img src={aboutImg} 
                    className="w-[600px] h-auto object-cover mx-auto rounded-3xl shadow-[-10px_-10px_0px_#D2691E]"
                    alt="about pic" 
                />
                <div className="max-w-[1300px] px-6 w-full flex flex-col items-start justify-center gap-2">
                    <div>
                        <p className="font-body font-bold border-b-4 border-burger-tomato text-text-lg sm:text-xl text-burger-dark">
                            EXPERIENCE SONJAS BURGARE
                        </p>
                        <h2 className="font-title text-2xl sm:text-5xl md:text-6xl font-bold text-burger-sauce">
                            Best Burger in Saltsjö-Boo
                        </h2>
                        <p className="font-body text-lg sm:text-xl text-burger-dark">
                            At Sonjas Burgare, we believe that every bite should be a celebration of flavor and quality. 
                            Our burgers are crafted with the finest ingredients, ensuring that each mouthful is a delightful experience.
                            From the first crunch of our perfectly toasted buns to the last juicy bite of our hand-formed patties,
                            we take pride in serving you the best burgers in Saltsjö-Boo.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between w-full gap-8 p-4 rounded-2xl">
                        {/* Dine with us */}
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

                        {/* Our service */}
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
                    </div>
                    <Button
                    className="w-[150px] text-center text-burger-meat bg-burger-bun hover:bg-burger-meat hover:text-white"
                    >
                    Kontakt
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default About;