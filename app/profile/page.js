"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Jahirul Hoque",
    email: "jahirul@gmail.com",
    phone: "+91 91015 97411",
    image: "https://i.pravatar.cc/150?img=3",
  });

  return (
    <div className="min-h-screen top-0 bg-gray-400 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl ">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md"
          />
        </div>

        {/* User Info */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
