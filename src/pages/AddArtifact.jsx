import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import axiosSecure from "../axiosSecure";
import { toast } from "react-toastify";
import { FaPlusCircle } from "react-icons/fa";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: "Tools",
    historicalContext: "",
    shortDescription: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newArtifact = {
      ...formData,
      addedByName: user.displayName || "Unknown",
      addedByEmail: user.email,
      likeCount: 0,
    };

    try {
      const res = await axiosSecure.post("/artifacts", newArtifact);
      if (res.data.insertedId) {
        toast.success("✅ Artifact added successfully!");
        setFormData({
          name: "",
          image: "",
          type: "Tools",
          historicalContext: "",
          shortDescription: "",
          createdAt: "",
          discoveredAt: "",
          discoveredBy: "",
          presentLocation: "",
        });
      }
    } catch (err) {
      toast.error("❌ Failed to add artifact");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900">
      {/* Left Banner / Design */}
      <div className="md:w-1/2 w-full bg-amber-500 dark:bg-gray-900 text-white flex flex-col justify-center items-center p-10 text-center">
        <img
          src={user.photoURL || "https://i.ibb.co/ZYW3VTp/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold">
          Welcome, {user.displayName || "Explorer"}
        </h2>
        <p className="text-lg mt-2 max-w-md text-white/90">
          Add your newly discovered historical artifact and share it with the
          world.
        </p>
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full px-6 py-12 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Artifact Name"
              required
              className="input input-bordered w-full"
            />
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Artifact Image URL"
              required
              className="input input-bordered w-full"
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option>Tools</option>
              <option>Weapons</option>
              <option>Documents</option>
              <option>Writings</option>
              <option>Jewelry</option>
              <option>Statues</option>
            </select>
            <input
              type="text"
              name="historicalContext"
              value={formData.historicalContext}
              onChange={handleChange}
              placeholder="Historical Context"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Short Description"
              required
              className="input input-bordered w-full col-span-2"
            />
            <input
              type="text"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              placeholder="Created At (e.g., 100 BC)"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="discoveredAt"
              value={formData.discoveredAt}
              onChange={handleChange}
              placeholder="Discovered At (e.g., 1901)"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="discoveredBy"
              value={formData.discoveredBy}
              onChange={handleChange}
              placeholder="Discovered By"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="presentLocation"
              value={formData.presentLocation}
              onChange={handleChange}
              placeholder="Present Location"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={user.displayName}
              disabled
              className="input input-bordered w-full bg-base-200 text-gray-600"
            />
            <input
              type="email"
              value={user.email}
              disabled
              className="input input-bordered w-full bg-base-200 text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold tracking-wide transition"
          >
            <FaPlusCircle className="mr-2" />
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
