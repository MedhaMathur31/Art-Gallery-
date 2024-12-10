import React from 'react';

const Exhibition = () => {
  const exhibitions = [
    {
      title: "Modern Abstracts",
      artist: "Sarah Chen",
      date: "March 1-30, 2024",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80"
    },
    {
      title: "Urban Landscapes",
      artist: "Michael Rivera",
      date: "April 5-25, 2024",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Dreams",
      artist: "Emma Watson",
      date: "May 1-20, 2024",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="exhibitions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Current Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={exhibition.image} 
                alt={exhibition.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{exhibition.title}</h3>
                <p className="text-gray-600 mb-2">By {exhibition.artist}</p>
                <p className="text-teal-600">{exhibition.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibition;