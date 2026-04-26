"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EventCard from "../../../components/EventCard";

export default function Events() {
  const router = useRouter();

  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    event_type: "",
    mode_of_event: "",
    registration_type: "",
    q: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔒 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const fetchEvents = async () => {
    setLoading(true);

    let query = new URLSearchParams({
      page: 1,
      per_page: 100,
      who_can_register: "public_users_bob_members",
      sort: "newest",
    });

    // dynamic filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });

    const res = await fetch(`/api/events?${query.toString()}`);
    const data = await res.json();

    console.log("EVENT DATA:", data);

    setEvents(data?.data?.data || []); // ✅ FIXED
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Events
      </h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        
        <input
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, q: e.target.value })
          }
        />

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, city: e.target.value })
          }
        >
          <option value="">City</option>
          <option value="delhi">Delhi</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, event_type: e.target.value })
          }
        >
          <option value="">Type</option>
          <option value="connect">Connect</option>
          <option value="elevate">Elevate</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({ ...filters, mode_of_event: e.target.value })
          }
        >
          <option value="">Mode</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({
              ...filters,
              registration_type: e.target.value,
            })
          }
        >
          <option value="">Free/Paid</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        <button
          onClick={fetchEvents}
          className="col-span-2 md:col-span-1 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
        >
          Apply
        </button>
      </div>

      {/* Loader */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          !loading && <p>No events found</p>
        )}
      </div>
    </div>
  );
}