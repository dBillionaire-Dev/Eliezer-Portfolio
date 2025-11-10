import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Sidebar } from "@/components/Sidebar";

const AddProject: React.FC = () => {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [pageCategory, setPageCategory] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return setMessage("Please upload an image.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("page_category", pageCategory);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/projects`, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Project added successfully!");
      setTitle(""); setPageCategory(""); setCategory(""); setDescription(""); setImage(null); setPreview(null);

      Navigate("/admin");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Failed to add project");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <main className="p-6">
          <h1 className="text-2xl text-blue-900 font-semibold mb-6">Add New Project</h1>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
            <input
              type="text"
              placeholder="Project Title"
              className="w-full p-2 border rounded text-gray-900"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <select
              value={pageCategory}
              onChange={(e) => setPageCategory(e.target.value)}
              className="w-full p-2 border rounded text-gray-900"
              required
            >
              <option value="">Select Page Category</option>
              <option value="brand-identity">Brand Identity</option>
              <option value="business-creatives">Business/Ad Creatives</option>
              <option value="poster-design">Poster Design</option>
            </select>
            <input
              type="text"
              placeholder="Set image category"
              className="w-full p-2 border rounded text-gray-900"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <textarea
              placeholder="Project Description"
              className="w-full p-2 border rounded text-gray-900"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input type="file" onChange={handleImageChange} className="block" />
            {preview && (
              <img src={preview} alt="preview" className="w-40 rounded-md shadow-md mt-2" />
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Upload Project
            </button>
            {message && <p className="text-gray-700 mt-2">{message}</p>}
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddProject;
