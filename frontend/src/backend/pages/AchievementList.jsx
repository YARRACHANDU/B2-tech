import React from "react";

export default function AchievementList({
  token,
  achievements,
  setAchievements,
  setEditing,
}) {
  const headers = { Authorization: `Bearer ${token}` };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/news/achievements/${id}`, {
        method: "DELETE",
        headers,
      });
      if (res.ok) setAchievements((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (achievement) => {
    setEditing(achievement); // pass the clicked achievement to form
  };

  return (
    <div className="space-y-4">
      {achievements.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-gray-600 font-medium">No achievements yet</p>
          <p className="text-gray-500 text-sm mt-1">
            Add your first achievement to get started
          </p>
        </div>
      ) : (
        achievements.map((ach) => (
          <div
            key={ach._id}
            className="bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Title with icon */}
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#00809D] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-[#00809D]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1f44]">
                      {ach.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-3 ml-11">{ach.description}</p>

                  {/* Date */}
                  {ach.date && (
                    <div className="flex items-center text-sm text-gray-600 ml-11">
                      <svg
                        className="w-4 h-4 mr-1.5 text-[#00809D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {new Date(ach.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  )}

                  {/* Image */}
                  {ach.image && (
                    <div className="mt-4 ml-11">
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-48 h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(ach)}
                    className="bg-white border-2 border-[#00809D] text-[#00809D] px-4 py-2 rounded-lg font-semibold hover:bg-[#00809D] hover:text-white transition-all duration-200 flex items-center text-sm shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ach._id)}
                    className="bg-white border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center text-sm shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
