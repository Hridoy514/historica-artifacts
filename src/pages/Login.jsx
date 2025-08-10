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
    <div className="min-h-screen flex">
      {/* Left Image Side */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/Nb808r8/pexels-pixabay-532263.jpg')",
        }}
      />

      {/* Right Form Side */}
      <div className="flex flex-col justify-center w-full md:w-1/2 bg-gray-900 text-white px-10 md:px-20 py-20 rounded-tr-3xl rounded-br-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-10">Sign in to your account</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 font-semibold flex justify-between items-center"
            >
              Password
              <Link
                to="/forgot-password"
                className="text-amber-500 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-lg text-white font-semibold transition"
          >
            Sign in
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-800 transition text-white"
        >
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium">Login with Google</span>
        </button>

        <p className="mt-10 text-center text-gray-400">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-amber-500 hover:underline font-semibold"
          >
            Join us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
