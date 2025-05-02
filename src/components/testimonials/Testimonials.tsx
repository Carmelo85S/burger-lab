import { ThumbsUp, ForkKnife, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Carla Larsson",
            message:
                "The best burger I've ever had! The flavors are incredible, and the service was exceptional.",
            image: "https://images.pexels.com/photos/157920/woman-face-curly-hair-157920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Roxanne Smith",
            message:
                "Delicious burgers, and the atmosphere is perfect for a casual night out. Highly recommend!",
            image: "https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Alice Johansson",
            message:
                "I’m a burger enthusiast, and this place has won me over. Fresh ingredients and a great vibe!",
            image: "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    What Our Customers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-600 mt-4">{testimonial.message}</p>
                            <div className="flex justify-center mt-4 text-yellow-500">
                                <ThumbsUp size={20} />
                                <ThumbsUp size={20} />
                                <ThumbsUp size={20} />
                            </div>
                            <div className="mt-4">
                                <ForkKnife className="text-gray-500" size={24} />
                            </div>
                            <div className="mt-2">
                                <Quote className="text-gray-500" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
