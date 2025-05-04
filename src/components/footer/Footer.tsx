const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-burger-meat text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo and Description */}
        <div className="flex flex-col sm:flex-row justify-between mb-10">
          <div className="mb-6 sm:mb-0">
            <h2 className="font-title text-5xl text-burger-sauce font-bold tracking-wider mb-2">
              BurgerLab
            </h2>
            <p className="text-lg sm:text-xl mt-2 text-gray-200">
              Saltsjö-Boo’s ultimate burger destination. Crafted with passion and the freshest ingredients.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="font-semibold text-2xl mb-4 text-burger-sauce">Quick Links</h4>
            <ul className="space-y-3 text-gray-200">
              <li><a href="#home" className="hover:text-burger-sauce transition-all duration-300">Home</a></li>
              <li><a href="/menu" className="hover:text-burger-sauce transition-all duration-300">Menu</a></li>
              <li><a href="#contact" className="hover:text-burger-sauce transition-all duration-300">Contact</a></li>
              <li><a href="#about" className="hover:text-burger-sauce transition-all duration-300">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4 text-burger-sauce">Contact</h4>
            <ul className="space-y-3 text-gray-200">
              <li><a href="tel:+46123456789" className="hover:text-burger-sauce transition-all duration-300">+46 123 456 789</a></li>
              <li><a href="mailto:contact@burgerlab.se" className="hover:text-burger-sauce transition-all duration-300">contact@burgerlab.se</a></li>
              <li>123 Burger Street, Saltsjö-Boo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4 text-burger-sauce">Opening Hours</h4>
            <ul className="space-y-3 text-gray-200">
              <li>Mon - Fri: 11:00 AM – 9:00 PM</li>
              <li>Sat - Sun: 12:00 PM – 10:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300">
          <p>© 2025 BurgerLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
