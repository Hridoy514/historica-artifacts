import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axiosSecure from "../axiosSecure";
import { AuthContext } from "../authProvider/AuthProvider";

const ArtifactDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/artifacts/${id}`).then((res) => {
      setArtifact(res.data);
      if (res.data.likedBy?.includes(user?.email)) {
        setIsLiked(true);
      }
    });
  }, [id, user?.email]);

  const handleLikeToggle = async () => {
    try {
      const res = await axiosSecure.patch(`/artifacts/${id}/like`, {
        email: user.email,
      });
      if (res.data?.success) {
        setArtifact((prev) => ({
          ...prev,
          likeCount: res.data.likeCount,
        }));
      }
    } catch (err) {
      console.error("Toggle like failed:", err.response?.data || err.message);
    }
  };

  if (!artifact) {
    return (
      <p className="text-center mt-40">
        <span className="loading loading-dots loading-lg text-amber-500"></span>
      </p>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen text-text dark:text-dark-text">
      {/* Hero Section with Overlay */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-end">
          <div className="max-w-6xl mx-auto px-6 py-8 text-white">
            <h1 className="text-4xl text-amber-500 md:text-6xl font-bold drop-shadow-xl">
              {artifact.name}
            </h1>
            <p className="mt-2 text-lg italic opacity-90">
              {artifact.shortDescription}
            </p>
            <button
              onClick={handleLikeToggle}
              className={`mt-4 px-6 py-2 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/40 text-white shadow-lg transition ${
                isLiked ? "bg-red-500/80 hover:bg-red-600" : ""
              }`}
            >
              {isLiked ? "💔 Unlike" : "❤️ Like"} ({artifact.likeCount})
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl bg-black mx-auto px-6 py-10 space-y-8">
        {/* Description */}
        <div className="text-lg font-bold leading-relaxed">{artifact.description}</div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Type", value: artifact.type },
            { label: "Historical Context", value: artifact.historicalContext },
            { label: "Created At", value: artifact.createdAt },
            { label: "Discovered At", value: artifact.discoveredAt },
            { label: "Discovered By", value: artifact.discoveredBy },
            { label: "Present Location", value: artifact.presentLocation },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-primary/20 backdrop-blur-sm shadow-sm"
            >
              <h4 className="font-semibold text-amber-500">
                {item.label}
              </h4>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Added By */}
        <div className="border-t pt-4 flex flex-wrap gap-4 items-center text-sm opacity-80">
          <span>
            Added By:{" "}
            <span className="font-semibold">{artifact.addedByName}</span>
          </span>
          <span>({artifact.addedByEmail})</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
