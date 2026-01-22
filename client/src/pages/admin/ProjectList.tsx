import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Project } from "@/types/Project";
import { NavLink } from "react-router-dom";

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const res = await axios.get<{ data: Project[] }>(`${import.meta.env.VITE_API_URL}/api/projects`);
    setProjects(res.data.data);
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    if (!confirm('Are you sure you want to delete this project?')) return; {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
      });
      fetchProjects();
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((p) => (
        <div key={p._id} className="border rounded-lg overflow-hidden shadow">
          <img
            src={p.imageUrl}
            alt={p.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.category}</p>
            <p className="text-gray-700">{p.description}</p>
            <NavLink
              to={`/admin/projects/${p._id}/edit`}
              className="py-2 p-4 mr-2 rounded-sm bg-green-500 text-white hover:bg-green-600"
            >
              Edit Project
            </NavLink>
            <button
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(p._id)}
            >
              Delete Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
