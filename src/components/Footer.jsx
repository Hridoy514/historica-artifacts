import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#1e1e1e] via-[#2d2d2d] to-[#1a1a1a] text-gray-300 dark:text-gray-200 px-6 md:px-12 lg:px-24 py-10 mt-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Historica</h2>
          <p className="text-sm">
            Preserving the legacy of the past in the vaults of the present.
            Discover, share, and track historical artifacts around the globe.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/artifacts" className="hover:underline">
                All Artifacts
              </a>
            </li>
            <li>
              <a href="/add-artifact" className="hover:underline">
                Add Artifact
              </a>
            </li>
            <li>
              <a href="/liked-artifacts" className="hover:underline">
                Liked Artifacts
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@hisorica.app" className="underline">
              info@historica.app
            </a>
          </p>
          <p className="text-sm mt-2">
            Location: Global — Accessible from Anywhere
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Historica. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
