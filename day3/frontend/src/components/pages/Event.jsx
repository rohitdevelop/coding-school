import React, { useEffect } from "react";
import useCard from "../../hooks/data.jsx";

const Event = () => {
  const { cards, fetchCards, loading } = useCard();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Hello Sir <span className="text-[#00ff00]">BRAINYDX</span>
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg font-semibold">Loading cards...</p>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {cards?.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>

            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              View More
            </button>
          </div>
        ))}

      </div>

      {/* Empty */}
      {!loading && cards?.length === 0 && (
        <p className="text-center mt-10">No cards found</p>
      )}
    </div>
  );
};

export default Event;