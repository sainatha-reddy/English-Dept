import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { BookOpen, Menu, MapPin } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top on route change to ensure each page loads at the top
  useEffect(() => {
    // Use instant/auto behavior so navigation lands at the top immediately
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

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
                About Us
              </Link>

            {/* Removed separate About link - root now serves as About Us */}

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
                 to="/programmes"
                 className={`text-sm transition-colors ${
                   isActive("/programmes")
                     ? "text-gray-900 font-medium"
                     : "text-gray-600 hover:text-gray-900"
                 }`}
               >
                 Programmes
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

              <Link
                to="/writing-centre"
                className={`text-sm transition-colors ${
                  isActive("/writing-centre")
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Writing Centre
              </Link>

              <Link
                to="/other-services"
                className={`text-sm transition-colors ${
                  isActive("/other-services")
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Other Services
              </Link>

              {/* Contact page removed */}
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
              About Us
            </Link>

            {/* Removed separate About link - root now serves as About Us */}

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
              to="/programmes"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                isActive("/programmes")
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Programme
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

            <Link
              to="/writing-centre"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                isActive("/writing-centre")
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Writing Centre
            </Link>

            <Link
              to="/other-services"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                isActive("/other-services")
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Other Services
            </Link>

            {/* Contact page removed */}
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
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            {/* Left Section (approx 40%) */}
            <div className="md:w-2/5">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Get in Touch</h3>

              <address className="not-italic text-sm text-gray-600 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Stream of English Department of Sciences and Humanities</p>
                    <p>Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram</p>
                    <p>Melakkottaiyur, Off Vandalur–Kelambakkam Road</p>
                    <p>Chennai – 600 127, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <p>Phone: +91-44-2747 6300 (Institute Main Line)</p>
                  <p>
                    Institute Website: <a className="text-blue-600 hover:underline" href="https://www.iiitdm.ac.in" target="_blank" rel="noreferrer">www.iiitdm.ac.in</a>
                  </p>
                </div>
              </address>
            </div>

            {/* Right Section (approx 60%) */}
            <div className="md:w-3/5 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Contact Details</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-600 table-auto">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 pr-6">Purpose</th>
                        <th className="pb-2">Email</th>
                      </tr>
                    </thead>
                    <tbody className="align-top">
                      <tr>
                        <td className="py-2 pr-6">General Enquiries</td>
                        <td className="py-2 break-words"><a href="mailto:english.sh@iiitdm.ac.in" className="hover:text-gray-900 transition-colors">english.sh@iiitdm.ac.in</a></td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">Writing Centre</td>
                        <td className="py-2 break-words"><a href="mailto:writingcentre@iiitdm.ac.in" className="hover:text-gray-900 transition-colors">writingcentre@iiitdm.ac.in</a></td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">PhD Admissions</td>
                        <td className="py-2 break-words"><a href="mailto:phd.admissions@iiitdm.ac.in" className="hover:text-gray-900 transition-colors">phd.admissions@iiitdm.ac.in</a></td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">Corporate and Professional Training</td>
                        <td className="py-2 break-words"><a href="mailto:training.english@iiitdm.ac.in" className="hover:text-gray-900 transition-colors">training.english@iiitdm.ac.in</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Reach Us section removed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
