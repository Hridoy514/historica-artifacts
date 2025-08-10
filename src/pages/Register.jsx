import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase.init";
import { GiScrollQuill } from "react-icons/gi";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpper) return "Password must have at least one uppercase letter.";
    if (!hasLower) return "Password must have at least one lowercase letter.";
    if (!isLongEnough) return "Password must be at least 6 characters long.";
    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = form;
    const passwordError = validatePassword(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, { displayName: name, photoURL });
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-20 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200 dark:border-gray-700">
        <div className="flex items-center justify-center mb-6 text-3xl text-amber-600 dark:text-amber-400">
          <GiScrollQuill />
          <span className="ml-3 font-extrabold">Create an Account</span>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-100 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-100 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-100 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              value={form.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-100 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500 dark:text-gray-400">
          or continue with
        </div>

        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition"
        >
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Continue with Google
          </span>
        </button>

        <p className="mt-5 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-600 hover:underline dark:text-amber-400"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
