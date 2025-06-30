import { NavLink } from "react-router-dom";

const LightBanner = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16 md:py-24 border-b border-gray-200 rounded-2xl mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discover Your Next{" "}
              <span className="text-indigo-600">Literary Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Explore our curated collection of books that will transport you to
              new worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink
                to="/explore"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                Browse Books
              </NavLink>
              <NavLink
                to="/join"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 text-center"
              >
                Join Our Club
              </NavLink>
            </div>
          </div>

          {/* Right Column - Book Image */}
          <div className="relative">
            <div className="relative w-full h-64 md:h-96 bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Books on shelf"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full opacity-70"></div>
            </div>

            {/* Floating book cards */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-20 h-28 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Book cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 w-16 h-24 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 rotate-3">
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Book cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightBanner;
