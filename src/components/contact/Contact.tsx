import { MapPin, Phone, Mail } from 'lucide-react';
import contactBg from '../../assets/contact-bg.webp';
import bigBurger from '../../assets/contact-form.webp';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="contact"
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center px-6 sm:px-8 md:px-12 max-w-3xl z-10">
          <p className="font-body text-lg sm:text-xl text-white border-b-4 border-b-burger-sauce inline-block tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider mb-6">
            We’d Love to Hear from You!
          </h2>
          <p className="font-body text-lg text-white tracking-wider">
            Whether you have a question, feedback, or just want to say hello, we’re here for you.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="relative z-20 w-5/6 mx-auto -translate-y-7 backdrop-blur-md p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
          <MapPin size={48} className="text-burger-sauce mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <p className="text-sm">123 Burger Street, Saltsjö-Boo, Sweden</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
          <Phone size={48} className="text-burger-sauce mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-sm">+46 123 456 789</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
          <Mail size={48} className="text-burger-sauce mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-sm">contact@sonjasburgare.com</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-center text-burger-sauce mb-12">
              Send Us a Message
            </h2>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              action="#"
              method="POST"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-lg font-semibold text-gray-800">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burger-sauce transition-all duration-300"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-lg font-semibold text-gray-800">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burger-sauce transition-all duration-300"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label htmlFor="message" className="mb-2 text-lg font-semibold text-gray-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-burger-sauce transition-all duration-300"
                  rows={6}
                />
              </div>

              <div className="flex justify-center col-span-2">
                <button
                  type="submit"
                  className="px-12 py-4 bg-burger-sauce text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-burger-bun transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center bg-gray-200 p-6 rounded-xl shadow-lg">
            <img
              src={bigBurger}
              alt="Example"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
