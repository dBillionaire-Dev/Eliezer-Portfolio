import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut, FolderPlus, MessageSquare, Home } from "lucide-react";

export const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="w-64 bg-[#253A8F] text-white flex flex-col justify-between p-6">
      <div>
        <h2 className="text-2xl font-bold mb-10 text-orange-400">
          Impulse Grid
        </h2>

        <nav className="space-y-3">
          <NavLink
            to="/admin/add-project"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-lg ${
                isActive ? "bg-orange-500 text-white" : "hover:bg-blue-800"
              }`
            }
          >
            <FolderPlus className="inline mr-2" size={18} />
            Add Project
          </NavLink>

          <NavLink
            to="/admin/messages"
            className={({ isActive }) =>
              `block py-2 px-4 rounded-lg ${
                isActive ? "bg-orange-500 text-white" : "hover:bg-blue-800"
              }`
            }
          >
            <MessageSquare className="inline mr-2" size={18} />
            Messages
          </NavLink>

          <NavLink
            to="/"
            className="block py-2 px-4 rounded-lg hover:bg-blue-800"
          >
            <Home className="inline mr-2" size={18} />
            Back to Site
          </NavLink>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 py-2 rounded-lg text-sm font-semibold transition"
      >
        <LogOut className="mr-2" size={18} /> Logout
      </button>
    </div>
  );
};
