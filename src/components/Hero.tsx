import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to ArtVista Gallery</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the finest contemporary art in our curated spaces</p>
          <a 
            href="#exhibitions" 
            className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            View Exhibitions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;