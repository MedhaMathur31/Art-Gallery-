import React, { useState } from 'react';

const Tickets = () => {
  const [ticketType, setTicketType] = useState('regular');
  const [quantity, setQuantity] = useState(1);

  const tickets = {
    regular: { name: 'Regular Entry', price: 15 },
    student: { name: 'Student', price: 8 },
    senior: { name: 'Senior Citizen', price: 10 },
  };

  return (
    <section id="tickets" className="py-16 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Book Your Visit</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ticket Type
            </label>
            <select
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="regular">Regular Entry - ${tickets.regular.price}</option>
              <option value="student">Student - ${tickets.student.price}</option>
              <option value="senior">Senior Citizen - ${tickets.senior.price}</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold">
              Total: ${tickets[ticketType as keyof typeof tickets].price * quantity}
            </p>
          </div>

          <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;