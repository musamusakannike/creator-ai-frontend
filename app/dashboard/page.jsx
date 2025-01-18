"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Authentication token not found. Please log in again.");
          return;
        }

        const response = await fetch("http://localhost:8080/youtube/analytics", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch analytics.");
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-center text-indigo-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!stats) {
    return <p className="text-center text-gray-600">No statistics available.</p>;
  }

  const {
    channelLogo,
    channelName,
    subscribers,
    totalViews,
    totalWatchTime,
    latestVideos,
    latestComments,
  } = stats;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Channel Details */}
        <div className="flex items-center">
          <img
            src={channelLogo}
            alt={channelName}
            className="w-16 h-16 rounded-full mr-4 border border-indigo-500"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {channelName}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {subscribers} subscribers
            </p>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
            <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              Total Views
            </h2>
            <p className="text-2xl font-extrabold">{totalViews}</p>
            <p className="text-sm text-gray-500 mt-2">Last 28 days</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
            <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              Total Watch Time
            </h2>
            <p className="text-2xl font-extrabold">{totalWatchTime} minutes</p>
            <p className="text-sm text-gray-500 mt-2">Last 28 days</p>
          </div>
        </div>

        {/* Latest Videos */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Latest Videos</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestVideos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 font-bold text-indigo-600 dark:text-indigo-400">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Views: {video.views}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Likes: {video.likes}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comments: {video.comments}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Comments */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Latest Comments</h2>
          <ul className="mt-4 space-y-4">
            {latestComments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-indigo-600 dark:text-indigo-400">
                  {comment.author}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{comment.text}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.publishedAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
