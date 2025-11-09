import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BrandIdentity from "./pages/BrandIdentity";
import BusinessCreatives from "./pages/BusinessCreatives";
import PosterDesign from "./pages/PosterDesign";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

// 🔐 Admin imports
import RequireAdminAuth from "@/components/RequireAdminAuth";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AddProject from "./pages/admin/AddProject";
import AdminDashboard from "./pages/admin/Dashboard";
import EditProject from "./pages/admin/EditProject";
import Messages from "./pages/admin/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* 🌍 Public Site */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="brand-identity" element={<BrandIdentity />} />
            <Route path="business-creatives" element={<BusinessCreatives />} />
            <Route path="poster-design" element={<PosterDesign />} />
            <Route path="services" element={<Services />} />
          </Route>

          {/* 🔐 Admin Section */}
          <Route path="admin/login" element={<AdminLogin />} />
         <Route element={<RequireAdminAuth />}>
          <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="projects/:id/edit" element={<EditProject />} />
          <Route path="messages" element={<Messages />} />
          </Route>
         </Route>

      <Route path="admin/" element={<Navigate to="/admin" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
