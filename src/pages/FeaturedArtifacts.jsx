import { useEffect, useState } from "react";
import axiosSecure from "../axiosSecure";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axiosSecure.get("/artifacts/featured").then((res) => {
      setArtifacts(res.data);
    });
  }, []);

  return (
    <section className="bg-black px-4 md:px-8 max-w-8xl py-10 mx-auto">
      <h2 className="text-4xl text-center font-extrabold text-amber-700 dark:text-amber-400 mb-4 tracking-tight">
        Featured Artifacts
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
        A curated showcase of unique and significant items
        each with its own <br />
        story, highlighting their history, craftsmanship, and cultural value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 shadow-xl rounded-lg overflow-hidden transform transition hover:scale-[1.02]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700 dark:text-amber-500">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-600 my-2">
                {item.description?.slice(0, 70)}...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-green-600 dark:text-amber-500">
                  ❤️ {item.likeCount}
                </span>
                <Link
                  to={`/artifact/${item._id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
