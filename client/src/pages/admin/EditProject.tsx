import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Sidebar } from "../../components/Sidebar";
import { Project } from "@/types/Project";

const EditProject: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [project, setProject] = useState<Project | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the project
  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await axios.get<{ data: Project[] }>(`${import.meta.env.VITE_API_URL}/api/projects`);
        const found = res.data.data.find(p => p._id === id);

        if (!found) {
          setProject(null);
          setPreview(null);
          return;
        }

        setProject(found);

        // Make sure preview is a full URL
        const imagePreview = found.imageUrl.startsWith("http")
          ? found.imageUrl
          : `${import.meta.env.VITE_API_URL}${found.imageUrl}`;
        setPreview(imagePreview);
      } catch (err) {
        console.error("Failed to fetch project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Update preview when a new image is selected
  const handleImageChange = (file: File | null) => {
    setNewImage(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  // Update project
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    try {
      const formData = new FormData();
      formData.append("title", project.title);
      formData.append("page_category", project.page_category);
      formData.append("category", project.category);
      formData.append("description", project.description);
      if (newImage) formData.append("image", newImage);

      await axios.put(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate("/admin"); // Navigate back after update
    } catch (err) {
      console.error("Failed to update project:", err);
      alert("Failed to update project. Check console for details.");
    }
  };

  if (loading) return <p className="p-6 text-center text-gray-600">Loading project...</p>;
  if (!project) return <p className="p-6 text-center text-red-600">Project not found.</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6 text-gray-600">Edit Project</h1>

          <form onSubmit={handleUpdate} className="bg-white p-6 rounded-2xl shadow space-y-4">
            <input
              type="text"
              value={project.title}
              onChange={(e) => setProject({ ...project, title: e.target.value })}
              className="w-full text-gray-700 p-2 border rounded"
              placeholder="Title"
            />

            <select
              value={project.page_category}
              onChange={(e) => setProject({ ...project, page_category: e.target.value})}
              className="w-full text-gray-700 p-2 border rounded"
            >
              <option value="">Select Page Category</option>
              <option value="brand-identity">Brand Identity</option>
              <option value="business-creatives">Business/Ad Creatives</option>
              <option value="poster-design">Poster Design</option>
            </select>

            <input
              type="text"
              value={project.category}
              onChange={(e) => setProject({ ...project, category: e.target.value })}
              className="w-full text-gray-700 p-2 border rounded"
              placeholder="Category"
            />

            <textarea
              value={project.description}
              onChange={(e) => setProject({ ...project, description: e.target.value })}
              className="w-full text-gray-700 p-2 border rounded"
              placeholder="Description"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded mt-2"
              />
            )}

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Update Project
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EditProject;
