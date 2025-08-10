import { useEffect, useState } from "react";
import { Link } from "react-router"; 
import axiosSecure from "../axiosSecure";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchType, setSearchType] = useState("");

  // Fetch artifacts from backend
  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const res = await axiosSecure.get(`/artifacts?type=${searchType}`);
        setArtifacts(res.data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };
    fetchArtifacts();
  }, [searchType]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-amber-600 dark:text-amber-500">
        🏛️ Explore Historical Artifacts
      </h2>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by type (e.g., Weapons, Documents...)"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-900 dark:text-white"
        />
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artifacts.length > 0 ? (
          artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-[1.02]"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-amber-500 mb-1">
                  {artifact.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Type:</strong> {artifact.type}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {artifact.shortDescription?.slice(0, 80)}...
                </p>
                <Link
                  to={`/artifact/${artifact._id}`}
                  className="inline-block mt-4 text-sm bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-3">
            No artifacts found for this type.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllArtifacts;
