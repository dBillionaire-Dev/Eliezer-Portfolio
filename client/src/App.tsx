import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
const BrandIdentity = lazy(() => 
  import("./pages/BrandIdentity"));
const BusinessCreatives = lazy(() => 
  import("./pages/BusinessCreatives"));
const PosterDesign = lazy(() => 
  import("./pages/PosterDesign"));
const Services = lazy(() => 
  import("./pages/Services"));
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

// Admin imports
import RequireAdminAuth from "@/components/RequireAdminAuth";
const AdminLayout = lazy(() => 
  import("./pages/admin/AdminLayout"));
const AdminLogin = lazy(() => 
  import("./pages/admin/Login"));
const AddProject = lazy(() => 
  import("./pages/admin/AddProject"));
const AdminDashboard = lazy(() => 
  import("./pages/admin/Dashboard"));
const EditProject = lazy(() => 
  import("./pages/admin/EditProject"));
const Messages = lazy(() => 
  import("./pages/admin/Messages"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Site */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="brand-identity" element={<BrandIdentity />} />
            <Route path="business-creatives" element={<BusinessCreatives />} />
            <Route path="poster-design" element={<PosterDesign />} />
            <Route path="services" element={<Services />} />
          </Route>

          {/* Admin Section */}
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
        </Suspense>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
