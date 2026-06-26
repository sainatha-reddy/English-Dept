import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, MapPin, X, Mail, ArrowUp } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  // Track scroll for header shadow and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setShowBackToTop(y > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { path: "/", label: "About Us" },
    { path: "/faculty", label: "Faculty & Scholars" },
    { path: "/programmes", label: "Programmes" },
    //{ path: "/material", label: "Resources" },
    { path: "/writing-centre", label: "Writing Centre" },
    { path: "/other-services", label: "Other Services" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/iiitdm-logo.png"
                alt="IIITDM Kancheepuram"
                className="size-10 flex-shrink-0"
              />

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
            <nav className="hidden md:flex items-stretch h-full gap-1">
              {navLinks.map((link) => {
                const active = link.path === "/"
                  ? isActive("/") && location.pathname === "/"
                  : isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-5 text-[15px] transition-all duration-200 hover:-translate-y-0.5 border-b-2 ${
                      active
                        ? "text-blue-600 font-medium border-blue-600"
                        : "text-gray-600 hover:text-gray-900 border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger */}
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
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/images/iiitdm-logo.png"
                alt="IIITDM Kancheepuram"
                className="size-8 flex-shrink-0"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">STREAM OF ENGLISH</p>
                <p className="text-xs text-gray-600">IIITDM Kancheepuram</p>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close Menu"
            >
              <X className="size-5 text-gray-600" />
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  (link.path === "/"
                    ? location.pathname === "/"
                    : isActive(link.path))
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content with fade-in animation on route change */}
      <main className="flex-1 animate-fadeIn" key={location.pathname}>
        <Outlet />
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t-2 border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            {/* Left Section */}
            <div className="md:w-2/5">
              <h3 className="text-base font-semibold tracking-wide text-gray-900 mb-4">
                Get in Touch
              </h3>

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
                    Institute Website:{" "}
                    <a
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      href="https://www.iiitdm.ac.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.iiitdm.ac.in
                    </a>
                  </p>
                </div>
              </address>
            </div>

            {/* Right Section */}
            <div className="md:w-3/5 space-y-6">
              <div>
                <h3 className="text-base font-semibold tracking-wide text-gray-900 mb-4">
                  Contact Details
                </h3>

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
                        <td className="py-2 pr-6">
                          <div className="flex items-center gap-2">
                            <Mail className="size-4 text-blue-600 flex-shrink-0" />
                            <span>General Enquiries</span>
                          </div>
                        </td>
                        <td className="py-2 break-words">
                          <a
                            href="mailto:english.sh@iiitdm.ac.in"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            english.sh@iiitdm.ac.in
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">
                          <div className="flex items-center gap-2">
                            <Mail className="size-4 text-blue-600 flex-shrink-0" />
                            <span>Writing Centre</span>
                          </div>
                        </td>
                        <td className="py-2 break-words">
                          <a
                            href="mailto:writingcentre@iiitdm.ac.in"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            writingcentre@iiitdm.ac.in
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">
                          <div className="flex items-center gap-2">
                            <Mail className="size-4 text-blue-600 flex-shrink-0" />
                            <span>PhD Admissions</span>
                          </div>
                        </td>
                        <td className="py-2 break-words">
                          <a
                            href="mailto:phd.admissions@iiitdm.ac.in"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            phd.admissions@iiitdm.ac.in
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="py-2 pr-6">
                          <div className="flex items-center gap-2">
                            <Mail className="size-4 text-blue-600 flex-shrink-0" />
                            <span>Corporate and Professional Training</span>
                          </div>
                        </td>
                        <td className="py-2 break-words">
                          <a
                            href="mailto:training.english@iiitdm.ac.in"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            training.english@iiitdm.ac.in
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Divider and Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; 2026 Stream of English, IIITDM Kancheepuram. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
