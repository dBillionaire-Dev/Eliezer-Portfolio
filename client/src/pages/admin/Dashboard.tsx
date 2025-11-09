import React, {useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import ProjectList from "./ProjectList";

const AdminDashboard = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <main className="p-6">
          <h1 className="text-3xl font-semibold text-blue-800">All Projects</h1>
          <p className="text-gray-600 mt-2">Manage your projects and messages here.</p>
          <ProjectList key={reload ? 'reload1' : 'reload2'} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
