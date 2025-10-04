import React, { useEffect, useState } from "react";

export default function AchievementForm({
  token,
  achievements,
  setAchievements,
  editing,
  setEditing,
}) {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formImage, setFormImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const headers = { Authorization: `Bearer ${token}` };

  // Populate form when editing changes
  useEffect(() => {
    if (editing) {
      setFormTitle(editing.title);
      setFormDescription(editing.description);
      setFormDate(editing.date ? editing.date.slice(0, 10) : "");
      setImagePreview(editing.image || null);
      setFormImage(null);
    } else {
      resetForm();
    }
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formTitle);
    formData.append("description", formDescription);
    if (formDate) formData.append("date", formDate);
    if (formImage) formData.append("image", formImage);

    const url = editing
      ? `http://localhost:5000/news/achievements/${editing._id}`
      : "http://localhost:5000/news/achievements";
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
        setEditing(null); // clear editing after submit
      } else console.error(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormTitle("");
    setFormDescription("");
    setFormDate("");
    setFormImage(null);
    setImagePreview(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg shadow-md p-6">
      {/* Form Header */}
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
              onClick={() => setEditing(null)}
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

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
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

        {/* Description Textarea */}
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

        {/* Date Input */}
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

        {/* Image Upload */}
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
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }}
                className="hidden"
              />
            </label>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2 font-medium">Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-48 h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
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
              onClick={() => setEditing(null)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
