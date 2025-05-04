import { useInView } from 'react-intersection-observer';
import offertBg from '../../assets/offert-bg.webp';
import { Beef, Salad, Leaf, Smile, Coffee, Star } from "lucide-react";

const features = [
  {
    icon: Beef,
    title: "Juicy Burgers",
    description: "Indulge in freshly prepared hamburgers made from the finest ingredients, catering to beef, chicken, and vegetarian preferences."
  },
  {
    icon: Coffee,
    title: "Cozy Atmosphere",
    description: "Relax in our clean and inviting space, with both indoor and delightful outdoor seating options available to enhance your dining experience."
  },
  {
    icon: Salad,
    title: "Fresh Salads",
    description: "Explore our vibrant salads, made with fresh, high-quality ingredients perfect for a lighter meal option."
  },
  {
    icon: Smile,
    title: "Friendly Service",
    description: "Enjoy attentive service that prioritizes your comfort, making each visit truly remarkable and enjoyable."
  },
  {
    icon: Leaf,
    title: "Vegan Options",
    description: "Savor our enticing vegan meals, thoughtfully prepared to deliver on taste without compromise."
  },
  {
    icon: Star,
    title: "Memorable Dining",
    description: "Each meal crafted at Sonjas Burgare offers not just sustenance but a delightful experience you'll remember and crave to revisit."
  }
];

const Offert = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full lg:h-[70vh] py-16 flex items-center justify-center bg-cover bg-center">
        <img
          src={offertBg}
          alt="Offert Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 max-w-3xl">
          <p className="font-body text-lg sm:text-xl text-burger-bun border-b-4 border-b-burger-sauce inline-block tracking-wider mb-4">
            SAVOR THE FLAVOR
          </p>
          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-burger-sauce tracking-wider mb-6">
            Discover our Special delights
          </h2>
          <p className="font-body text-base sm:text-lg text-white tracking-wider">
            Experience mouth-watering hamburgers crafted to satisfy all cravings, 
            complemented by a wide selection of fresh salads and vegan options, 
            all within a warm and welcoming environment in Saltsjö-Boo.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 w-5/6 mx-auto lg:-translate-y-24 backdrop-blur-md p-5 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isHighlighted = index === 1 || index === 4;

          // Use the Intersection Observer hook here
          const { ref, inView } = useInView({
            triggerOnce: true, // Triggers only once
            threshold: 0.2, // Starts animating when 20% of the element is in view
          });

          return (
            <article
              key={feature.title}
              ref={ref}
              className={`
                flex flex-col items-center text-center border p-6 shadow-md rounded-2xl
                ${isHighlighted ? 'bg-burger-sauce text-white -translate-y-4' : 'bg-white text-gray-800'}
                transition-all duration-300 hover:shadow-lg
                transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                transition-all duration-1000 ease-in-out
              `}
            >
              <Icon size={48} className={`${isHighlighted ? 'text-white' : 'text-burger-meat'} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Offert;
