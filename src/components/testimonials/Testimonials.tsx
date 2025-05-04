import { ThumbsUp, ForkKnife, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../types/testimonials';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-burger-sauce mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; image: string | undefined; message: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => {
            const { ref, inView } = useInView({
              triggerOnce: true, // Animation will run only once
              threshold: 0.2, // Trigger when 20% is visible
            });

            return (
              <article
                key={index}
                ref={ref}
                className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                role="group"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  className="w-20 h-20 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-burger-sauce mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{testimonial.message}</p>

                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-4" aria-label="Rating: 3 thumbs up">
                  <ThumbsUp size={20} />
                  <ThumbsUp size={20} />
                  <ThumbsUp size={20} />
                </div>

                <div className="flex gap-4 text-gray-400">
                  <ForkKnife size={20} aria-label="Fork and Knife Icon" />
                  <Quote size={20} aria-label="Quote Icon" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
