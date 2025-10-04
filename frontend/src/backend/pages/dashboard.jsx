import React, { useEffect, useState } from "react";
import { isAuthenticated, logout, getToken } from "../utils/auth";
import Flashnews from "./Flashnews";
import Achievements from "./Achievements";

export default function Dashboard() {
  const token = getToken();

  // ------------------ Redirect if not authenticated ------------------
  useEffect(() => {
    if (!isAuthenticated()) window.location.href = "/login";
  }, []);

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
              onClick={() => { logout(); window.location.reload(); }}
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
          <Flashnews token={token} />
          <Achievements token={token} />
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