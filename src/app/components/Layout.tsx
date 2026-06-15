import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Menu,
} from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
              <Link
                to="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <BookOpen className="size-8 text-gray-800 flex-shrink-0" />

                <div className="leading-tight">
                  <h1 className="text-sm md:text-base font-semibold text-gray-900">
                    STREAM OF ENGLISH
                  </h1>

                  <p className="text-xs md:text-sm text-gray-600">
                    IIITDM Kancheepuram
                  </p>
                </div>
              </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>

              <Link
                to="/faculty"
                className={`text-sm transition-colors ${
                  isActive("/faculty")
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Faculty & Scholars
              </Link>

              <Link
                to="/material"
                className={`text-sm transition-colors ${
                  isActive("/material")
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Resources
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="size-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Slide-in Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          

          <nav className="flex flex-col p-4 gap-2 mt-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                location.pathname === "/"
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/faculty"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                isActive("/faculty")
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Faculty & Scholars
            </Link>

            <Link
              to="/material"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                isActive("/material")
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Resources
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Department of English
                    <br />
                    University Building, Room 301
                    <br />
                    123 University Avenue
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="size-4 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="size-4 flex-shrink-0" />
                  <span>english@university.edu</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Quick Links
              </h3>

              <div className="space-y-2 text-sm text-gray-600">
                <div>
                    <Link
                      to="/"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Home
                    </Link>
                </div>

                <div>
                  <Link
                    to="/faculty"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Faculty Directory
                  </Link>
                </div>

                <div>
                  <Link
                    to="/material"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Course Materials
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Office Hours
              </h3>

              <div className="text-sm text-gray-600 space-y-1">
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Department of English. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
