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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={artifact.image}
        alt={artifact.name}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h2 className="text-3xl mt-6 font-bold text-amber-700 dark:text-amber-400">
        {artifact.name}
      </h2>
      <p className="mt-4 text-black dark:text-gray-400">
        {artifact.description}
      </p>

      <button
        onClick={handleLikeToggle}
        className={`mt-6 btn px-6 py-2 rounded-full ${
          isLiked ? "bg-gray-500 text-white" : "bg-amber-500 text-white"
        }`}
      >
        {isLiked ? "💔 Unlike" : "❤️ Like"} ({artifact.likeCount})
      </button>
    </div>
  );
};

export default ArtifactDetails;
