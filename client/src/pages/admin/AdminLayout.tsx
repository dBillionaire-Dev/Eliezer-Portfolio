import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

