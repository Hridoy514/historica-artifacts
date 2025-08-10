import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase.init";
import { FaLandmark } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-yellow-50 to-emerald-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300 px-4 pt-20 pb-14">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200 dark:border-gray-700">
        <div className="flex items-center justify-center mb-6 text-4xl text-amber-600 dark:text-amber-400">
          <FaLandmark />
          <span className="ml-3 font-extrabold">Login to Historica</span>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
              required
            />
          </div>

          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-amber-600 dark:text-amber-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500 dark:text-gray-400">
          or login with
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition"
        >
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Login with Google
          </span>
        </button>

        <p className="mt-5 text-sm text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-amber-600 hover:underline dark:text-amber-400"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
