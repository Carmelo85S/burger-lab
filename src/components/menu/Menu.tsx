import { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Burgers");

  const menuData: {
    [key: string]: { name: string; description?: string; price: string }[];
  } = {
    Burgers: [
      { name: "Classic", description: "Cheddar cheese, ketchup, mustard, onions, pickles", price: "110 SEK" },
      { name: "Mogge's Hot", description: "Jalapeños, bacon, chipotle mayo", price: "125 SEK" },
      { name: "Truffle", description: "Truffle mayo, cheddar, pickled red onion", price: "150 SEK" },
      { name: "Double Classic", description: "Double patty, cheese, ketchup, mustard, pickles", price: "145 SEK" },
      { name: "BBQ Bacon", description: "Smoky BBQ sauce, crispy bacon, fried onions", price: "135 SEK" },
      { name: "Blue Cheese", description: "Creamy blue cheese, arugula, fig jam", price: "155 SEK" }
    ],
    Vegetarian: [
      { name: "Halloumi Burger", description: "Fried halloumi, avocado, cream cheese", price: "135 SEK" },
      { name: "Vego Burger", description: "Plant-based patty, vegan sauce, lettuce, tomato", price: "120 SEK" }
    ],
    "Kids Menu": [
      { name: "Mini Burger (100g)", description: "Cheddar, ketchup, fries on the side", price: "70 SEK" },
      { name: "Chicken Bites", description: "Crispy chicken, fries, curry dip", price: "65 SEK" }
    ],
    Sides: [
      { name: "Onion Rings", description: "7 golden onion rings", price: "40 SEK" },
      { name: "Mozzarella Sticks", description: "5 crispy mozzarella sticks", price: "45 SEK" },
      { name: "Curly Fries", description: "Seasoned curly fries", price: "35 SEK" }
    ],
    Salsa: [
      { name: "Original Mayo", price: "10 SEK" },
      { name: "Chipotle Mayo", price: "10 SEK" },
      { name: "Truffle Mayo", price: "15 SEK" }
    ],
    Dessert: [
      { name: "Chocolate Cake", price: "40 SEK" },
      { name: "Brownie", price: "45 SEK" }
    ],
    Drinks: [
      { name: "Zingo Orange", price: "15 SEK" },
      { name: "Pepsi Max", price: "15 SEK" },
      { name: "Beer", price: "45 SEK" }
    ]
  };

  return (
    <section id="menu" className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT IMAGE */}
        <div className="lg:w-1/2 w-full">
          <img
            src="https://images.pexels.com/photos/4809147/pexels-photo-4809147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Menu Visual"
            className="rounded-3xl shadow-xl object-cover w-full h-full max-h-[700px]"
          />
        </div>

        {/* RIGHT MENU */}
        <div className="lg:w-1/2 w-full max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-burger-sauce pr-2">
          {/* TABS */}
          <div className="sticky top-0 bg-white py-4 z-10 flex flex-wrap gap-2 mb-4 border-b border-gray-200">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                  activeTab === category
                    ? "bg-burger-sauce text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* MENU ITEMS */}
          <div className="space-y-6">
            {menuData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-burger-sauce">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-600">{item.description}</p>
                    )}
                  </div>
                  <span className="text-burger-sauce font-bold whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LUNCH BANNER */}
      <div className="text-center mt-12">
        <div className="inline-block bg-burger-sauce text-white text-xl sm:text-2xl font-bold px-8 py-4 rounded-full shadow-lg">
          Lunch Special – 120 SEK!
        </div>
      </div>
    </section>
  );
};

export default Menu;
