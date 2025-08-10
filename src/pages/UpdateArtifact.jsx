import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosSecure from "../axiosSecure";
import { toast } from "react-toastify";

const UpdateArtifact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/artifacts/${id}`).then((res) => setArtifact(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      image,
      type,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    } = artifact;

    try {
      await axiosSecure.put(`/artifacts/${id}`, {
        name,
        image,
        type,
        historicalContext,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
      });
      toast.success("✅ Artifact updated successfully!");
      navigate("/my-artifacts");
    } catch (err) {
      toast.error("❌ Failed to update artifact.");
    }
  };

  if (!artifact) return (
    <p className="text-center mt-20 text-xl">
      <span className="loading loading-spinner loading-xl"></span>
    </p>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10
      bg-gradient-to-br from-amber-500 via-yellow-200 to-white
      dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <div
        className="w-full max-w-3xl bg-white/90 dark:bg-gray-900/80
        backdrop-blur-md border border-amber-200 dark:border-amber-700
        p-10 rounded-2xl shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-center text-amber-600 dark:text-amber-400 mb-8">
          ✍️ Update Artifact
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            name="name"
            value={artifact.name}
            onChange={handleChange}
            placeholder="Artifact Name"
            required
            className="input input-bordered w-full"
          />
          <input
            name="image"
            value={artifact.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="input input-bordered w-full"
          />
          <select
            name="type"
            value={artifact.type}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
            <option>Jewelry</option>
            <option>Statues</option>
            <option>Other</option>
          </select>
          <input
            name="historicalContext"
            value={artifact.historicalContext}
            onChange={handleChange}
            placeholder="Historical Context"
            className="input input-bordered w-full"
          />
          <input
            name="createdAt"
            value={artifact.createdAt}
            onChange={handleChange}
            placeholder="Created At (e.g., 100 BC)"
            className="input input-bordered w-full"
          />
          <input
            name="discoveredAt"
            value={artifact.discoveredAt}
            onChange={handleChange}
            placeholder="Discovered At"
            className="input input-bordered w-full"
          />
          <input
            name="discoveredBy"
            value={artifact.discoveredBy}
            onChange={handleChange}
            placeholder="Discovered By"
            className="input input-bordered w-full"
          />
          <input
            name="presentLocation"
            value={artifact.presentLocation}
            onChange={handleChange}
            placeholder="Present Location"
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            className="btn bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg tracking-wide shadow-lg transition-all duration-300"
          >
           Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;
