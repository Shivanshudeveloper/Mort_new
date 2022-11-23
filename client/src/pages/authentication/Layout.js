import React from "react";

function Layout() {
  return (
    <div>
      <div className="hidden lg:block relative w-full lg:w-1/2 bg-blue-1000">
        <div
          className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
          //   style="z-index: 10;"
        >
          <img
          className="lg:max-w-xl mx-auto"
            src="https://res.cloudinary.com/duuwbcn8o/image/upload/v1669111433/coming_soon_ailths.png"
            
          />
          <h2 className="mb-2 text-2xl text-white font-bold">
            So much more than a business analytics tool
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="mb-6 text-gray-50 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
          <a
            className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
            href="#"
          >
            Get Started
          </a>
          <div className="mt-12 flex justify-center space-x-3">
            <button className="p-1 bg-green-500 rounded-full"></button>
            <button className="p-1 bg-green-500 rounded-full"></button>
            <button className="p-1 bg-white rounded-full"></button>
            <button className="p-1 bg-green-500 rounded-full"></button>
          </div>
        </div>
      </div>

      
     </div>
  );
}

export default Layout;
