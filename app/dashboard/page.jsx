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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!stats) {
    return <p>No statistics available.</p>;
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        {/* Channel Details */}
        <div className="flex items-center">
          <img
            src={channelLogo}
            alt={channelName}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{channelName}</h1>
            <p>{subscribers} subscribers</p>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h2 className="text-lg font-bold">Total Views</h2>
            <p>{totalViews}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h2 className="text-lg font-bold">Total Watch Time</h2>
            <p>{totalWatchTime} minutes</p>
          </div>
        </div>

        {/* Latest Videos */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Latest Videos</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestVideos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 font-bold">{video.title}</h3>
                <p>Views: {video.views}</p>
                <p>Likes: {video.likes}</p>
                <p>Comments: {video.comments}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Comments */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Latest Comments</h2>
          <ul className="mt-4 space-y-4">
            {latestComments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="font-bold">{comment.author}</p>
                <p>{comment.text}</p>
                <p className="text-sm text-gray-500">
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
