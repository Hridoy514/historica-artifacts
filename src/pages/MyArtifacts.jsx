import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import axiosSecure from "../axiosSecure";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/my-artifacts?email=${user.email}`)
        .then((res) => setMyArtifacts(res.data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This artifact will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/artifacts/${id}`).then(() => {
          setMyArtifacts((prev) => prev.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Artifact has been deleted.", "success");
          navigate("/my-artifact");
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-amber-700 dark:text-amber-400 text-center">
        My Added Artifacts
      </h2>

      {myArtifacts.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-10">
          You haven’t added any artifacts yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700 dark:text-amber-400">
                  {artifact.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {artifact.shortDescription?.slice(0, 80)}...
                </p>
                <div className="flex justify-between items-center mt-4 gap-2">
                  <Link
                    to={`/update-artifact/${artifact._id}`}
                    className="btn btn-sm bg-amber-500 text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
