import React, { useState, useEffect } from "react";
import { Bell, User } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
        setProjects(res.data.slice(-5)); // last 5 projects
      } catch (error) {
        console.error("Error fetching notifications", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-3">
      <NavLink
            to="/admin"
             className={({ isActive }) =>
              `block py-2 px-4 ${
                isActive ? "text-white" : "hover:bg-orange-500"
              }`
            }
            >
      <h1 className="text-xl font-semibold text-[#253A8F]">Admin Dashboard</h1>
      </NavLink>
      <div className="flex items-center gap-6 relative">
        {/* Notification Bell */}
        <div className="relative">
          <Bell
            className="w-6 h-6 cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => setShowNotif(!showNotif)}
          />
          {showNotif && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 z-10">
              <button
                onClick={() => navigate("/admin")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              >
              <h3 className="text-sm font-semibold px-4 py-2 border-b text-gray-800">Recent Projects</h3>
              </button>
              <ul className="max-h-48 overflow-y-auto">
                {projects.map((proj) => (
                  <li key={proj._id} className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                    {proj.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="relative">
          <User
            className="w-6 h-6 cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => setShowUser(!showUser)}
          />
          {showUser && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
              <button
                onClick={() => navigate("/admin/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
