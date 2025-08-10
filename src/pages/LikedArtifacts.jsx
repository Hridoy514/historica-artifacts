import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import axiosSecure from "../axiosSecure";
import { Link } from "react-router";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/artifacts/liked?email=${user.email}`)
      .then((res) => {
        setLikedArtifacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading liked artifacts:", err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  if (likedArtifacts.length === 0) {
    return (
      <div className="text-center mt-32">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          You haven't liked any artifacts yet!
        </h2>
        <p className="text-gray-500 mt-2">
          Explore and like some historic treasures ✨
        </p>
        <Link
          to="/all-artifacts"
          className="btn mt-4 bg-amber-500 text-white px-5 py-2 rounded-full"
        >
          Browse Artifacts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-amber-600 mb-8">
        Liked Artifacts ({likedArtifacts.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow p-4"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-400">
              {artifact.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {artifact.shortDescription}
            </p>
            <p className="text-gray-500 text-xs mt-1 italic">
              Type: {artifact.type}
            </p>
            <Link
              to={`/artifact/${artifact._id}`}
              className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded-full text-sm hover:bg-amber-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
