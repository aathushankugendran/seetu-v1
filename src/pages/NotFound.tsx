import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1851fc] mb-4 font-nunito">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="bg-[#1851fc] text-white hover:bg-[#1444d9] font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
