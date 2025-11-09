
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
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: '#324391' }}>
      {/* White background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-white/10 rotate-45"></div>
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
