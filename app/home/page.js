import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between gap-36 px-20 py-4 bg-white shadow-md">
        {/* Left: Company Name */}
        <div className="text-3xl font-bold">
          <div className="pb-1 border-x-3 w-6 mx-2"></div>
          <div className="pb-0.5 border-3 w-10"></div>
          <span className="px-2.5 border-3 border-b-gray-950 w-6 text-green-900">
            e
          </span>
          vintli
        </div>

        {/* Center: Search Bar */}
        <div className="mx-5 flex-1/3">
          <input
            type="text"
            placeholder="Search services, suppliers,..."
            className="w-9/12 px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Right: Add Listing Button */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-indigo-700">
            Add Listing
          </button>
          <Image
            src="/assets/chat.png"
            alt="Profile"
            height={40}
            width={40}
            className="w-10 h-10 rounded-full ml-4"
          />
          <Image
            src="/assets/profile.png"
            alt="Profile"
            height={40}
            width={40}
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>
      </header>

      {/* Event Category Navigation */}
      <nav className="flex justify-center gap-4 py-4 bg-indigo-100">
        {["Wedding", "Birthday", "Ceremony", "Federal"].map((event) => (
          <button
            key={event}
            className="px-4 py-2 text-indigo-700 hover:text-indigo-900 hover:underline"
          >
            {event}
          </button>
        ))}
      </nav>

      {/* Main Body - Listings */}
      <main className="p-20">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Event Listings
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace this with dynamic listing cards later */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Sample Listing 1</h3>
            <p className="text-sm text-gray-600">
              Description of the event here...
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Sample Listing 2</h3>
            <p className="text-sm text-gray-600">Details about this venue...</p>
          </div>
          {/* Add more listing cards as needed */}
        </div>
      </main>
    </div>
  );
}
