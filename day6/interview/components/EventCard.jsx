export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {event.title}
        </h2>

        <p className="text-sm text-gray-500 mb-1">
          📅 {event.event_date} | ⏰ {event.start_time}
        </p>

        <p className="text-sm text-gray-500 mb-1">
          📍 {event.city || "Online"} ({event.mode_of_event})
        </p>

        <p className="text-sm text-gray-600 mb-2">
          {event.registration_type.toUpperCase()}
        </p>

        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
          {event.event_type}
        </span>
      </div>
    </div>
  );
}