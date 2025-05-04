import React from 'react';
import burger1 from '../../assets/burger1.jpg';
import burger2 from '../../assets/burger2.jpg';
import burger3 from '../../assets/burger3.jpg';
import burger4 from '../../assets/burger4.jpg';
import burger5 from '../../assets/burger5.jpg';
import burger6 from '../../assets/burger6.jpg';
import { useInView } from 'react-intersection-observer';

const Gallery: React.FC = () => {
    const images: string[] = [
        burger1,
        burger2,
        burger3,
        burger4,
        burger5,
        burger6
    ];

    return (
        <section className="gallery px-4 py-12 bg-burger-light">
            <div className="max-w-6xl mx-auto">
                <div className="gallery-header text-center mb-8">
                    <p className="font-body text-lg sm:text-xl text-burger-meat border-b-4 border-b-burger-sauce inline-block tracking-wider mb-4">
                        Galleri
                    </p>
                    <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-burger-sauce tracking-wider mb-6">
                        Discover the Vibrant Flavors
                    </h2>
                </div>
                <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    {images.map((src: string, index: number) => {
                        const { ref, inView } = useInView({
                            triggerOnce: true, // Trigger animation once when it comes into view
                            threshold: 0.2, // Trigger when 20% of the image is visible
                        });

                        return (
                            <img
                                key={index}
                                ref={ref}
                                src={src}
                                alt={`Gallery item ${index + 1}`}
                                className={`w-full h-52 sm:h-64 object-cover rounded-xl shadow hover:scale-105 transition-transform duration-300 ease-in-out ${
                                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
