import React, { useEffect, useState } from "react";
import { getToken, logout } from "../utils/auth"; // import from separate file

export default function Dashboard() {
  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };

  const [flashnews, setFlashnews] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [editing, setEditing] = useState(null);

  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formImage, setFormImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // ------------------ Fetch Flashnews & Achievements ------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/news/flashnews", {
          headers,
        });
        if (res.ok) {
          const data = await res.json();
          setFlashnews(data.flashnews || "");
          setAchievements(data.achievements || []);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (token) fetchData();
  }, [token]);

  // ------------------ Flashnews Save ------------------
  const saveFlashnews = async () => {
    try {
      await fetch("https://https://localhost:5000/news/flashnews", {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ flashnews }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------ Achievement Handlers ------------------
  const handleAchievementSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formTitle);
    formData.append("description", formDescription);
    if (formDate) formData.append("date", formDate);
    if (formImage) formData.append("image", formImage);

    const url = editing
      ? `https://localhost:5000/news/achievements/${editing._id}`
      : "https://localhost:5000/news/achievements";
    const method = editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setAchievements(data.achievements || [data.achievement]);
        resetForm();
      } else console.error(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://https://localhost:5000/news/achievements/${id}`,
        {
          method: "DELETE",
          headers,
        }
      );
      if (res.ok) setAchievements((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (achievement) => {
    setEditing(achievement);
    setFormTitle(achievement.title);
    setFormDescription(achievement.description);
    setFormDate(achievement.date ? achievement.date.slice(0, 10) : "");
    setFormImage(null);
    setImagePreview(achievement.image || null);
  };

  const resetForm = () => {
    setEditing(null);
    setFormTitle("");
    setFormDescription("");
    setFormDate("");
    setFormImage(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#00809D] rounded-lg flex items-center justify-center shadow-md mr-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0a1f44]">Dashboard</h1>
                <p className="text-sm text-gray-600">Manage your content</p>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                window.location.reload();
              }}
              className="bg-white border-2 border-red-500 text-red-500 px-5 py-2.5 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Flashnews Section */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Flash News</h2>
              </div>
            </div>
            <div className="p-6">
              <label
                htmlFor="flashnews"
                className="block text-[#0a1f44] text-sm font-semibold mb-3"
              >
                Breaking News Message
              </label>
              <input
                id="flashnews"
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400 mb-4"
                value={flashnews}
                onChange={(e) => setFlashnews(e.target.value)}
                placeholder="Enter breaking news headline..."
              />
              <button
                onClick={saveFlashnews}
                className="w-full bg-[#00809D] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#006b85] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                Save Flash News
              </button>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-[#0a1f44] opacity-70 flex items-center">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                This message will be displayed prominently to all users
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
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

            <div className="p-6 space-y-6">
              {/* Achievement Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#00809D] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#0a1f44]">
                        {editing ? "Edit Achievement" : "Add New Achievement"}
                      </h3>
                    </div>
                    {editing && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 ml-13">
                    {editing
                      ? "Update the details below"
                      : "Fill in the details to create a new achievement"}
                  </p>
                </div>

                <form onSubmit={handleAchievementSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-[#0a1f44] text-sm font-semibold mb-2"
                    >
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      placeholder="Enter achievement title"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-[#0a1f44] text-sm font-semibold mb-2"
                    >
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      placeholder="Describe the achievement in detail"
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44] placeholder-gray-400 min-h-24 resize-y"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-[#0a1f44] text-sm font-semibold mb-2"
                    >
                      Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00809D] transition-colors text-[#0a1f44]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="image"
                      className="block text-[#0a1f44] text-sm font-semibold mb-2"
                    >
                      Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex-1 cursor-pointer">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 hover:border-[#00809D] transition-colors flex items-center justify-center bg-gray-50">
                          <svg
                            className="w-5 h-5 text-gray-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">
                            {formImage ? formImage.name : "Choose an image"}
                          </span>
                        </div>
                        <input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setFormImage(e.target.files[0]);
                            setImagePreview(
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2 font-medium">
                          Preview:
                        </p>
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-48 h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#00809D] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#006b85] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {editing ? "Update Achievement" : "Add Achievement"}
                    </button>
                    {editing && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Achievement List */}
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
                    <p className="text-gray-600 font-medium">
                      No achievements yet
                    </p>
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

                            <p className="text-gray-700 mb-3 ml-11">
                              {ach.description}
                            </p>

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
                                {new Date(ach.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </div>
                            )}

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
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-sm text-[#0a1f44] opacity-70">
            © 2025 Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
