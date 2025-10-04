import React, { useEffect, useState } from "react";
import AchievementForm from "./AchievementForm";
import AchievementList from "./AchievementList";

export default function Achievements({ token }) {
  const headers = { Authorization: `Bearer ${token}` };
  const [achievements, setAchievements] = useState([]);
  const [editing, setEditing] = useState(null);

  // ------------------ Fetch achievements automatically on load ------------------
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch("http://localhost:5000/news/achievements", {
          headers,
        });
        if (res.ok) {
          const data = await res.json();
          setAchievements(data.achievements || []);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (token) fetchAchievements(); // Fetch immediately
  }, [token]);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#00809D] px-6 py-4 border-b border-[#006b85]">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
            <svg
              className="w-5 h-5 text-[#00809D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Achievements</h2>
            <p className="text-white text-sm opacity-90">
              Manage your accomplishments
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-6">
        <AchievementForm
          token={token}
          achievements={achievements}
          setAchievements={setAchievements}
          editing={editing}
          setEditing={setEditing}
        />
        <AchievementList
          token={token}
          achievements={achievements}
          setAchievements={setAchievements}
          setEditing={setEditing}
        />
      </div>
    </div>
  );
}
